---
title: Redis Pub/Sub와 Distributed Lock
tags:
  - redis
  - pubsub
  - distributed-lock
  - interview
---

# Redis Pub/Sub와 Distributed Lock

## Pub/Sub

Publisher가 채널에 메시지를 발행(Publish)하면, 그 채널을
구독(Subscribe)한 모든 Subscriber가 실시간으로 메시지를 받는 방식.

- 서버 여러 대가 떠 있는 환경에서 실시간 알림, 채팅 메시지 브로드
  캐스트 등에 사용한다 (예: 소켓 서버가 여러 대일 때, 한 서버가
  받은 메시지를 다른 서버에 붙어있는 사용자에게도 전달).
- 메시지를 **저장하지 않는다**. Subscriber가 그 순간 연결돼 있지
  않으면 메시지를 놓친다. 메시지 유실 없이 순서·재처리가 필요하면
  [Kafka](../kafka/kafka-basics.md) 같은 메시지 큐가 더 적합하다.

## Distributed Lock

여러 서버(인스턴스)가 동시에 같은 자원에 접근하지 못하도록, Redis를
공유 Lock 저장소로 사용하는 방식. 기본 아이디어와 재고 동시성
문제에서의 활용은 [재고 동시성 문제](../database/concurrency.md)에서
다뤘다. 여기서는 Lock 자체의 안전성을 좀 더 살펴본다.

**기본 구현**

```
SET lock:order:123 <unique-value> NX PX 5000
```

- `NX` — 키가 없을 때만 설정 (이미 있으면 다른 누군가 Lock을 쥐고
  있다는 뜻)
- `PX 5000` — 5초 TTL. 락을 쥔 인스턴스가 죽어도 영구히 잠기지 않게
  한다.
- 저장하는 값은 매 요청마다 다른 고유값으로 하여, 해제할 때 **내가
  건 락이 맞는지 확인 후 지운다**(다른 인스턴스가 이미 새로 건 락을
  실수로 지우지 않기 위함).

**주의할 점**

- TTL이 처리 시간보다 짧으면, 처리 도중 락이 풀려 다른 인스턴스가
  동시에 진입할 수 있다. 처리 시간을 보수적으로 넉넉히 잡거나, 락을
  들고 있는 동안 주기적으로 TTL을 연장(Lock Extension)한다.
- 단일 Redis 노드가 장애나면 락이 사라질 수 있다. 더 엄격한 신뢰성이
  필요하면 여러 독립된 Redis 노드 중 과반수에서 락을 획득해야
  성공으로 간주하는 **Redlock** 알고리즘을 고려한다.

## 관련 문서

- [재고 동시성 문제](../database/concurrency.md)
- [캐시 전략](redis-caching.md)
