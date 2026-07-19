---
title: 캐시 전략 (Cache Aside, Write Through, Eviction)
tags:
  - redis
  - cache
  - interview
---

# 캐시 전략

## Cache Aside (Lazy Loading)

애플리케이션이 캐시와 DB를 직접 조율하는 가장 널리 쓰이는 패턴.

- **조회**: 캐시를 먼저 확인 → 있으면 반환(Cache Hit) → 없으면
  DB에서 조회 후 캐시에 저장(Cache Miss)
- **쓰기**: DB를 갱신하고, 해당 캐시는 **삭제**한다 (갱신이 아니라
  삭제 후, 다음 조회 시 다시 채워 넣는 방식이 더 안전하다).

## Write Through

쓰기 요청이 오면 캐시와 DB를 **동시에** 갱신하는 방식. 캐시가 항상
최신 상태를 유지하지만, 매 쓰기마다 캐시 갱신 비용이 추가된다.

## Redis Eviction (제거 정책)

메모리가 가득 찼을 때 Redis가 어떤 키를 지울지 결정하는 정책.

- `noeviction` — 더 이상 쓰기를 받지 않고 에러를 반환한다.
- `allkeys-lru` — 가장 최근에 사용되지 않은(Least Recently Used)
  키부터 제거. 캐시 용도로 가장 흔하게 쓰인다.
- `volatile-lru` — TTL이 설정된 키 중에서만 LRU로 제거.
- `allkeys-lfu` / `volatile-lfu` — 사용 빈도(Least Frequently Used)
  기준으로 제거.

## 캐시가 깨지는 문제는?

- **Cache Stampede(캐시 스탬피드)** — 인기 있는 캐시 키가 만료되는
  순간, 대량의 요청이 동시에 DB로 몰려 부하가 급증하는 현상.
  해결책으로는 만료 직전 미리 갱신하기(Early Refresh), 첫 요청만
  DB를 조회하도록 락을 거는 방법(Distributed Lock) 등이 있다.
- **Thundering Herd** — 여러 서버/스레드가 동시에 캐시 미스를 겪고
  동시에 DB에 같은 쿼리를 날리는 문제. 위와 같은 완화 전략을 쓴다.
- **캐시 정합성 깨짐** — DB는 갱신됐는데 캐시를 지우지 않거나(또는
  갱신 순서가 꼬여) 오래된 데이터가 계속 반환되는 문제. 쓰기 시점에
  캐시를 반드시 무효화(삭제)하는 순서를 지켜야 한다.

## Redis 장애 시 어떻게 하나요?

- **Replication**으로 여러 대의 복제본을 두고, 마스터 장애 시
  **자동 페일오버**(Redis Sentinel, Redis Cluster)로 복제본을
  새 마스터로 승격시킨다.
- 애플리케이션 레벨에서는 캐시 조회 실패 시 바로 예외를 던지지 않고
  DB로 **Fallback**하도록 설계해, Redis 장애가 서비스 전체 장애로
  번지지 않게 한다 (단, 이 경우 DB 부하가 급증할 수 있으므로 Circuit
  Breaker 등으로 보호한다).
- 캐시는 어디까지나 "있으면 빠르고, 없어도 서비스는 동작해야 하는"
  보조 계층으로 설계하는 것이 원칙이다.

## 관련 문서

- [Redis 자료구조와 TTL](redis-data-structures.md)
- [재고 동시성 문제](../database/concurrency.md)
