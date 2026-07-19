---
title: Cookie, Session, JWT
tags:
  - network
  - auth
  - jwt
  - interview
---

# Cookie, Session, JWT

## Cookie vs Session

- **Cookie** — 클라이언트(브라우저)에 저장되는 키-값 데이터. 요청마다
  자동으로 서버에 전송된다.
- **Session** — 서버가 사용자 상태를 저장하고, 클라이언트에는
  세션을 식별할 수 있는 Session ID만 쿠키로 내려준다. 실제 데이터는
  서버(메모리, Redis 등)에 있다.

세션 방식은 서버가 상태를 들고 있어야 하므로(Stateful), 서버를
여러 대로 확장할 때 세션 저장소를 별도로 공유해야 한다(예: Redis에
세션 저장).

## JWT를 왜 사용하나요?

JWT(JSON Web Token)는 사용자 정보를 담은 토큰 자체에 서명을 붙여,
서버가 별도로 세션 저장소를 두지 않아도(Stateless) 토큰의 서명만
검증하면 인증을 처리할 수 있게 해준다.

- 서버가 상태를 저장하지 않으므로 여러 서버로 수평 확장하기 쉽다.
- 토큰 안에 필요한 정보(Payload)를 담아 매번 DB를 조회하지 않고도
  검증할 수 있다.
- 단점: 토큰 자체를 서버가 강제로 무효화하기 어렵다 (탈취당해도
  만료 전까지는 유효). 그래서 만료 시간을 짧게 가져간다.

## Refresh Token이 필요한 이유는?

Access Token(JWT)의 만료 시간을 짧게(예: 15분) 가져가면 탈취당했을
때 피해를 줄일 수 있지만, 사용자는 15분마다 재로그인해야 하는 불편이
생긴다.

**Refresh Token**은 만료 기간이 긴 별도의 토큰으로, Access Token이
만료됐을 때 재로그인 없이 새 Access Token을 발급받는 데만 사용한다.

- Access Token: 짧은 수명, 실제 API 요청 인증에 사용
- Refresh Token: 긴 수명, Access Token 재발급에만 사용하고 노출 표면을
  최소화(HttpOnly 쿠키 등으로 보관)

이렇게 역할을 분리하면 "보안(짧은 Access Token 수명)"과
"사용자 경험(자주 로그인하지 않아도 됨)"을 동시에 만족시킬 수 있다.

## 관련 문서

- [REST와 멱등성](rest-idempotency.md)
