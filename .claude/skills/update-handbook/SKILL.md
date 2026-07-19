---
name: update-handbook
description: Add or update content in the backend interview-prep handbook (handbook/ in this repo, deployed at https://0x6ain.github.io/handbook/ via MkDocs Material). Use whenever the user pastes raw notes, asks to add/update a topic, or triggers the daily handbook update routine.
---

# Handbook 업데이트

이 저장소의 `handbook/`은 MkDocs + Material로 빌드되는 백엔드 기술
위키다. 포트폴리오(Astro)와 같은 저장소, 같은 GitHub Actions
워크플로(`.github/workflows/deploy.yml`)에서 함께 빌드되어
`https://0x6ain.github.io/handbook/`에 배포된다.

이 스킬은 새 노트/내용을 받아 handbook에 정리해 넣고, 검증한 뒤
커밋·푸시까지 완료하는 절차를 안내한다.

## 0. 입력 확인

- 사용자가 텍스트를 붙여넣었다면 **먼저 인코딩이 깨졌는지 확인**한다.
  한글 음절 중간중간 `?`나 `�`, 또는 `ë°ì´í°` 같은 라틴 확장 문자가
  섞여 있으면 모지바케(mojibake)다.
  - `latin1 → utf-8` 재해석으로 얼마나 복구되는지 시도해보되
    (`content.encode('latin1', errors='replace').decode('utf-8', errors='replace')`),
    복구 후 대체문자(`�`) 비율이 유의미하게 높으면(예: 5% 이상)
    **절대 임의로 문장을 지어내 채우지 말 것**. 구조/코드블록/영문
    용어는 보존하면서 설명 문장만 새로 작성하는 "재구성"이라는 점을
    사용자에게 명확히 알리고, 가능하면 원본 파일(로컬 경로,
    Google Drive 등)을 받아 다시 시도한다.
- 사용자가 이미 "이 주제를 추가해줘" 처럼 구조가 명확한 요청을 하면
  바로 2번으로 넘어간다.

## 1. 콘텐츠는 주제 문서로, 요약/로드맵 페이지는 만들지 않는다

- **중요한 원칙**: "면접 핵심 정리", "로드맵", "체크리스트" 같은
  메타 요약 페이지는 만들지 않는다. 사용자가 이미 이 방식을
  명시적으로 거부했다. 커리큘럼이나 개념 목록을 받으면, 그 목록 자체를
  요약하는 페이지를 만드는 게 아니라 **각 항목을 실제 개념 설명
  문서**로 만든다.
- 문서는 아래 스타일을 따른다 (기존 `handbook/docs/database/*.md`,
  `handbook/docs/network/*.md` 참고):
  - frontmatter: `title`, `tags` (주제 폴더명, 세부주제, `interview`
    등 검색에 도움되는 키워드)
  - 개념 정의 → (필요시) 왜/이유 → 동작 원리 → 코드 예시(SQL/TS 등,
    실제 동작하는 형태로) → 트레이드오프/실무 팁
  - 자주 나오는 "예상 질문"이 있으면 소제목으로 넣고 답을 함께 쓴다
    (질문만 나열하지 말 것)
  - 문서 맨 아래 `## 관련 문서` 섹션에 연관된 다른 문서로 상대경로
    링크를 건다 (양방향으로 걸 필요는 없고, 자연스러운 진입점에서만)

## 2. 어느 폴더에 넣을지 정하기

현재 폴더 구조 (필요하면 새 폴더를 만들어도 된다):

```
handbook/docs/
├── index.md
├── os/            프로세스/스레드, 메모리, GC 등
├── network/       TCP/HTTP/인증/DNS 등
├── database/      동시성, Deadlock, 백업, 보안
├── algorithms/    자료구조/시간복잡도
├── oop/           SOLID, DI 등
├── system-design/ 시스템 설계 기본기
├── redis/         자료구조, 캐시 전략, Pub/Sub, 분산락
├── kafka/         메시지 큐 개념
└── aws/           AWS 서비스별 개념
```

이미 있는 주제와 겹치면 새 파일을 만들기보다 기존 문서를 확장한다
(예: Redis 관련 새 내용은 `redis/` 아래 새 파일이나 기존 파일에 추가).
완전히 새로운 대분류면 새 폴더를 만든다.

## 3. `mkdocs.yml`의 `nav`에 등록

`handbook/mkdocs.yml`의 `nav:` 항목에 새/수정된 페이지를 반드시
등록한다. `nav`에 없으면 사이드바에 노출되지 않는다 (검색에는
잡히지만 탐색으로는 못 찾음). 기존 섹션 아래에 논리적인 위치에
추가한다.

새 최상위 주제 폴더를 만들었다면 `nav`에도 새 최상위 섹션을
추가한다.

## 4. 로컬 검증 (필수)

커밋 전에 항상 strict 빌드로 링크/구조 오류를 잡는다.

```bash
cd /Users/jinyoung/Projects/personal/portfolio/handbook
source .venv/bin/activate   # 없으면: python3 -m venv .venv && pip install -r requirements.txt
mkdocs build --strict
```

에러 없이 끝나야 한다. `관련 문서` 링크의 상대경로가 틀리면 여기서
잡힌다. 빌드 산출물(`handbook/site/`)은 커밋하지 않는다
(`.gitignore`에 이미 등록됨).

## 5. 커밋 & 푸시

포트폴리오와 같은 저장소이므로, 다른 무관한 변경사항과 섞이지
않도록 `handbook/` 관련 파일만 스테이징한다.

```bash
git add handbook/
git status --short   # handbook/ 외 파일이 섞이지 않았는지 확인
git commit -m "설명적인 커밋 메시지"
git push origin main
```

push하면 `.github/workflows/deploy.yml`이 자동으로 Astro 포트폴리오
+ MkDocs handbook을 함께 빌드해 GitHub Pages에 배포한다. 별도
배포 명령은 필요 없다.

## 6. 배포 확인

```bash
gh run list --repo 0x6Ain/0x6ain.github.io --workflow "Deploy to GitHub Pages" --limit 1
```

`completed success`가 뜰 때까지 기다린 뒤 (in_progress/queued면
잠시 후 재확인), 새로 추가한 페이지가 실제로 떠 있는지 확인한다.

```bash
curl -s -o /dev/null -w "%{http_code}\n" "https://0x6ain.github.io/handbook/<새-페이지-경로>/"
```

200이 아니면 `nav` 등록 누락이나 빌드 실패 가능성이 높으니
`mkdocs build --strict` 로그를 다시 확인한다.
