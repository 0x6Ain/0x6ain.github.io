---
title: Kafka / SQS 기본 개념
tags:
  - kafka
  - sqs
  - message-queue
  - interview
---

# Kafka / SQS 기본 개념

## Message Queue를 사용하는 이유

요청을 처리 즉시 응답하는 대신 큐에 적재하고 비동기로 처리하면 다음과
같은 이점이 있다.

- **트래픽 스파이크 흡수** — 순간적으로 요청이 몰려도 큐에 쌓아두고
  Consumer가 자신의 처리 속도에 맞춰 소비할 수 있다.
- **서비스 간 결합도 감소** — 생산자(Producer)와 소비자(Consumer)가
  서로의 가용성에 실시간으로 의존하지 않는다. Consumer가 잠시
  죽어도 메시지는 큐에 남아있다.
- **재시도/장애 복구 용이** — 처리 실패 시 메시지를 다시 큐에 돌려
  재처리할 수 있다.

[재고 동시성 문제](../database/concurrency.md)에서 다룬 것처럼,
주문 폭주 상황에서 Queue로 순차 처리하는 것도 이 원리를 활용한
것이다.

## At Least Once vs Exactly Once

메시지 전달 보장 수준.

- **At Least Once** — 메시지가 최소 한 번은 전달된다. 네트워크
  재시도 등으로 **중복 전달**될 수 있다. Consumer가 멱등하게
  처리하도록 설계해야 한다 (참고:
  [멱등성](../network/rest-idempotency.md)).
- **Exactly Once** — 메시지가 정확히 한 번만 처리된다. 구현이
  복잡하고 성능 비용이 크다 (Kafka는 Transaction과 Idempotent
  Producer를 조합해 프로듀서→토픽 구간에서 지원한다).
- 실무에서는 **At Least Once + Consumer 멱등 처리**가 가장 흔한
  현실적인 선택이다.

## Consumer Group, Partition, Offset

- **Partition** — 하나의 토픽(Topic)을 여러 개로 나눈 것. 병렬
  처리의 단위가 된다.
- **Consumer Group** — 여러 Consumer 인스턴스를 묶은 그룹. 같은
  그룹 안에서는 하나의 파티션을 한 Consumer만 소비해, 그룹 전체가
  협력해 토픽을 병렬로 소비한다.
- **Offset** — 각 파티션에서 Consumer가 어디까지 읽었는지 가리키는
  위치값. Consumer는 처리 완료 후 Offset을 커밋해 "여기까지 읽었다"
  고 기록한다.

[재고 동시성 문제](../database/concurrency.md)에서 다룬 것처럼,
`productId`를 파티션 키로 사용하면 같은 상품 메시지는 항상 같은
파티션(같은 Consumer)으로 가서 순서가 보장되고, 다른 상품은 다른
파티션에서 병렬로 처리된다.

## DLQ (Dead Letter Queue)

여러 번 재시도해도 계속 처리에 실패하는 메시지를 무한정 재시도하지
않고 별도의 큐(DLQ)로 옮겨두는 것. 정상 처리 흐름을 막지 않으면서,
실패한 메시지는 나중에 별도로 원인을 분석하고 재처리할 수 있다.

## Ordering (순서 보장)

- 하나의 파티션 내부에서는 메시지 순서가 보장된다.
- 파티션이 여러 개면 파티션 간 순서는 보장되지 않는다.
- "동일 대상(예: 같은 상품, 같은 유저)에 대한 이벤트는 반드시 순서가
  지켜져야 한다"는 요구사항이 있으면, 그 대상의 ID를 파티션 키로
  사용해 같은 파티션으로 보내야 한다.

## 관련 문서

- [재고 동시성 문제](../database/concurrency.md)
- [REST와 멱등성](../network/rest-idempotency.md)
