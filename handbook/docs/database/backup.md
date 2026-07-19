---
title: Database Backup
tags:
  - database
  - backup
  - wal
  - aws
  - interview
---

# Database Backup

백업 전략은 "얼마나 자주 백업하는가"보다 **RPO / RTO**를 기준으로
설계하는 것이 원칙이다.

## RPO (Recovery Point Objective)

장애 발생 시 허용 가능한 **최대 데이터 유실 범위**. "마지막 백업
이후 데이터를 얼마나 잃어도 되는가"를 나타낸다. RPO가 짧을수록
백업/로그 전송 주기를 촘촘하게 가져가야 한다.

## RTO (Recovery Time Objective)

장애 발생 시 허용 가능한 **최대 복구 소요 시간**. "서비스가 다시
정상화되기까지 얼마나 걸려도 되는가"를 나타낸다.

## WAL (Write Ahead Logging)

데이터를 실제로 변경하기 전에, 그 변경 내용을 먼저 로그로 기록해두는
방식이다.

**순서**

1. WAL에 변경 내용을 기록한다.
2. WAL을 디스크에 Flush한다.
3. 그 다음에 실제 데이터 파일을 변경한다.

**역할**

- **Crash Recovery** — DB가 비정상 종료돼도 WAL을 재생(replay)해
  마지막 커밋 상태까지 복구할 수 있다.
- **Point In Time Recovery (PITR)** — 특정 시점 백업(스냅샷)에 WAL을
  순서대로 적용해, 원하는 임의 시점의 상태로 복구할 수 있다.
- **Replication** — WAL을 복제본(replica)에 전달해 데이터를 동기화하는
  방식(스트리밍 복제)의 기반이 된다.

## AWS RDS

- 정기 스냅샷 + WAL(트랜잭션 로그) 기반으로 **PITR**을 지원한다. 특정
  스냅샷을 복원한 뒤 WAL을 재생해 원하는 시각까지 복구할 수 있다.
- CloudWatch에서 직접 확인할 수 있는 것은 WAL 자체가 아니라 **Error
  Log, Slow Query Log** 등 RDS가 노출하는 로그 종류다. WAL 관리는
  RDS가 내부적으로 처리한다.

## 관련 문서

- [Database 보안](security.md)
