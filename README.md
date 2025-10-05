# 📘 README — PNU Tour (Mobile Web)

> 부산대 캠퍼스 투어 웹앱
>
> React + Vite + TypeScript + Tailwind · React Query · MSW · Vitest
>
> 배포: **Vercel** (PR마다 자동 Preview)

---

## Table of Contents

1. [개요](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#%EA%B0%9C%EC%9A%94)
2. [주요 기능](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5)
3. [기술 스택](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#%EA%B8%B0%EC%88%A0-%EC%8A%A4%ED%83%9D)
4. [빠른 시작](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#%EB%B9%A0%EB%A5%B8-%EC%8B%9C%EC%9E%91)
5. [환경변수](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#%ED%99%98%EA%B2%BD%EB%B3%80%EC%88%98)
6. [스크립트](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8)
7. [폴더 구조](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#%ED%8F%B4%EB%8D%94-%EA%B5%AC%EC%A1%B0)
8. [코드 규칙(ESLint/Prettier/Husky)](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#%EC%BD%94%EB%93%9C-%EA%B7%9C%EC%B9%99eslintprettierhusky)
9. [테스트(Vitest/RTL/MSW)](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#%ED%85%8C%EC%8A%A4%ED%8A%B8vitestrtlmsw)
10. [지도/내비 연동(네이버)](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#%EC%A7%80%EB%8F%84%EB%82%B4%EB%B9%84-%EC%97%B0%EB%8F%99%EB%84%A4%EC%9D%B4%EB%B2%84)
11. [배포(CI/CD, Vercel)](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#%EB%B0%B0%ED%8F%ACcicd-vercel)
12. [PWA 계획(후순위)](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#pwa-%EA%B3%84%ED%9A%8D%ED%9B%84%EC%88%9C%EC%9C%84)
13. [접근성·성능 기준](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#%EC%A0%91%EA%B7%BC%EC%84%B1%EC%84%B1%EB%8A%A5-%EA%B8%B0%EC%A4%80)
14. [FAQ & Troubleshooting](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#faq--troubleshooting)
15. [브랜치/PR 규칙](https://chatgpt.com/g/g-p-68ca627ac67c8191b887eb9c77684724/c/68d7ea5d-6d48-8329-baa7-7632cd424dca#%EB%B8%8C%EB%9E%9C%EC%B9%98pr-%EA%B7%9C%EC%B9%99)

---

## 개요

**PNU Tour**는 방문객·수험생·학부모가 **모바일로 바로 쓰는 캠퍼스 투어 웹앱**입니다.

- 테마 **코스** → **스탬프(사진 단말 판별)** → **퀴즈** → **네이버 내비 원클릭**
- (확장) **행사/식단/학과 개방 행사 공지 피드**, 웹푸시(PWA 전환 시)

> 웹 우선 전략 → 스마트캠퍼스 메뉴 연동이 쉽고, PR마다 Preview URL로 디자인/기능 리뷰가 빠릅니다.

---

## 주요 기능

- **모바일 퍼스트 UI** (Tailwind)
- **React Query** 기반 데이터 캐싱
- **네이버 지도/내비 딥링크** (앱/웹 폴백)
- **익명 모드** + (옵션) 간편 로그인
- **테스트/목킹**: Vitest + Testing Library + **MSW**
- **품질 자동화**: ESLint/Prettier/Husky/lint‑staged
- **Vercel**: main=프로덕션, PR=자동 Preview

---

## 기술 스택

- **App**: React 18, TypeScript, Vite
- **UI**: Tailwind CSS (+ Headless UI/Radix 선택적)
- **Data**: @tanstack/react-query, axios
- **Test**: Vitest, @testing-library/react, jest-dom, MSW
- **Lint/Format**: ESLint v9(Flat), Prettier, Husky, lint-staged
- **Deploy**: Vercel (CD), GitHub Actions(테스트/빌드 CI)

아키텍처(요약)

```
Browser
 ├─ React App (Vite, Tailwind)
 ├─ React Query / axios  → 공개 API(행사/식단/공지, 우리 CMS)
 ├─ Naver Maps JS SDK    → 지도/경로
 └─ 딥링크 nmap://...    → 네이버 내비 (웹 폴백)

```

---

## 빠른 시작

### 1) 사전 요구

- Node **20+**
- npm (또는 pnpm/yarn)

### 2) 설치 & 실행

```bash
npm ci
npm run dev
# → http://localhost:5173

```

> ⚠️ Vite 생성 시 보이는 Use rolldown-vite (Experimental)? 질문은 No가 정답입니다.
>
> Rolldown은 Rust 기반 실험 번들러로, 아직 플러그인 호환성이 부족합니다.

---

## 환경변수

모든 클라이언트 변수는 **`VITE_`** 접두사가 필요합니다.

Vercel에서 Preview/Production을 **분리 설정**하세요.

```
VITE_NAVER_CLIENT_ID=xxxxxxxx
VITE_API_BASE=https://api.example.com

```

`src/lib/env.ts` 예시

```tsx
export const ENV = {
  NAVER_CLIENT_ID: import.meta.env.VITE_NAVER_CLIENT_ID as string,
  API_BASE: import.meta.env.VITE_API_BASE as string,
};
```

`.gitignore`에 `.env*` 포함 필수.

---

## 스크립트

```json
"dev": "vite",
"build": "tsc -b && vite build",
"preview": "vite preview",
"lint": "eslint .",
"format": "prettier --write .",
"typecheck": "tsc -b --pretty",
"test": "vitest",
"test:run": "vitest run",
"test:coverage": "vitest run --coverage"

```

---

## 폴더 구조

```
src/
  app/            # Providers, Router
  pages/          # Home, CourseList, SpotDetail, Quiz, Notices
  features/       # course/ stamp/ quiz/ notice/ (API + hooks + UI)
  components/ui/  # 공용 버튼/모달/BottomSheet 등
  widgets/        # Map, NaverNavButton, StampUploader
  lib/            # axios client, env, analytics
  mocks/          # msw handlers/server
  test/           # vitest setup
  styles/         # index.css (Tailwind)
  types/          # fontsource.d.ts 등

```

---

## 코드 규칙(ESLint/Prettier/Husky)

- **ESLint v9 (Flat)** + React/TS/Hooks/import/a11y
- **Prettier**: 포맷 전담(ESLint 충돌 방지 설정 포함)
- **Husky + lint‑staged**: 커밋 전 `eslint --fix` + `prettier --write` + **관련 테스트** 실행

커밋 메시지: **Conventional Commits**

`feat:`, `fix:`, `chore:`, `refactor:`, `test:` …

---

## 테스트(Vitest/RTL/MSW)

- **Vitest**: 빠른 러너 (jsdom 환경)
- **Testing Library**: 사용자 시나리오 중심 DOM 테스트
- **MSW**: API 모킹. 테스트/개발에서 서버 없이 동작

설정: `vite.config.ts > test`, `src/test/setup.ts`, `src/mocks/*`

샘플:

```tsx
import axios from 'axios';

test('fetch greeting', async () => {
  const res = await axios.get('/api/greeting');
  expect(res.data.message).toBe('Hello, PNU!');
});
```

---

## 배포(CI/CD, Vercel)

1. **GitHub 연동**: Vercel에서 repo import
2. Build Command: `npm run build` / Output: `dist/` 자동 인식
3. SPA 리라이트: 루트에 `vercel.json`

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/" }] }
```

1. **환경변수**: Vercel → Project Settings → Env(Preview/Production 분리)
2. **브랜치 전략**
   - `main` → 프로덕션 URL (자동 배포)
   - `feat/*` → PR 열면 **자동 Preview URL** 생성 (디자이너/PM 리뷰)

> 필요 시 GitHub Actions로 테스트/빌드 CI를 추가하고, Vercel은 배포만 맡겨도 됩니다.

---

## PWA 계획(후순위)

- MVP 안정화 후 `vite-plugin-pwa` 도입
- `manifest.webmanifest`/Workbox 캐싱 → 홈 화면 설치
- **웹푸시(안드로이드)**, iOS는 제한 → 네이티브 래핑 후 FCM 고려

---

## 접근성·성능 기준

- 터치 영역 **≥ 44px**, 대비비율 **≥ 4.5:1**
- 키보드 포커스 링 표시, 이미지 대체 텍스트
- Lighthouse **≥ 80** (Performance/Accessibility)

---

## FAQ & Troubleshooting

**Q. `Use rolldown‑vite (Experimental)?`는 뭔가요?**

A. Vite의 실험 번들러(롤다운) 사용 여부입니다. **지금은 “No”** 선택이 안전합니다.

**Q. iOS에서 푸시가 안 와요.**

A. 웹푸시는 iOS 사파리 제한이 있습니다. PWA/네이티브 전환 시 FCM을 붙입니다.

**Q. 네이버 앱이 없으면?**

A. 딥링크 실패 시 **웹 지도**로 자동 폴백됩니다.

---

## 브랜치/PR 규칙

- 브랜치: `feat/…`, `fix/…`, `chore/…`
- PR 템플릿(요약/변경/스크린샷/테스트/체크리스트)
- **PR 체크리스트**
  - [ ] ESLint/Prettier 통과
  - [ ] 관련 테스트 추가 & 통과
  - [ ] 접근성(포커스/대체텍스트)
  - [ ] 모바일 360–430px 확인
  - [ ] PR Preview 링크 캡처/공유
