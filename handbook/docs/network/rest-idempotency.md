---
title: REST와 멱등성
tags:
  - network
  - rest
  - idempotency
  - interview
---

# REST와 멱등성(Idempotency)

## REST

자원(Resource)을 URI로 식별하고, HTTP Method(GET/POST/PUT/PATCH/
DELETE)로 자원에 대한 행위를 표현하는 아키텍처 스타일.

- 같은 자원은 같은 URI로 식별한다 (`/users/1`).
- Method가 행위의 의미를 갖는다 (`GET`=조회, `POST`=생성,
  `PUT`=전체 수정, `PATCH`=부분 수정, `DELETE`=삭제).
- 서버는 클라이언트의 상태를 저장하지 않는다(Stateless).

## 멱등성(Idempotency)

같은 요청을 여러 번 보내도 결과가 한 번 보낸 것과 동일한 성질.

- `GET`, `PUT`, `DELETE`는 멱등하다. `PUT /users/1`을 여러 번
  보내도 최종 상태는 같고, `DELETE /users/1`을 여러 번 보내도
  결과적으로 "그 유저는 없다"는 상태는 동일하다.
- `POST`는 멱등하지 않다. 같은 결제 요청을 두 번 보내면 결제가
  두 번 될 수 있다.

**실무 적용 — 멱등성 키(Idempotency Key)**

네트워크 재시도나 중복 클릭으로 같은 `POST` 요청이 여러 번 전송될
수 있다. 클라이언트가 요청마다 고유한 멱등성 키를 헤더에 담아
보내면, 서버는 이미 처리한 키인지 확인해 중복 처리를 막을 수 있다.
결제, 주문 생성처럼 중복되면 안 되는 API에서 특히 중요하다.

## 관련 문서

- [Cookie, Session, JWT](auth.md)
- [DNS, Load Balancer](dns-lb.md)
