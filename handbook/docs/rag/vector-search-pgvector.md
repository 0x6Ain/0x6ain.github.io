---
title: 벡터 검색과 pgvector
tags:
  - rag
  - vector-search
  - pgvector
  - postgresql
  - interview
---

# 벡터 검색과 pgvector

## 개념

벡터 검색은 임베딩 벡터끼리 **거리(또는 유사도)** 를 재서 질의 벡터와
가장 가까운 K개(top-K)를 찾는 것이다. 최근접 이웃 탐색(KNN,
k-Nearest Neighbors)이라고도 한다.

## 유사도/거리 지표

- **코사인 유사도**: 두 벡터의 **방향**이 얼마나 비슷한지. 텍스트
  임베딩에서 가장 많이 쓴다. `유사도 = 1 - 코사인 거리`.
- **유클리드 거리(L2)**: 두 점 사이의 직선 거리.
- **내적(inner product)**: 방향과 크기를 함께 본다. 벡터를 정규화하면
  코사인과 동치가 된다.

## pgvector

`pgvector`는 PostgreSQL에 벡터 타입과 유사도 연산자를 추가하는
확장이다. 별도 벡터 DB 없이 기존 Postgres에서 벡터 검색을 할 수 있다.

거리 연산자: `<=>` 코사인 거리, `<->` L2 거리, `<#>` 음의 내적.

```sql
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE rag_document (
  id         text PRIMARY KEY,
  content    text NOT NULL,
  metadata   jsonb NOT NULL DEFAULT '{}',
  embedding  vector(1024)          -- 모델 차원과 일치해야 한다
);

-- 질의 벡터($1)와 코사인으로 가장 가까운 5개
SELECT id, content, 1 - (embedding <=> $1) AS score
FROM rag_document
ORDER BY embedding <=> $1
LIMIT 5;
```

한 행에 **벡터 + 원문(content) + 메타데이터**를 함께 저장한다. 벡터는
검색용, 원문은 결과 표시·LLM 근거용, 메타데이터는 필터·원본 연결용이다.

## 인덱스: 정확 검색 vs 근사 검색(ANN)

인덱스 없이 하면 모든 행과 거리를 계산하는 전체 스캔이라 데이터가
많아질수록 느려진다. 그래서 보통 **근사 최근접(ANN) 인덱스**를 쓴다.
약간의 정확도를 내주고 속도를 얻는 방식이다.

- **HNSW** (그래프 기반): 질의 속도·정확도가 좋아 대개 기본 선택.
  대신 메모리를 많이 쓰고 인덱스 빌드가 느리다.
- **IVFFlat** (클러스터 기반): 빌드가 빠르고 메모리가 적지만, `lists`
  파라미터 튜닝이 필요하고 데이터가 어느 정도 있어야 잘 만들어진다.

```sql
-- 거리와 연산자 클래스를 맞춰야 한다 (코사인 → vector_cosine_ops)
CREATE INDEX ON rag_document
  USING hnsw (embedding vector_cosine_ops);
```

## 규모와 트레이드오프

- 벡터 1개 크기 ≈ 차원 × 4바이트 (1024차원 → 약 4KB). 문서 10만 건이면
  벡터만 수백 MB 수준.
- 수백만 건 이상이면 인덱스 파라미터(HNSW의 `m`/`ef_search`, IVFFlat의
  `lists`/`probes`)를 튜닝한다.
- 이미 Postgres를 쓰면 pgvector가 인프라 추가 없이 중소 규모까지
  충분하다. 초대규모·초저지연이 필요하면 전용 벡터 DB(Qdrant,
  Pinecone 등)를 고려한다.

## 왜 코사인 유사도인가요?

텍스트 임베딩은 벡터의 **크기(norm)** 보다 **방향**에 의미가 담기도록
학습되기 때문이다. 벡터를 정규화하면 코사인과 내적이 같아지므로, 많은
구현이 코사인을 기본으로 쓴다.

## HNSW와 IVFFlat 중 뭘 쓰나요?

질의 속도·정확도가 중요하면 HNSW, 인덱스 빌드 속도·메모리 절약이
중요하면 IVFFlat. 웹 서비스 검색은 대개 HNSW를 기본으로 둔다.

## 관련 문서

- [임베딩](embeddings.md)
- [의미 검색 vs 키워드 검색](semantic-vs-keyword-search.md)
- [RAG (검색 증강 생성)](rag-overview.md)
