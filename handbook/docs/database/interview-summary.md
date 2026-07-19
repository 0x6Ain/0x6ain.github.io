---
title: 면접 핵심 정리
tags:
  - database
  - interview
---

# 면접 핵심 정리

- **Atomic Update**는 대부분의 커머스 서비스 재고 처리에서 가장 먼저
  고려할 좋은 선택지다. 조회-갱신을 한 SQL로 묶어 Race Condition을
  근본적으로 없앤다.
- **Deadlock**은 트랜잭션 간 Lock 획득 순서가 어긋날 때 발생하며, DB가
  Wait-for Graph로 감지해 한 트랜잭션을 Victim으로 Rollback시킨다.
- **Retry**는 그 자체로 위험할 수 있는 동작이므로, 멱등성이 보장되는
  작업에만 적용해야 한다.
- 백업은 시간 간격이 아니라 **RPO/RTO**를 기준으로 설계하며, **Full
  Backup + WAL(PITR)** 전략을 함께 사용한다.
- 보안은 암호화나 접근 제어 하나로 끝나지 않고, **예방 · 탐지 · 대응
  · 복구**까지 포함한 다층 방어(defense in depth)로 접근해야 한다.

## 관련 문서

- [재고 동시성 문제](concurrency.md)
- [Deadlock](deadlock.md)
- [Race Condition](race-condition.md)
- [Database Backup](backup.md)
- [Database 보안](security.md)
