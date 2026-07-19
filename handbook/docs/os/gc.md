---
title: GC가 동작하는 이유
tags:
  - os
  - memory
  - gc
  - interview
---

# GC(Garbage Collection)가 동작하는 이유

## 필요한 이유

Heap에 동적으로 할당한 메모리를 개발자가 수동으로 해제하지 않으면
**메모리 누수(Memory Leak)**가 발생한다. C/C++처럼 수동 메모리 관리
언어는 해제 시점을 실수하면 다음 문제가 생긴다.

- 해제를 잊음 → 메모리 누수
- 이미 해제된 메모리를 다시 사용(Use After Free) → 크래시, 보안 취약점
- 같은 메모리를 두 번 해제(Double Free) → 크래시

GC는 더 이상 참조되지 않는(도달 불가능한) 객체를 런타임이 자동으로
탐지해 회수함으로써, 이런 실수를 언어/런타임 레벨에서 방지한다.

## 대표적인 방식

- **Reference Counting** — 객체를 참조하는 곳의 개수를 세다가 0이
  되면 즉시 해제한다. 구현이 단순하지만 순환 참조를 스스로 해제하지
  못한다.
- **Mark and Sweep** — 루트(전역 변수, 스택 등)에서부터 도달 가능한
  객체를 표시(Mark)한 뒤, 표시되지 않은 객체를 한 번에 회수(Sweep)
  한다. 순환 참조도 처리할 수 있다.
- **Generational GC** — "대부분의 객체는 금방 죽는다"는 경험적
  가정을 기반으로, 새로 생성된 객체(Young/New Generation)를 자주,
  오래 살아남은 객체(Old Generation)는 드물게 검사해 효율을 높인다.
  V8(Node.js/Chrome)도 이 방식을 사용한다.

## Trade-off

GC는 메모리 관리 실수를 줄여주지만, GC가 동작하는 시점에 애플리케이션
실행이 일시 정지(Stop-The-World)될 수 있어 지연(latency)에 영향을
줄 수 있다. 그래서 GC 튜닝, Generational 전략, 힙 크기 설정 등이
실무에서 성능 이슈의 원인이 되기도 한다.

## 관련 문서

- [Memory 구조](memory.md)
