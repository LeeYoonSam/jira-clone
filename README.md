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
- `src/lib/session-middleware.ts` 생성
  - 세션 미들웨어 추가
  - appwrite 설정 및 Unauthorized 에러 처리
  - 미들웨어에서 타입 추론을위해 AdditionalContext 추가
- `src/features/auth/server/route.ts` 수정
  - logout 시 session, cookie 삭제
  - current API 추가
- `src/features/auth/api/use-current.ts` 생성
  - 현재 사용자 조회 훅 정의
- `src/features/auth/api/use-logout.ts` 생성
  - 로그아웃 훅 정의

### NOTE
API 훅
- 재사용, API 요청과 응답 상태 관리
- 비동기 프로세스를 처리하기 위해 React Query 의 useMutation 훅 사용

예시
- [useLogin](./src/features/auth/api/use-login.ts)
- [useRegister](./src/features/auth/api/use-logout.ts)


## 03:12:58 Learning how to protect routes
- `src/features/auth/components/user-button.tsx` 생성
  - 사용자 정보 컴포넌트
  - 로그아웃 기능 추가
- `src/app/page.tsx` 수정
  - 사용자 정보 컴포넌트 추가
  - 리다이렉트 적용
- `src/features/auth/action.ts` 생성
  - appwrite 설정 및 session 정보로 유저 정보 가져오기
- `src/app/(auth)/sign-in/page.tsx` 수정
- `src/app/(auth)/sign-up/page.tsx` 수정
  - 리다이렉트 적용


## 03:45:28 Building a dashboard layout
- `src/app/(dashboard)/page.tsx` 수정
  - src/app/page.tsx -> 이동
- `src/app/(dashboard)/layout.tsx` 생성
  - 대시보드 레이아웃 추가
- `src/components/sidebar.tsx` 생성
  - 사이드바 컴포넌트
  - 메뉴, 태스크, 설정, 멤버 메뉴 추가
- `src/components/navigation.tsx` 생성
  - 사이드바 메뉴 컴포넌트
  - Route 정보 설정(이름, 아이콘, 경로 등)
- `src/components/navbar.tsx` 생성
  - 상단 네비게이션 바 컴포넌트
- `src/components/mobile-sidebar.tsx` 생성
  - 모바일용 사이드바 컴포넌트


## 04:07:02 Building a workspace form 
- `appwrite` Database 생성
  - Database 생성
  - Collection 생성
  - Attributes 생성
- `.env.local` 수정
  - Database ID 설정
- `src/config.ts` 생성
  - env id 상수 설정
- `src/features/workspaces/schemas.ts` 생성
  - workspace 스키마 정의
- `src/features/workspaces/server/route.ts` 생성
  - workspace 생성 API 추가
- `src/app/api/[[...route]]/route.ts` 수정
  - workspace route 추가
- `src/features/workspaces/api/use-create-workspace.ts` 생성
  - workspace 생성 API 훅 추가
  - mutation 추가
- `src/features/workspaces/components/create-workspace-form.tsx` 생성
  - workspace 생성 폼 컴포넌트
- `src/app/(dashboard)/page.tsx` 수정
  - workspace 폼 컴포넌트 추가
- `src/app/layout.tsx` 수정
  - sonner Toaster 추가
- `src/features/auth/api mutation hook들` 수정
  - login, logout, register 훅 수정
  - 훅 내부 에러 핸들링 추가
  - 토스트 메시지 추가


## 04:37:36 Handling image upload
- `src/features/workspaces/schemas.ts` 수정
  - 이미지 추가
- AppWrite 대시보드 설정
  - Storage 생성 및 권한 설정
  - Database > workspace > atttribute > imageUrl 추가
- `.env.local` 수정
  - Storage ID 설정
- `src/features/workspaces/server/route.ts` 수정
  - appwrite storage 이미지 업로드 및 url 가져와서 workspace 생성


## 05:04:37 Creating a workspace switcher
- `src/features/workspaces/server/route.ts` 수정
  - workspace 조회 API 추가
- `src/features/workspaces/api/use-get-workspaces.ts` 생성
  - workspace 조회
- `src/components/sidebar.tsx` 수정
  - Workspace Switcher 메뉴 추가
- `src/components/workspace-switcher.tsx` 생성
  - Workspace Switcher 컴포넌트
  - Select 컴포넌트를 사용해서 워크스페이스 리스트 추가
  - Avatar 컴포넌트 사용
- `src/features/workspaces/components/workspace-avatar.tsx` 생성
  - Workspace Avatar 컴포넌트


## 05:22:36 Creating workspace members
- AppWrite Database 추가
  - members collection 생성
    - attributes : userId, workspaceId, role
    - settings: all user - create, read, update, delete
- `.env.local` 수정
  - members collection id 추가
- `src/config.ts` 수정
  - members collection id 추가
- `src/features/workspaces/server/route.ts` 수정
  - **post:** workspace 생성시 members 에 userId, workspaceId, role 추가
  - **get:** workspace 조회시 members 조회, 정렬 후 해당하는 workspace 반환
- `src/features/members/types.ts` 생성
  - member role 타입 정의
- `src/features/auth/api/use-logout.ts` 수정
  - logout 시 workspace 관련 쿼리 무효화 처리
- AppWrite Database 수정
  - worksapce collection 수정
    - attributes 추가: inviteCode
- `src/lib/utils.ts` 수정
  - inviteCode 생성 함수 추가
- `src/features/workspaces/server/route.ts` 수정
  - workspace 생성시 inviteCode 추가


## 05:38:45 Building a responsive modal
- `src/app/(dashboard)/workspaces/[workspaceId]/page.tsx` 생성
  - 워크스페이스 페이지
- `src/components/workspace-switcher.tsx` 수정
  - select 선택시 workspaces path 로 이동 처리
- `src/features/workspaces/hooks/use-workspace-id.ts` 생성
  - workspaceId 훅 추가
- `src/features/workspaces/action.ts` 수정
  - 데이터베이스에서 workspaces 리스트 조회
- `src/app/(dashboard)/page.tsx` 수정
  - 워크스페이스 갯수에 따라 리다이렉트 처리
- `src/app/(dashboard)/loading.tsx` 생성
  - 대시보드 로딩 페이지 추가
- `src/components/responsive-modal.tsx` 생성
  - `bun add react-use` 디펜던시 추가
  - useMedia 로 디바이스 크기 확인
  - 화면 크기에 맞게 다이얼로그, 드로어 표시
- `src/features/workspaces/components/create-workspace-modal.tsx` 생성  
  - 워크스페이스 생성 모달 컴포넌트
- `src/app/(dashboard)/layout.tsx` 수정
  - 워크스페이스 생성 모달 컴포넌트 추가
- `src/features/workspaces/hooks/use-create-workspace-modal.ts` 생성
  - 워크스페이스 생성 모달 상태 훅 추가
  - `bun add nuqs@1.19.1` 디펜던시 추가
    - React용 타입 안전 검색 매개변수 상태 관리자


## 06:11:44 Building a standalone layout
- `src/features/workspaces/components/create-workspace-form.tsx` 수정
  - 워크스페이스 생성 폼 컴포넌트 수정
  - 조건에 따라 cancel 버튼 가시성 처리
- `src/app/(dashboard)/workspaces/[workspaceId]/page.tsx` 수정
  - 비로그인 유저 리다이렉트 처리
- `src/app/(standalone)/layout.tsx` 생성
  - standalone 레이아웃 추가
- `src/app/(standalone)/workspaces/create/page.tsx` 생성
  - standalone 워크스페이스 생성 페이지 추가


## 06:22:51 Building workspace settings
- `src/features/workspaces/schemas.ts` 수정
  - updateWorkspaceSchema 스키마 추가
- `src/features/members/utils.ts` 생성
  - getMember 함수 추가
- `src/features/workspaces/server/route.ts` 수정
  - workspace 업데이트 API 추가
- `src/features/workspaces/api/use-update-workspace.ts` 생성
  - workspace 업데이트 API 훅 추가
- `src/features/workspaces/types.ts` 생성
  - workspace 타입 정의
- `src/app/(standalone)/workspaces/[workspaceId]/settings/page.tsx` 생성
  - 워크스페이스 설정 페이지 추가
- `src/features/workspaces/components/edit-workspace-form.tsx` 생성
  - 워크스페이스 정보 업데이트 컴포넌트
- `src/features/workspaces/action.ts` 수정
  - workspace 조회
- `src/app/api/[[...route]]/route.ts` 수정
  - PATCH 메서드 추가

## 07:02:38 Refactoring server queries
## 07:12:03 Adding a "delete" functionality
## 07:35:03 Adding a "reset invite" functionality
## 07:47:03 Building the invite system
## 08:10:05 Adding a "delete" functionality

# 📺 Build a Jira Clone With Nextjs, React, Tailwind, Hono.js | Part 2/2 (2024)
...