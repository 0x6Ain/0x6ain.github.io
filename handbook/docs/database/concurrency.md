---
title: 재고 동시성 문제
tags:
  - database
  - concurrency
  - transaction
  - interview
---

# 재고 관리에서의 동시성 문제

## 문제 상황

재고가 1개인 상품에 동시에 두 건의 주문이 들어오면, 두 요청이 모두 재고를
1로 읽고(Read) 각자 차감(Write)하게 되어 **Overselling**(초과 판매)이
발생할 수 있다. 재고 조회와 차감 사이에 다른 트랜잭션이 끼어들 수 있는
전형적인 Race Condition이다.

## 해결 방법

### 1) Atomic Update (권장)

```sql
UPDATE product
SET stock = stock - 1
WHERE id = ?
AND stock > 0;
```

- 조회와 갱신이 하나의 SQL 문에서 원자적으로 수행된다.
- 별도의 애플리케이션 레벨 Lock 없이 Race Condition을 방지한다.
- `affectedRows`(변경된 row 수)로 재고 차감 성공 여부를 판단한다. 0이면
  재고 부족으로 실패한 것이다.

### 2) Pessimistic Lock

```sql
SELECT *
FROM product
WHERE id = ?
FOR UPDATE;
```

- 장점: 정합성이 가장 높다. 다른 트랜잭션은 Lock이 풀릴 때까지 대기한다.
- 단점: Lock 대기 시간만큼 TPS가 떨어질 수 있고, 트래픽이 몰리면 병목이
  될 수 있다.

### 3) Optimistic Lock

`version` 컬럼을 두고 업데이트 시점에 버전을 함께 비교한다. 버전이
일치하지 않으면(다른 트랜잭션이 먼저 갱신한 경우) 재조회 후 Retry한다.
Lock을 잡지 않으므로 충돌이 드문 상황에 적합하다.

### 4) Redis Distributed Lock

- `SETNX` 등을 이용해 여러 서버(다중 인스턴스) 환경에서도 하나의
  요청만 임계 구역에 진입하도록 만든다.
- TTL을 반드시 설정해야 하며, Lock을 잡은 인스턴스가 비정상 종료됐을 때
  Lock이 영구적으로 풀리지 않는 상황을 방지해야 한다.
- Lock 해제 시점(처리 완료 후 명시적 해제)과 TTL 만료 시점이 어긋나지
  않도록 설계해야 한다.

### 5) Kafka / SQS

주문 요청을 Queue에 적재해 순차적으로 처리한다.

- 장점: 순간적으로 몰리는 대규모 트래픽에도 안정적으로 대응할 수 있다.
- 단점: 처리 지연이 생기고, 시스템 구조가 복잡해진다.

## Queue를 쓰면 처리가 느려지지 않을까?

Kafka에서는 `productId`를 파티션 Key로 사용해 분산 처리한다.

- 동일 상품에 대한 요청 → 같은 파티션으로 들어가 순서가 보장된다.
- 서로 다른 상품에 대한 요청 → 다른 파티션에서 병렬로 처리된다.

즉 "상품 단위"로는 순차 처리되지만, "상품 간"에는 병렬 처리되므로
전체 처리량은 유지된다.

---

## ORM에서의 Atomic Update

핵심은 ORM 자체가 아니라 **DB가 Atomic Update를 지원한다는 사실**이다.
ORM은 그 위에 얇은 인터페이스를 얹은 것뿐이다.

Prisma 예시:

```ts
await prisma.product.updateMany({
  where: {
    id,
    stock: {
      gt: 0,
    },
  },
  data: {
    stock: {
      decrement: 1,
    },
  },
});
```

`update()` 대신 `updateMany()`를 쓰는 이유는, `update()`는 `where`에
고유 식별자(PK 등)만 사용할 수 있어 `stock > 0` 같은 조건을 함께 걸 수
없기 때문이다. `updateMany()`는 임의의 조건을 WHERE 절에 포함할 수 있어
Atomic Update 패턴을 그대로 표현할 수 있다.

## 관련 문서

- [Deadlock](deadlock.md)
- [Race Condition](race-condition.md)
