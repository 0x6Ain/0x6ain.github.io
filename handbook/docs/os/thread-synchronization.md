---
title: 스레드 동기화 - Mutex와 임계 구역
tags:
  - os
  - thread
  - concurrency
  - mutex
  - interview
---

# 스레드 동기화 - Mutex와 임계 구역

여러 스레드가 힙(heap) 같은 공유 메모리를 동시에 건드리면
[Race Condition](../database/race-condition.md)이 생긴다. 이를 막는 가장
기본적인 동기화 도구가 **뮤텍스(Mutex, Mutual Exclusion)**다.

## 뮤텍스가 실제로 하는 일

뮤텍스는 공유 자원 자체가 아니라, 그 자원에 접근하는 **코드 구간
(critical section, 임계 구역)**에 "한 번에 하나의 스레드만 들어갈 수
있다"는 규칙을 강제한다.

- `lock()` 호출 시 이미 다른 스레드가 락을 쥐고 있으면, 호출한
  스레드는 **블록(대기)**된다.
- 락을 쥔 스레드가 `unlock()`을 호출하면, 대기 중이던 스레드 중
  하나가 락을 얻어 임계 구역에 진입한다.

## 뮤텍스는 메모리를 물리적으로 잠그지 않는다

가장 흔한 오해는 "뮤텍스가 데이터를 잠근다"는 것이다. 실제로는 특정
변수나 메모리 주소에 접근 자체를 막는 하드웨어적 장치가 아니라,
**"이 자원을 건드리기 전엔 반드시 이 뮤텍스를 먼저 잠가야 한다"는
약속(convention)을 코드가 지키도록 강제하는 신호등**에 가깝다.

```c
// 스레드 A, B가 공유하는 counter
int counter = 0;
pthread_mutex_t lock;

void increment() {
    pthread_mutex_lock(&lock);   // 임계 구역 진입
    counter++;                   // read-modify-write, 원자적이지 않은 연산
    pthread_mutex_unlock(&lock); // 임계 구역 탈출
}
```

만약 다른 스레드가 `pthread_mutex_lock` 없이 그냥 `counter`를
건드리면, 뮤텍스는 이를 막지 못한다. 즉 **뮤텍스가 보호하는 건
"코드 구간의 동시 실행(interleaving)"이지 "메모리 주소"가 아니다** —
그 구간을 거치지 않고 자원에 접근하는 경로가 하나라도 있으면 보호는
깨진다.

## 왜 이게 Race Condition을 막는가

`counter++`은 겉보기엔 한 줄이지만 내부적으로는 read → modify →
write 세 단계로 나뉘는 non-atomic 연산이다. 두 스레드가 이 사이에
끼어들면 갱신이 유실될 수 있다. 뮤텍스는 이 세 단계 전체를 하나의
임계 구역으로 묶어, 중간에 다른 스레드가 끼어드는 걸 원천 차단한다.

## Semaphore와의 관계

- **Mutex**: 임계 구역에 동시 진입 가능한 스레드 수를 1개로 제한.
  소유권(ownership) 개념이 있어, 락을 건 스레드만 해제할 수 있다.
- **Semaphore**: 동시 접근 가능한 개수를 N개로 제한하는 카운터 기반
  도구. Mutex는 N=1인 Semaphore의 특수 케이스로 볼 수 있지만,
  Semaphore는 소유권 개념이 없어 다른 스레드가 대신 해제할 수도 있다.

## 관련 문서

- [프로세스, 스레드, Context Switching](process-thread.md)
- [Race Condition](../database/race-condition.md)
- [Deadlock](../database/deadlock.md)
