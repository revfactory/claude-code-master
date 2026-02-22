# Claude Code 마스터

Claude Code 설정 완전 가이드 - 에이전트, 커맨드, 스킬, 규칙을 활용한 AI 코딩 어시스턴트 마스터하기

**사이트:** [https://claudecode-master.netlify.app](https://claudecode-master.netlify.app)

## 소개

이 프로젝트는 Claude Code를 효과적으로 활용하기 위한 종합 가이드입니다. 에이전트, 커맨드, 스킬, 규칙 등 Claude Code의 핵심 기능을 체계적으로 정리하고, 실무에서 바로 사용할 수 있는 설정 파일과 워크플로우를 제공합니다.

## 주요 기능

### 에이전트 (Agents)
재사용 가능한 AI 에이전트 프롬프트 모음
- **planner** - 구현 계획 수립
- **architect** - 시스템 설계
- **tdd-guide** - 테스트 주도 개발
- **code-reviewer** - 코드 리뷰
- **security-reviewer** - 보안 분석
- **build-error-resolver** - 빌드 오류 수정
- **e2e-runner** - E2E 테스트
- **refactor-cleaner** - 코드 정리
- **doc-updater** - 문서화

### 커맨드 (Commands)
슬래시 커맨드로 빠르게 실행
- `/plan` - 새 기능 계획
- `/tdd` - 테스트 주도 개발
- `/code-review` - 코드 리뷰
- `/build-fix` - 빌드 오류 수정
- `/e2e` - E2E 테스트
- `/refactor-clean` - 코드 정리
- `/test-coverage` - 커버리지 확인
- `/update-docs` - 문서 업데이트
- `/update-codemaps` - 아키텍처 문서화

### 스킬 (Skills)
도메인별 전문 지식
- 코딩 표준
- 백엔드 패턴
- 프론트엔드 패턴
- TDD 워크플로우
- 보안 리뷰
- ClickHouse
- 프로젝트 가이드라인

### 규칙 (Rules)
항상 적용되는 코딩 규칙
- 보안
- 테스트
- Git 워크플로우
- 에이전트 오케스트레이션
- 공통 패턴
- 성능
- 훅 시스템
- 코딩 스타일

## 시작하기

### 요구사항

- Node.js 18.x 이상
- npm 또는 yarn

### 설치

```bash
# 저장소 클론
git clone https://github.com/revfactory/claude-code-master.git
cd claude-code-master

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하세요.

### 빌드

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm run start
```

## 프로젝트 구조

```
claude-code-master/
├── components/          # React 컴포넌트
│   ├── DownloadMarkdown.tsx
│   ├── CommandTable.tsx
│   ├── commandContents.ts
│   ├── skillContents.ts
│   └── ruleContents.ts
├── pages/               # 문서 페이지
│   ├── getting-started/ # 시작하기
│   ├── agents/          # 에이전트
│   ├── commands/        # 커맨드
│   ├── skills/          # 스킬
│   ├── rules/           # 규칙
│   ├── advanced/        # 고급 설정
│   └── examples/        # 예시
├── public/              # 정적 파일
├── styles/              # 스타일시트
│   └── globals.css
├── theme.config.tsx     # Nextra 테마 설정
└── next.config.mjs      # Next.js 설정
```

## 기술 스택

- [Next.js](https://nextjs.org/) - React 프레임워크
- [Nextra](https://nextra.site/) - 문서 사이트 생성기
- [TypeScript](https://www.typescriptlang.org/) - 타입 안전성
- [Lucide React](https://lucide.dev/) - 아이콘

## 사용 방법

### 마크다운 파일 다운로드

각 에이전트, 커맨드, 스킬, 규칙 페이지에서 "마크다운 다운로드" 버튼을 클릭하여 설정 파일을 다운로드할 수 있습니다.

다운로드한 파일을 해당 폴더에 복사하여 사용하세요:
- 에이전트: `~/.claude/agents/`
- 커맨드: `~/.claude/commands/`
- 스킬: `~/.claude/skills/`
- 규칙: `~/.claude/rules/`

### 테마

라이트/다크 모드를 지원합니다. 사이드바 하단의 테마 토글 버튼으로 전환할 수 있습니다.

## 배포

이 프로젝트는 [Netlify](https://www.netlify.com/)에 배포되어 있습니다.

`netlify.toml` 설정이 포함되어 있어 Netlify에 쉽게 배포할 수 있습니다.

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/claudecode-master/deploys)

## 기여하기

이슈와 풀 리퀘스트를 환영합니다!

1. 이 저장소를 포크합니다
2. 새 브랜치를 생성합니다 (`git checkout -b feature/amazing-feature`)
3. 변경사항을 커밋합니다 (`git commit -m 'Add amazing feature'`)
4. 브랜치에 푸시합니다 (`git push origin feature/amazing-feature`)
5. 풀 리퀘스트를 생성합니다

## 라이선스

MIT License

## 참고 자료

이 사이트의 내용은 [Everything Claude Code](https://github.com/affaan-m/everything-claude-code)를 참고하여 작성되었습니다.

- 한글 버전: [https://github.com/revfactory/everything-claude-code](https://github.com/revfactory/everything-claude-code)

## 링크

- [사이트](https://claudecode-master.netlify.app)
- [Claude Code 공식 문서](https://docs.anthropic.com/en/docs/claude-code)
- [GitHub 저장소](https://github.com/revfactory/claude-code-master)
