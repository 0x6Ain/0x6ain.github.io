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

<div class="event-loop-diagram">
<style>
.event-loop-diagram {
  --el-accent: #0f766e;
  --el-accent-bg: #ccfbf1;
  --el-accent-ink: #064e46;
  --el-queue: #b45309;
  --el-queue-bg: #fef3c7;
  --el-queue-ink: #7c3a0a;
  --el-line: #d8ddd9;
  --el-surface: #ffffff;
  margin: 1.5em 0;
}
[data-md-color-scheme="slate"] .event-loop-diagram {
  --el-accent: #2dd4bf;
  --el-accent-bg: #113a36;
  --el-accent-ink: #99f6e4;
  --el-queue: #f59e0b;
  --el-queue-bg: #3a2a0d;
  --el-queue-ink: #fde68a;
  --el-line: #2a3138;
  --el-surface: #1a2027;
}
.event-loop-diagram svg {
  display: block;
  max-width: 100%;
  height: auto;
  background: var(--el-surface);
  border: 1px solid var(--el-line);
  border-radius: 8px;
}
.event-loop-diagram figcaption {
  font-size: 0.8rem;
  opacity: 0.75;
  margin-top: 0.6em;
}
</style>
<figure>
<svg viewBox="0 0 1200 600" role="img" aria-label="withAwait 함수 실행 시, console.log(1) 실행 후 asyncCall 호출과 동시에 함수가 콜스택에서 빠져나가 Web API로 작업이 위임되고, 콜스택은 비어 다른 코드를 실행할 수 있으며, asyncCall이 완료되면 이어질 코드가 마이크로태스크 큐에 들어갔다가 콜스택이 빌 때 이벤트 루프에 의해 다시 실행되어 result와 2가 출력되는 과정">
<defs>
<marker id="el-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
<path d="M0,0 L10,5 L0,10 Z" fill="currentColor" />
</marker>
</defs>
<g font-size="12.5" fill="currentColor" opacity="0.6" font-weight="600">
<text x="14" y="129">Call Stack</text>
<text x="14" y="253">Web / Node API</text>
<text x="14" y="377">Microtask Queue</text>
<text x="14" y="501">Console Output</text>
</g>
<line x1="172" y1="66" x2="172" y2="556" stroke="var(--el-line)" stroke-width="1" />
<g stroke="var(--el-line)" stroke-width="1">
<line x1="172" y1="184" x2="1180" y2="184" />
<line x1="172" y1="308" x2="1180" y2="308" />
<line x1="172" y1="432" x2="1180" y2="432" />
</g>
<g stroke="var(--el-line)" stroke-width="1" stroke-dasharray="3 4">
<line x1="360" y1="50" x2="360" y2="556" />
<line x1="520" y1="50" x2="520" y2="556" />
<line x1="680" y1="50" x2="680" y2="556" />
<line x1="840" y1="50" x2="840" y2="556" />
<line x1="1000" y1="50" x2="1000" y2="556" />
</g>
<g font-size="11.5" fill="currentColor" opacity="0.6" text-anchor="middle">
<text x="280" y="38">console.log(1)</text>
<text x="440" y="38">asyncCall() 호출</text>
<text x="600" y="38">대기 중 (다른 코드 가능)</text>
<text x="760" y="38">asyncCall() 완료</text>
<text x="920" y="38">재개(resume)</text>
<text x="1080" y="38">console.log(result), (2)</text>
</g>
<rect x="210" y="90" width="140" height="70" rx="7" fill="var(--el-accent-bg)" stroke="var(--el-accent)" stroke-width="1.4" />
<text x="280" y="130" text-anchor="middle" font-size="12.5" fill="var(--el-accent-ink)" font-weight="600">console.log(1)</text>
<rect x="230" y="466" width="100" height="46" rx="6" fill="var(--el-accent-bg)" stroke="var(--el-accent)" stroke-width="1.2" />
<text x="280" y="494" text-anchor="middle" font-size="13" fill="var(--el-accent-ink)" font-weight="700">1</text>
<line x1="280" y1="160" x2="280" y2="464" stroke="var(--el-accent)" stroke-width="1.2" stroke-dasharray="2 4" marker-end="url(#el-arrow)" opacity="0.6" />
<rect x="370" y="90" width="140" height="70" rx="7" fill="var(--el-surface)" stroke="var(--el-queue)" stroke-width="1.4" />
<text x="440" y="122" text-anchor="middle" font-size="12" fill="currentColor" font-weight="600">await asyncCall()</text>
<text x="440" y="140" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.65">함수 일시정지 · 스택에서 제거</text>
<rect x="530" y="90" width="140" height="70" rx="7" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3" opacity="0.4" />
<text x="600" y="122" text-anchor="middle" font-size="11.5" fill="currentColor" opacity="0.6">(비어 있음)</text>
<text x="600" y="140" text-anchor="middle" font-size="10.5" fill="currentColor" opacity="0.6">스레드는 자유 — 다른 콜백 처리 가능</text>
<rect x="380" y="214" width="450" height="70" rx="7" fill="var(--el-queue-bg)" stroke="var(--el-queue)" stroke-width="1.4" />
<text x="605" y="245" text-anchor="middle" font-size="12.5" fill="var(--el-queue-ink)" font-weight="600">asyncCall() 실행 중</text>
<text x="605" y="263" text-anchor="middle" font-size="10.5" fill="var(--el-queue-ink)">JS 엔진 밖 — 브라우저/Node 런타임이 처리</text>
<path d="M440,160 C440,190 420,195 415,212" fill="none" stroke="var(--el-queue)" stroke-width="1.4" marker-end="url(#el-arrow)" />
<text x="452" y="196" font-size="10.5" fill="var(--el-queue-ink)">위임</text>
<rect x="690" y="338" width="140" height="70" rx="7" fill="var(--el-queue-bg)" stroke="var(--el-queue)" stroke-width="1.4" />
<text x="760" y="368" text-anchor="middle" font-size="12" fill="var(--el-queue-ink)" font-weight="600">이어질 코드 enqueue</text>
<text x="760" y="386" text-anchor="middle" font-size="10.5" fill="var(--el-queue-ink)">console.log(result); console.log(2)</text>
<path d="M790,284 C790,305 775,315 775,336" fill="none" stroke="var(--el-queue)" stroke-width="1.4" marker-end="url(#el-arrow)" />
<text x="800" y="312" font-size="10.5" fill="var(--el-queue-ink)">resolve</text>
<rect x="850" y="90" width="140" height="70" rx="7" fill="var(--el-accent-bg)" stroke="var(--el-accent)" stroke-width="1.4" />
<text x="920" y="120" text-anchor="middle" font-size="12" fill="var(--el-accent-ink)" font-weight="600">withAwait() 재개</text>
<text x="920" y="138" text-anchor="middle" font-size="10.5" fill="var(--el-accent-ink)">스택이 비자 이벤트 루프가 꺼냄</text>
<path d="M810,338 C860,300 900,220 910,162" fill="none" stroke="var(--el-accent)" stroke-width="1.4" marker-end="url(#el-arrow)" />
<text x="960" y="230" font-size="10.5" fill="var(--el-accent-ink)">event loop가 dequeue</text>
<rect x="1010" y="90" width="140" height="70" rx="7" fill="var(--el-accent-bg)" stroke="var(--el-accent)" stroke-width="1.4" />
<text x="1080" y="120" text-anchor="middle" font-size="11.5" fill="var(--el-accent-ink)" font-weight="600">console.log(result)</text>
<text x="1080" y="138" text-anchor="middle" font-size="11.5" fill="var(--el-accent-ink)" font-weight="600">console.log(2)</text>
<line x1="920" y1="160" x2="1050" y2="160" stroke="var(--el-accent)" stroke-width="1.2" stroke-dasharray="2 4" opacity="0.5" marker-end="url(#el-arrow)" />
<rect x="1015" y="466" width="90" height="46" rx="6" fill="var(--el-accent-bg)" stroke="var(--el-accent)" stroke-width="1.2" />
<text x="1060" y="494" text-anchor="middle" font-size="12" fill="var(--el-accent-ink)" font-weight="700">result</text>
<rect x="1113" y="466" width="60" height="46" rx="6" fill="var(--el-accent-bg)" stroke="var(--el-accent)" stroke-width="1.2" />
<text x="1143" y="494" text-anchor="middle" font-size="12" fill="var(--el-accent-ink)" font-weight="700">2</text>
<line x1="1080" y1="160" x2="1080" y2="464" stroke="var(--el-accent)" stroke-width="1.2" stroke-dasharray="2 4" opacity="0.5" marker-end="url(#el-arrow)" />
</svg>
<figcaption>초록색 = 콜스택에서 실행 중/출력됨, 주황색 = JS 엔진 밖(Web/Node API, 마이크로태스크 큐)에서 처리 중, 점선 테두리 = 콜스택이 비어 다른 코드가 실행될 수 있는 구간.</figcaption>
</figure>
</div>

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
