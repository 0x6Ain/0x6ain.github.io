---
title: AWS 핵심 서비스
tags:
  - aws
  - infrastructure
  - interview
---

# AWS 핵심 서비스

## 컴퓨팅

- **EC2** — 가상 서버(인스턴스)를 직접 대여해 OS 레벨부터 관리하는
  서비스. 자유도가 높지만 운영 부담도 크다.
- **ECS** — 컨테이너(Docker) 오케스트레이션 서비스. EC2 위에서
  직접 컨테이너를 관리하거나(EC2 launch type), 서버 관리 없이
  컨테이너만 실행하는 **Fargate**(서버리스 launch type) 방식을 쓸
  수 있다.
- **Auto Scaling** — CPU 사용률, 요청 수 같은 지표를 기준으로
  인스턴스/태스크 수를 자동으로 늘리거나 줄인다. 트래픽 변화에
  맞춰 비용과 가용성을 함께 관리한다.

## 네트워크/전달

- **ALB (Application Load Balancer)** — L7(애플리케이션 계층)
  로드밸런서. URL 경로, 호스트 기준 라우팅과 Health Check로 여러
  대상 그룹에 트래픽을 분산한다. 자세한 개념은
  [DNS와 Load Balancer](../network/dns-lb.md) 참고.
- **CloudFront** — CDN(Content Delivery Network). 정적 자산이나
  캐시 가능한 응답을 사용자와 가까운 엣지 로케이션에 캐싱해 지연을
  줄이고 오리진 서버 부하를 낮춘다.
- **VPC (Virtual Private Cloud)** — AWS 안에 논리적으로 격리된
  네트워크 공간. Public Subnet(외부 접근 가능)과 Private
  Subnet(외부에서 직접 접근 불가)으로 나눠 [Database
  보안](../database/security.md)에서 다룬 것처럼 DB 등 민감한
  리소스를 보호한다.
- **NAT Gateway** — Private Subnet의 리소스가 (인바운드 없이)
  아웃바운드로만 인터넷에 접근할 수 있게 해주는 게이트웨이. 예를
  들어 Private Subnet의 서버가 외부 API를 호출하거나 패키지를
  설치할 때 필요하다.

## 스토리지/데이터

- **S3** — 객체 스토리지. 정적 파일, 이미지, 백업, 로그 등을
  저장한다. 정적 웹사이트 호스팅이나 CloudFront 오리진으로도 자주
  쓰인다.
- **RDS** — 관리형 관계형 데이터베이스. 백업, 패치, 복제, PITR
  같은 운영 부담을 AWS가 대신 처리해준다. 자세한 내용은
  [Database Backup](../database/backup.md) 참고.

## 관련 문서

- [DNS와 Load Balancer](../network/dns-lb.md)
- [Database 보안](../database/security.md)
- [Database Backup](../database/backup.md)
