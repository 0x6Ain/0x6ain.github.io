---
title: Deadlock
tags:
  - database
  - transaction
  - concurrency
  - interview
---

# Deadlock

## 정의

서로 다른 트랜잭션이 서로가 가진 Lock을 기다리며, 아무도 더 이상
진행하지 못하는 상태.

## 발생 조건

Deadlock은 아래 4가지 조건이 동시에 성립할 때 발생한다.

1. **Mutual Exclusion** — 자원을 한 번에 하나의 트랜잭션만 점유할 수
   있다.
2. **Hold and Wait** — 트랜잭션이 자원을 점유한 채로 다른 자원을
   기다린다.
3. **No Preemption** — 다른 트랜잭션이 점유 중인 자원을 강제로 빼앗을
   수 없다.
4. **Circular Wait** — 트랜잭션들이 서로 순환 형태로 자원을 기다린다.

## 해결 방법

- **Lock 획득 순서 통일** — 여러 테이블/row에 Lock을 거는 순서를
  애플리케이션 전체에서 일관되게 유지하면 Circular Wait 자체가
  발생하지 않는다.
- **Transaction 최소화** — 트랜잭션이 점유하는 자원과 지속 시간을
  최대한 짧게 유지한다.
- **Timeout** — Lock 대기 시간에 상한을 두어 무한 대기를 막는다.
- **Retry (Exponential Backoff)** — Deadlock으로 실패한 트랜잭션을
  점진적으로 늘어나는 대기 시간을 두고 재시도한다.

## DB는 Deadlock을 스스로 감지할까?

대부분의 RDBMS는 내부적으로 **Wait-for Graph**(트랜잭션 간 대기 관계
그래프)를 관리한다. 이 그래프에서 Cycle이 발견되면 DB가 Deadlock을
감지한 것이며, 그중 한 트랜잭션을 **Victim**으로 선택해 강제로
Rollback시켜 나머지 트랜잭션이 진행할 수 있게 한다.

Retry는 실패한 트랜잭션을 다시 실행하는 것이므로, **멱등성
(Idempotency)이 보장되는 작업에만** 적용하는 것이 안전하다. 예를 들어
단순 조회나 조건부 UPDATE는 재시도해도 안전하지만, "잔액에서 무조건
1000원을 차감"처럼 중복 실행 시 부작용이 있는 작업은 재시도 전에
멱등성 처리(예: 요청 ID 기반 중복 방지)가 필요하다.

## 관련 문서

- [재고 동시성 문제](concurrency.md)
- [Race Condition](race-condition.md)
