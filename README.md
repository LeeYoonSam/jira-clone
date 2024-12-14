# Jira Clone

⭐ Source code & more: https://dub.sh/twpYBjw

🔥 Get $50 in Appwrite credits: https://apwr.dev/antonio50

🎬 PART 2:    • Build a Jira Clone With Nextjs, React...  

Hi all 👋 In this 16-hour tutorial split in two parts (my longest ever btw!) you will learn how to create an end-to-end fullstack Jira clone, all with workspaces, project / epics, tasks, kanban boards, calendars, editing and deleting tasks, invite system, role-based access control system, image uploads, analytics, authentication and more!

Key Features:
- 🏢 Workspaces
- 📊 Projects / Epics
- ✅ Tasks
- 📋 Kanban Board View
- 🗃️ Data Table View
- 📅 Calendar View
- ✉️ Invite System
- ⚙️ Workspace and Project Settings
- 🖼️ Image Uploads (for avatars and attachments)
- 🔌 Appwrite SDK Integration
- ⚛️ Next.js 14 Framework
- 🎨 Shadcn UI & TailwindCSS Styling
- 🔍 Advanced Search and Filtering
- 📈 Analytics Dashboard
- 👥 User Roles and Permissions
- 🔒 Authentication (OAuth and Email)
- 📱 Responsive Design (Mobile-friendly)
- 🚀 API using Hono.js

# 📺 Build a Jira Clone With Nextjs, React, Tailwind, Hono.js | Part 1/2 (2024)

## 00:00 Intro & demo
## 03:29 Project setup
## 09:25 Adding a component library
- shadcn 설치
```bash
bunx --bun shadcn --version                   
2.1.6
bunx --bun shadcn@2.1.6 init
```
- shadcn/ui - button 컴포넌트 추가
  - `bunx --bun shadcn@latest add button`


## 21:41 Customizing components
- shadcn 컴포넌트 추가
  - bunx --bun shadcn@latest add
  ```bash
  bunx --bun shadcn@latest add

  ? Which components would you like to add? › Space to select. A to toggle all. Enter to submit. 
  ◉ ↑ avatar
  ◉   badge
  ◯   breadcrumb
  ◯   button
  ◉   calendar
  ◉   card
  ◯   carousel
  ◯   chart
  ◯   checkbox
  ◯ ↓ collapsible
  ```
  - add 명령을 입력하면 여러 컴포넌트를 선택해서 한번에 설치가능


## 34:02 Resolving lint errors
- `.eslintrc.json` 파일 수정
  - 규칙 추가
- shadcn-ui 컴포넌트 빌드 에러 수정


## 39:12 Creating auth screens
- `src/app/layout.tsx` 수정
  - 전체 폰트 변경
- `public/logo.svg` 로고 추가
- `src/app/(auth)/layout.tsx` 생성
  - 인증 페이지 레이아웃
  - 네비게이션 바 추가
    - 로그인, 회원가입 경로에 따라 버튼 변경
- `src/app/(auth)/sign-in/page.tsx` 생성
  - 로그인 페이지
  - 로그인 카드 폼 추가
- `src/app/(auth)/sign-up/page.tsx` 생성
  - 회원가입 페이지
  - 회원가입 카드 폼 추가
- `src/components/dotted-separator.tsx` 생성
  - 점선 컴포넌트
- `react-icons` 추가
  - `bun add react-icons`
- `src/features/auth/components/sign-in-card.tsx` 생성
  - 로그인 카드 컴포넌트
  - form, useForm, zod 적용
- `src/features/auth/components/sign-up-card.tsx` 생성
  - 회원가입 카드 컴포넌트
  - form, useForm, zod 적용


## 01:34:17 Setting up Hono API
- [Vercel - Hono](https://hono.dev/docs/getting-started/vercel#vercel)
- `bun add hono` 디펜던시 추가
- `src/app/api/[[...route]]/route.ts` 생성
  - 샘플코드 작성

### Note
```ts
app.get("/project/:projectId", (c) => {
  const { projectId } = c.req.param();
  
  return c.json({ project: projectId });
});

const { projectId } = c.req.param();
```
- 구조체를 사용해서 파라미터를 가져오면 path가 변경되면 에러를 발생시켜서 안전하게 사용할 수 있다.


## 01:48:11 Creating auth API
- `bun add @tanstack/react-query` 디펜던시 추가
  - 비동기 상태 관리를 위한 라이브러리
  - [TanStack Query](https://tanstack.com/query/latest)는 항상 최신 상태로 유지되는 선언적 자동 관리 쿼리와 변형을 제공하여 개발자와 사용자 환경을 직접적으로 개선합니다.
- `src/components/query-provider.tsx` 생성
  - [ReactQuery](https://tanstack.com/query/latest/docs/framework/react/guides/advanced-ssr#advanced-server-rendering) QueryProvider 컴포넌트
- `src/app/layout.tsx` 수정
  - QueryProvider 컴포넌트 추가
- `src/features/auth/server/route.ts` 생성
  - `bun add @hono/zod-validator` 디펜던시 추가
  - auth 관련  API 추가
- `.env.local` 파일 생성
  - 기본 APP URL 설정
- `src/lib/rpc.ts` 생성
  - Hono Client 설정
  - Hono Client 타입 지정 
- `src/features/auth/schemas.ts` 생성
  - login, register 스키마 추가
  - 컴포넌트, API 에서 같은 zod 를 사용하도록 설정
- src/features/auth/api/use-login.ts 생성  
  - login POST API 추가
- src/features/auth/api/use-register.ts 생성  
  - register POST API 추가
- src/app/api/[[...route]]/route.ts 수정
  - Hono 설정
  - src/features/auth/server/route.ts 에 auth route 추가


## 02:21:49 Setting up Appwrite & database
- `Appwrite 설정`
  - 디펜던시 추가
    - `bun add node-appwrite`
    - `bun add server-only`
      - 서버 전용 모듈 사용
- `.env.local` 수정
  - Appwrite Endpoint, Project ID, API Key 설정
- `src/app/lib/appwrite.ts` 생성
  - Appwrite Client 및 Account 생성
  - **server-only** 적용해서 외부로 노출되지 않도록 설정
- `src/features/auth/server/route.ts` 수정
  - appwrite 이메일, 패스워드 세션 생성
  - hono 쿠키 설정
  - logout API 추가
- `src/features/auth/constants.ts` 생성
  - AUTH_COOKIE 상수 추가


## 02:51:10 Building a session middleware
## 03:12:58 Learning how to protect routes
## 03:45:28 Building a dashboard layout
## 04:07:02 Building a workspace form 
## 04:37:36 Handling image upload
## 05:04:37 Creating a workspace switcher
## 05:22:36 Creating workspace members
## 05:38:45 Building a responsive modal
## 06:11:44 Building a standalone layout
## 06:22:51 Building workspace settings
## 07:02:38 Refactoring server queries
## 07:12:03 Adding a "delete" functionality
## 07:35:03 Adding a "reset invite" functionality
## 07:47:03 Building the invite system
## 08:10:05 Adding a "delete" functionality

# 📺 Build a Jira Clone With Nextjs, React, Tailwind, Hono.js | Part 2/2 (2024)
...