---
title: Database 보안
tags:
  - database
  - security
  - aws
  - interview
---

# Database 보안

## 네트워크

- **Private Subnet**에 DB를 위치시켜 외부 네트워크에서 직접 접근할 수
  없게 한다.
- **Public Access 비활성화**로 퍼블릭 IP를 통한 접근 자체를 차단한다.
- **Security Group**은 필요한 애플리케이션 서버의 포트/IP만 최소
  권한으로 허용한다.

## 권한

- **Least Privilege**(최소 권한) 원칙을 적용한다. 애플리케이션이나
  운영자 계정에는 실제로 필요한 범위의 권한만 부여한다.

## 암호화

- **At Rest**: KMS 등을 이용해 저장된 데이터를 암호화한다.
- **In Transit**: TLS를 사용해 애플리케이션-DB 간 통신 구간을
  암호화한다.

## 비밀번호

- 해시 저장 시 bcrypt / Argon2처럼 느리게 설계된(brute-force에
  강한) 해시 알고리즘을 사용한다.

## SQL Injection

- **Prepared Statement**로 쿼리와 값을 분리해 실행한다.
- **ORM**을 사용하면 대부분 자동으로 Prepared Statement 방식으로
  쿼리가 생성되어 SQL Injection 위험이 줄어든다.

## Audit Log

### Application Audit

애플리케이션 레벨에서 다음과 같은 정보를 기록한다.

- User
- API
- Resource
- IP
- UserAgent

### Database Audit

DB 레벨에서는 다음과 같은 정보를 기록한다.

- SQL
- User
- Time
- Host

Database Audit을 남겨두면 애플리케이션을 거치지 않은 **DB 직접
접근**까지 추적할 수 있다.

## Monitoring

CloudWatch 등에서 다음 지표를 모니터링하고 Alarm을 설정한다.

- CPU
- Connection
- Storage
- Slow Query
- Alarm

## 관련 문서

- [Database Backup](backup.md)
