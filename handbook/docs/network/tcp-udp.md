---
title: TCP vs UDP, 핸드셰이크, Keep-Alive
tags:
  - network
  - tcp
  - interview
---

# TCP vs UDP

## TCP vs UDP

| | TCP | UDP |
|---|---|---|
| 연결 | 연결 지향 (핸드셰이크 필요) | 비연결 지향 |
| 신뢰성 | 순서 보장, 재전송으로 신뢰성 보장 | 보장 없음 |
| 속도 | 상대적으로 느림 (제어 오버헤드) | 빠름 |
| 사용 예 | HTTP, DB 커넥션 등 대부분의 서비스 | 실시간 스트리밍, DNS, 온라인 게임 |

TCP는 데이터가 반드시 순서대로, 누락 없이 도착해야 하는 경우에
적합하고, UDP는 약간의 손실을 감수하더라도 지연 없이 빠르게 전달하는
것이 더 중요한 경우에 적합하다.

## 3-way Handshake (연결 수립)

1. Client → Server: `SYN`
2. Server → Client: `SYN` + `ACK`
3. Client → Server: `ACK`

양쪽 모두 "나는 보낼 준비가 됐고, 상대도 받을 준비가 됐다"는 것을
확인한 뒤 연결을 수립한다.

## 4-way Handshake (연결 종료)

1. Client → Server: `FIN`
2. Server → Client: `ACK`
3. Server → Client: `FIN`
4. Client → Server: `ACK`

TCP는 양방향 연결이므로, 종료도 양쪽에서 각각 `FIN`을 보내고
확인받아야 한다. 그래서 종료 절차가 연결 수립보다 한 단계 더 많다.

## Keep-Alive

매 요청마다 TCP 연결을 새로 맺고 끊으면 핸드셰이크 비용이 반복된다.
Keep-Alive는 하나의 TCP 연결을 일정 시간 유지하며 여러 요청/응답을
재사용해, 연결 수립 오버헤드를 줄이고 지연 시간을 단축한다.

## 관련 문서

- [HTTP/HTTPS](http.md)
