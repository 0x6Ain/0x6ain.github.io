---
title: 임베딩 (Embedding)
tags:
  - rag
  - embedding
  - vector
  - interview
---

# 임베딩 (Embedding)

## 개념

임베딩은 텍스트(또는 이미지 등)를 **고정 길이의 숫자 벡터**로 변환한
것이다. 핵심 성질은 **뜻이 비슷한 텍스트일수록 벡터가 가깝다**는 것.
그래서 "단어가 겹치는지"가 아니라 "의미가 비슷한지"로 비교할 수 있고,
이것이 의미 검색의 토대가 된다.

예를 들어 "주말에 할 만한 운동 모임"이라는 질문이 "자전거 라이딩 클럽"과
매칭되는 이유는, 두 문장에 공통 단어가 없어도 임베딩 벡터가 가깝기
때문이다.

## 뜻이 담기려면 왜 신경망이 필요한가

"임베딩(=벡터화)" 자체는 신경망 없이도 가능하다. **TF-IDF** 처럼 단어
빈도 통계로 만든 벡터도 임베딩이다. 하지만 그건 **단어 빈도**만 담을 뿐
**의미**를 담지 못해, 사실상 키워드 검색과 다를 바 없다.

"뜻이 비슷하면 벡터도 가깝다"는 성질은 **대량의 텍스트로 학습된
모델**에서 나온다. 그 학습된 모델은 현실적으로 신경망이다(얕은
word2vec·fastText부터 transformer 기반까지). 즉 **의미를 담은 임베딩을
원하면 사실상 신경망(학습된 모델)이 필요**하다.

주의할 점 두 가지:

- **신경망 ≠ 클라우드 유료 API.** 로컬에서 도는 경량 모델(bge-m3 등)도
  신경망이다.
- **신경망은 벡터로 바꾸는 순간에만 관여한다.** 문서를 색인할 때와
  질문을 받을 때 두 번뿐이고, 실제 검색(벡터 거리 비교)은 그냥 산수라
  AI가 아니다.

## 차원(dimension)

임베딩 벡터의 길이는 모델마다 다르다(예: bge-m3 1024,
text-embedding-3-small 1536). 차원이 클수록 표현력이 늘지만 저장·계산
비용도 는다. **차원을 바꾸면 벡터 공간이 달라지므로 전체 문서를 다시
임베딩**해야 한다.

## document vs query (비대칭 임베딩)

일부 모델은 색인용 문서와 검색용 질문에 서로 다른 `input_type`을 지정해
검색 품질을 높인다(예: Voyage의 `document` / `query`). bge-m3처럼
프리픽스 구분이 필요 없는 모델도 있다.

## provider 선택: 클라우드 vs 로컬

| 방식 | 예 | 비용 | Rate limit | 데이터 |
|---|---|---|---|---|
| 클라우드 | Voyage, OpenAI, Cohere | 종량제 | 있음 | 외부 전송 |
| 로컬 | bge-m3 (Ollama) | 무료 | 없음 | 내부 보관 |

한국어 콘텐츠라면 다국어 모델(bge-m3, Voyage, Cohere multilingual)을
써야 한다. 유저 데이터를 외부로 보내기 어렵거나 비용·rate limit이
부담되면 로컬 임베딩이 좋은 선택이다.

```ts
// 클라우드(예: Voyage) — 키는 환경변수로
const res = await fetch("https://api.voyageai.com/v1/embeddings", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.VOYAGE_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    input: texts,
    model: "voyage-3.5",
    input_type: "document",
  }),
});

// 로컬(Ollama + bge-m3) — 외부 전송/비용/rate limit 없음
const res2 = await fetch("http://localhost:11434/api/embed", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ model: "bge-m3", input: texts }),
});
```

## 임베딩은 꼭 AI로 해야 하나요?

벡터화 자체는 TF-IDF 같은 통계 방식으로도 되지만, 그건 단어 기반이라
의미를 못 담는다. **의미 기반 검색을 원하면 학습된(신경망) 임베딩이
사실상 필요**하다. 다만 신경망이라고 반드시 클라우드일 필요는 없고,
로컬 모델(bge-m3)로도 충분히 동작한다.

## 데이터를 외부로 보내기 싫다면?

로컬 임베딩(bge-m3 등을 Ollama로 구동)을 쓰면 외부 전송·API 비용·rate
limit 없이 의미 검색이 가능하다. 실측상 한국어 검색 품질도 클라우드
모델과 큰 차이가 없다. 단, **유사도 점수의 절대값 스케일은 모델마다
다르므로**, 컷오프 임계값은 모델별로 따로 튜닝해야 한다.

## 관련 문서

- [RAG (검색 증강 생성)](rag-overview.md)
- [벡터 검색과 pgvector](vector-search-pgvector.md)
- [신경망과 역전파](../ml/neural-networks.md)
