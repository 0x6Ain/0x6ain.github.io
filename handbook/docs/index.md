---
title: Backend Handbook
---

# Backend Handbook

백엔드 개발과 기술 면접 대비를 위해 정리하는 개인 기술 위키입니다.
개념 → 동작 원리 → 실무 적용 → 트레이드오프 순으로, 나중에 다시 찾아볼
수 있도록 문서를 쌓아갑니다.

우측 상단 검색창에서 키워드(예: `deadlock`, `wal`, `redis lock`)로
문서를 바로 찾을 수 있습니다.

## 현재 다루는 주제

- **OS** — 프로세스/스레드, Context Switching, Memory 구조, GC
- **Network** — TCP/UDP, HTTP/HTTPS/TLS, Cookie/Session/JWT, REST와
  멱등성, DNS/Load Balancer
- **Database** — 동시성 제어, Deadlock, Race Condition, 백업(WAL,
  RPO/RTO), 보안
- **자료구조/알고리즘** — 자료구조별 시간복잡도, HashMap 원리
- **객체지향** — SOLID, DI, IoC
- **시스템 설계** — Cache, Queue, DB 분리, Scale Out을 조합한 설계
  기본기
- **Redis** — 자료구조, TTL, 캐시 전략, Pub/Sub, Distributed Lock
- **Kafka/SQS** — Message Queue, Consumer Group, Partition, DLQ
- **AWS** — EC2/ECS, ALB, CloudFront, VPC, S3, RDS

각 문서는 서로 관련 문서 링크로 연결되어 있어, 개념 → 실무 적용까지
이어서 찾아볼 수 있습니다. 계속 커밋으로 확장해나갈 예정입니다.
