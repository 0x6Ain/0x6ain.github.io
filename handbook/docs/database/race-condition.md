---
title: Race Condition
tags:
  - database
  - concurrency
  - interview
---

# Race Condition

여러 스레드(또는 여러 요청/프로세스)가 동시에 공유 자원에 접근할 때,
실행 순서에 따라 결과가 달라지는 문제.

## 해결 방법

- **Atomic Update** — 조회와 갱신을 하나의 연산으로 묶어 중간에 다른
  트랜잭션이 끼어들 여지를 없앤다.
- **Mutex** — 한 번에 하나의 스레드만 임계 구역(critical section)에
  진입하도록 강제한다.
- **Semaphore** — 동시에 접근 가능한 개수를 N개로 제한한다. Mutex는
  Semaphore의 N=1인 특수한 경우로 볼 수 있다.
- **Optimistic Lock** — Lock을 잡지 않고 버전 비교로 충돌을 감지한
  뒤 재시도한다.
- **Pessimistic Lock** — 자원에 접근하는 시점에 미리 Lock을 걸어
  충돌 자체를 막는다.

Deadlock은 이런 동시성 제어(주로 Lock) 과정에서 잘못된 대기 관계가
형성될 때 발생하는 특수한 상황이라고 볼 수 있다. 자세한 내용은
[Deadlock](deadlock.md) 문서를 참고한다.

## 관련 문서

- [재고 동시성 문제](concurrency.md)
- [Deadlock](deadlock.md)
- [스레드 동기화 - Mutex와 임계 구역](../os/thread-synchronization.md)
