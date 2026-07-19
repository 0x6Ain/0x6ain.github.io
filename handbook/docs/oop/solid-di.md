---
title: SOLID, DI, IoC
tags:
  - oop
  - solid
  - di
  - interview
---

# SOLID, DI, IoC

## SOLID

객체지향 설계 원칙 5가지.

- **S — Single Responsibility Principle**: 클래스는 하나의 책임만
  가져야 한다. 변경 이유가 하나여야 한다.
- **O — Open/Closed Principle**: 확장에는 열려 있고, 수정에는 닫혀
  있어야 한다. 기존 코드를 고치지 않고 새 기능을 추가할 수 있어야
  한다 (인터페이스/추상화 활용).
- **L — Liskov Substitution Principle**: 하위 타입은 상위 타입을
  대체할 수 있어야 한다. 자식 클래스가 부모 클래스의 계약(동작)을
  깨뜨리면 안 된다.
- **I — Interface Segregation Principle**: 클라이언트가 사용하지
  않는 메서드에 의존하지 않도록, 인터페이스를 필요한 단위로 잘게
  나눈다.
- **D — Dependency Inversion Principle**: 구체적인 구현이 아니라
  추상화(인터페이스)에 의존해야 한다. 상위 모듈이 하위 모듈의 구체
  구현에 직접 의존하지 않도록 한다.

## DI (Dependency Injection)

객체가 자신이 필요로 하는 의존성을 직접 생성하지 않고, 외부에서
주입받는 패턴.

```ts
// DI 없이: 클래스가 구현체를 직접 생성 (강한 결합)
class OrderService {
  private repo = new PostgresOrderRepository();
}

// DI 적용: 인터페이스를 외부에서 주입받음
class OrderService {
  constructor(private repo: OrderRepository) {}
}
```

테스트할 때 실제 구현 대신 Mock을 주입할 수 있고, 구현체를 교체해도
`OrderService` 코드는 변경할 필요가 없다.

## IoC (Inversion of Control)

"제어의 역전". 전통적으로는 객체가 스스로 필요한 의존성을
생성/제어했다면, IoC 컨테이너(NestJS의 DI 컨테이너 등)가 객체의
생성과 의존성 주입을 대신 제어한다. DI는 IoC를 구현하는 대표적인
방법 중 하나다.

## 상속 vs 조합 (Composition)

- **상속**: `is-a` 관계. 부모 클래스의 구현을 그대로 물려받는다.
  결합도가 높아 부모 클래스 변경이 자식 클래스에 쉽게 영향을 준다.
- **조합**: `has-a` 관계. 다른 객체를 필드로 가지고 그 객체의 기능을
  위임해서 사용한다. 결합도가 낮고 런타임에 구성 요소를 교체하기
  쉽다.

일반적으로 "상속보다 조합을 우선하라"는 가이드가 많이 쓰인다. 상속은
계층이 깊어질수록 변경 영향 범위를 예측하기 어려워지기 때문이다.

## 캡슐화, 다형성

- **캡슐화**: 객체의 내부 상태(데이터)를 외부에서 직접 접근하지
  못하게 숨기고, 정의된 메서드를 통해서만 접근/변경하게 하는 것.
  내부 구현이 바뀌어도 외부 사용법(인터페이스)이 유지되면 영향이
  없다.
- **다형성**: 같은 인터페이스/메서드 호출이 실제 객체의 타입에 따라
  다르게 동작하는 것. `PaymentMethod` 인터페이스를 구현한
  `CardPayment`, `KakaoPayPayment`가 각자 다르게 `pay()`를 구현해도,
  호출하는 쪽은 `PaymentMethod`라는 동일한 타입으로 다룰 수 있다.
