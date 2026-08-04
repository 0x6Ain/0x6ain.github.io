---
title: 동기/비동기와 이벤트 루프
tags:
  - javascript
  - event-loop
  - async
  - interview
---

# 동기/비동기와 이벤트 루프

## 동기 vs 비동기, 기준은 "순서"가 아니라 "기다림"

동기/비동기를 "1,2,3 순서대로 실행되냐 vs 뒤섞여서 실행되냐"로
이해하기 쉽지만, 핵심 기준은 순서가 아니라 **호출한 쪽이 결과를
기다리는지 여부**다.

- **동기(Sync)**: 어떤 작업을 호출하면 그 작업이 끝날 때까지 호출자가
  **블록되어 기다린다**. 순서대로 실행되는 것처럼 보이는 이유도
  "각 작업이 끝나야 다음이 시작되기 때문"이지, 순서 자체가 본질은
  아니다.
- **비동기(Async)**: 작업을 호출하고 **끝날 때까지 기다리지 않고**
  바로 다음 코드로 넘어간다. 결과는 나중에 콜백/Promise 등으로 통보
  받는다.

비동기라고 실행 순서가 임의로 뒤섞이는 게 아니라, "요청은 호출한
순서대로 나가지만 **완료(응답)는 순서와 무관하게 올 수 있다**"가
정확한 표현이다.

## 자바스크립트는 싱글 스레드인데 어떻게 비동기를 처리하나

JS 엔진 자체는 콜스택 하나만 돌리는 싱글 스레드지만, 시간이 걸리는
작업은 엔진 밖(브라우저 Web API / Node의 libuv)으로 위임하고, 끝나면
콜백을 다시 콜스택으로 넣어주는 구조로 비동기를 구현한다.

**구성 요소**

- **Call Stack**: JS 코드가 실행되는 곳. 싱글 스레드라 한 번에 하나의
  함수만 실행된다.
- **Web APIs / Node APIs**: `setTimeout`, `fetch`, 파일 I/O 등은
  JS 엔진이 아니라 브라우저나 Node 런타임(libuv)이 별도 스레드/커널
  비동기 I/O로 처리한다.
- **Task Queue(매크로태스크) / Microtask Queue**: 비동기 작업이
  끝나면 그 콜백을 큐에 넣어둔다. Promise는 microtask, `setTimeout`
  등은 macrotask로 분류된다.
- **Event Loop**: Call Stack이 비어있는지 계속 확인하다가, 비어있으면
  큐에서 콜백을 꺼내 Call Stack에 넣어 실행한다.

```js
console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
// 출력: 1, 3, 2
```

`setTimeout` 호출은 타이머를 Web API에 위임하고 즉시 리턴하므로
스택을 막지 않는다. 동기 코드(1, 3)가 먼저 다 실행되어 스택이 빈
뒤에야 이벤트 루프가 큐에서 콜백(2)을 꺼내 실행한다.

## async/await는 동기가 아니라 "동기처럼 보이는" 비동기다

```js
async function withAwait() {
  console.log(1);
  const result = await asyncCall();
  console.log(result);
  console.log(2);
}
```

`await`을 만나면 `withAwait()`의 실행이 **일시정지**되고 제어권이
이벤트 루프로 넘어간다. 이때 **스레드는 블록되지 않는다** — 콜스택이
비워지고 다른 코드가 실행될 수 있다. `asyncCall()`의 Promise가
resolve되면, 그 이후 코드(`console.log(result)`부터)가 **microtask**로
큐에 들어가고, 콜스택이 빌 때 이벤트 루프가 꺼내 이어서 실행한다.

**실행 순서**

1. `console.log(1)` — 콜스택에서 즉시 실행, 동기
2. `await asyncCall()` — 작업은 Web/Node API로 위임, 함수는 콜스택에서
   내려가 일시정지
3. 콜스택이 비는 동안 스레드는 다른 콜백을 자유롭게 처리
4. `asyncCall()` 완료 → 이어질 코드가 microtask 큐에 enqueue
5. 콜스택이 완전히 빌 때 이벤트 루프가 microtask를 dequeue, 함수 재개
6. `console.log(result)`, `console.log(2)`가 한 번의 재개 안에서 연속
   실행 (중간에 다른 코드가 끼어들 틈 없음)

`async/await`는 Promise 기반 비동기 코드를 동기적인 문법으로 쓸 수
있게 해주는 **syntactic sugar**일 뿐, 내부적으로는 `.then()` 체인과
동일하게 동작하며 스레드를 막지 않는다는 비동기의 본질은 그대로
유지된다.

## 비동기가 오히려 손해인 경우

- **순서가 반드시 보장돼야 하는 로직**: 여러 비동기 작업이 서로
  의존적인데 병렬로 날리면 완료 순서가 뒤섞여 버그가 생긴다.
- **단순한 순차 로직을 억지로 비동기로 짤 때**: 콜백/Promise 체인이
  쌓이면 오히려 추적하기 어려워진다. 이럴 땐 `await`으로 동기처럼
  보이게 쓰는 게 맞다.
- **CPU-bound 작업**: `await`은 I/O 대기를 넘기는 것이지, 무거운
  동기 연산 자체를 비동기로 감싼다고 스레드가 안 막히는 게 아니다.
  진짜 병렬 처리가 필요하면 Worker Threads 같은 별도 스레드가 필요.
- **디버깅/스택 트레이스**: 비동기 코드는 에러 발생 시 호출 스택이
  끊겨 추적이 동기 코드보다 어렵고, `try/catch`를 빠뜨리면 unhandled
  rejection이 조용히 묻히기 쉽다.
- **결과가 즉시 필요한 상황**: 이미 동기적으로 바로 계산 가능한
  값까지 Promise로 감싸면 마이크로태스크 큐 관리 비용만 늘어난다.

## 관련 문서

- [프로세스, 스레드, Context Switching](../os/process-thread.md)
- [스레드 동기화 - Mutex와 임계 구역](../os/thread-synchronization.md)
