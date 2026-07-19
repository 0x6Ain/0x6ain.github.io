---
title: Redis 자료구조와 TTL
tags:
  - redis
  - cache
  - interview
---

# Redis 자료구조와 TTL

## Redis 자료구조

Redis는 단순 키-값 저장소가 아니라 다양한 자료구조를 값으로 지원한다.

- **String** — 가장 기본적인 값. 카운터(`INCR`), 세션 토큰 저장 등.
- **List** — 순서가 있는 값의 목록. 최근 게시물 N개, 간단한 큐 구현에
  사용.
- **Set** — 중복 없는 값의 집합. 태그, 팔로우 목록 등 교집합/합집합
  연산이 필요할 때.
- **Sorted Set (ZSET)** — 각 값에 score를 부여해 정렬된 상태로
  유지. 랭킹, 팔로우 피드의 Fan-out 타임라인 구현에 자주 쓰인다.
- **Hash** — 하나의 키 아래 여러 필드를 저장. 객체 하나를 통째로
  담기에 적합 (예: 유저 프로필).

## TTL (Time To Live)

키에 만료 시간을 설정해, 시간이 지나면 Redis가 자동으로 키를
삭제하도록 하는 기능.

- 세션, 인증 코드처럼 일정 시간만 유효해야 하는 데이터에 필수적이다.
- 캐시 데이터에 TTL을 설정하지 않으면 오래된(stale) 데이터가 영구히
  남아있거나, 메모리가 무한정 늘어날 수 있다.
- `EXPIRE key seconds`로 설정하거나, `SET key value EX seconds`처럼
  값 저장과 동시에 설정할 수 있다.

## 관련 문서

- [캐시 전략](redis-caching.md)
- [Pub/Sub와 Distributed Lock](redis-pubsub-lock.md)
- [재고 동시성 문제](../database/concurrency.md)
