---
title: DNS와 Load Balancer
tags:
  - network
  - dns
  - load-balancer
  - interview
---

# DNS와 Load Balancer

## DNS

도메인 이름(예: `example.com`)을 IP 주소로 변환해주는 분산 시스템.

1. 브라우저/OS 캐시에 있는지 먼저 확인한다.
2. 없으면 Local DNS Resolver(주로 ISP 제공)에 질의한다.
3. Resolver는 Root → TLD(.com) → 권한 있는 Name Server 순으로
   질의해 최종 IP를 찾아 응답하고, 이 결과를 TTL 동안 캐시한다.

## Load Balancer

여러 대의 서버로 트래픽을 분산시켜 부하를 나누고, 특정 서버 장애
시 나머지 서버로 트래픽을 우회시켜 가용성을 높이는 컴포넌트.

**분산 방식 예시**

- Round Robin — 순서대로 골고루 분배
- Least Connections — 현재 연결 수가 가장 적은 서버로 분배
- IP Hash — 클라이언트 IP 기준으로 항상 같은 서버로 분배 (세션
  고정이 필요할 때)

**Health Check**로 각 서버의 상태를 주기적으로 확인해, 응답하지 않는
서버는 자동으로 트래픽 대상에서 제외한다. AWS에서는 ALB(Application
Load Balancer)가 이 역할을 담당한다.

## 관련 문서

- [REST와 멱등성](rest-idempotency.md)
- [AWS](../aws/aws-basics.md)
