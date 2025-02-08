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

## Intro & demo
## Project setup
## Adding a component library
- shadcn 설치
```bash
bunx --bun shadcn --version                   
2.1.6
bunx --bun shadcn@2.1.6 init
```
- shadcn/ui - button 컴포넌트 추가
  - `bunx --bun shadcn@latest add button`


## Customizing components
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


## Resolving lint errors
- `.eslintrc.json` 파일 수정
  - 규칙 추가
- shadcn-ui 컴포넌트 빌드 에러 수정


## Creating auth screens
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


## Setting up Hono API
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


## Creating auth API
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


## Setting up Appwrite & database
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

## Building a session middleware
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


## Learning how to protect routes
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


## Building a dashboard layout
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


## Building a workspace form 
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


## Handling image upload
- `src/features/workspaces/schemas.ts` 수정
  - 이미지 추가
- AppWrite 대시보드 설정
  - Storage 생성 및 권한 설정
  - Database > workspace > atttribute > imageUrl 추가
- `.env.local` 수정
  - Storage ID 설정
- `src/features/workspaces/server/route.ts` 수정
  - appwrite storage 이미지 업로드 및 url 가져와서 workspace 생성


## Creating a workspace switcher
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


## Creating workspace members
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


## Building a responsive modal
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


## Building a standalone layout
- `src/features/workspaces/components/create-workspace-form.tsx` 수정
  - 워크스페이스 생성 폼 컴포넌트 수정
  - 조건에 따라 cancel 버튼 가시성 처리
- `src/app/(dashboard)/workspaces/[workspaceId]/page.tsx` 수정
  - 비로그인 유저 리다이렉트 처리
- `src/app/(standalone)/layout.tsx` 생성
  - standalone 레이아웃 추가
- `src/app/(standalone)/workspaces/create/page.tsx` 생성
  - standalone 워크스페이스 생성 페이지 추가


## Building workspace settings
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


## Refactoring server queries
- `src/features/auth/actions.ts -> src/features/auth/queries.ts` 이름 변경
  - 사용중인 소스코드 import 수정
  - createSessionClient 사용해서 리팩토링
- `src/lib/appwrite.ts` 수정
  - createSessionClient 함수 추가
    - appwrite client 설정
      - 쿠키에서 session 가져와서 appwrite session 설정
      - Account, Database 리턴
- `src/features/workspaces/actions.ts -> src/features/workspaces/queries.ts` 이름 변경
  - 사용중인 소스코드 import 수정
  - createSessionClient 사용해서 리팩토링

  
## Adding a "delete" functionality
- `src/features/workspaces/server/route.ts` 수정
  - workspace 삭제 API 추가
-`src/features/workspaces/api/use-delete-workspace.ts` 생성
  - workspace 삭제 API 훅 추가
- `src/hooks/use-confirm.tsx` 생성
  - 공통 다이얼로그용 훅
- `src/features/workspaces/components/edit-workspace-form.tsx` 수정
  - 워크스페이스 삭제 컴포넌트 추가
- `src/app/api/[[...route]]/route.ts` delete 메서드 추가


## Adding a "reset invite" functionality
- `src/features/workspaces/server/route.ts` 수정
  - workspace 초대코드 재설정 API 추가
- `src/features/workspaces/api/use-reset-invite-code.ts` 생성
  - useResetInviteCode 커스텀 훅 정의
  - react-query의 useMutation을 사용하여 워크스페이스의 초대 코드를 재설정하는 API 요청을 처리
  - 성공시 성공 메시지를 표시하고 관련 쿼리를 무효화하여 데이터를 갱신, 실패시 오류 메시지를 표시
- `src/features/workspaces/components/edit-workspace-form.tsx` 수정
  - 워크스페이스 초대코드 재설정 컴포넌트 추가
  

## Building the invite system
- `src/features/workspaces/server/route.ts` 수정
  - workspace 참가 API 추가
- `src/features/workspaces/queries.ts` 수정
  - 데이터베이스에서 workspace 정보 조회 쿼리 추가
- `src/features/workspaces/api/use-join-workspace.ts` 생성
  - 워크스페이스 초대코드 훅 정의
  - react-query의 useMutation을 사용하여 워크스페이스에 참가하는 API 요청을 처리
- `src/features/workspaces/hooks/use-invite-code.ts` 생성
  - 워크스페이스 초대코드 훅 정의
- `src/features/workspaces/components/join-workspace-form.tsx` 생성
  - 워크스페이스 참가 폼 컴포넌트 추가
- `src/app/(standalone)/workspaces/[workspaceId]/join/[inviteCode]/page.tsx` 생성
  - 워크스페이스 참가 페이지 추가
  - 워크스페이스 정보를 가져와서 참가 폼에 전달


## Adding a "member" functionality
- `src/features/members/server/route.ts` 수정
  - 멤버 get, delete, patch API 추가
- `src/app/api/[[...route]]/route.ts` 수정
  - Member Route 추가
- `src/lib/appwrite.ts` 수정
  - createAdminClient 에 Users 추가
- `src/features/members/api/use-delete-member.ts` 생성
  - 멤버 삭제 훅 정의
  - react-query의 useMutation을 사용하여 멤버 삭제 API 요청 처리
- `src/features/members/api/use-get-members.ts` 생성
  - 멤버 조회 훅 정의
  - react-query의 useMutation을 사용하여 멤버 조회 API 요청 처리
- `src/features/members/api/use-update-member.ts` 생성
  - 멤버 업데이트 훅 정의
  - react-query의 useMutation을 사용하여 멤버 업데이트 API 요청 처리
- `src/features/members/components/member-avatar.tsx` 생성
  - 멤버 아바타 컴포넌트 추가
- `src/features/members/components/members-list.tsx` 생성
  - 멤버 리스트 컴포넌트 추가
- `src/app/(standalone)/workspaces/[workspaceId]/members/page.tsx` 생성
  - 멤버 페이지 추가

### Note
**new Users(client) 로 유저 정보를 가져올때 401(general_unauthorized_scope) 에러 발생**
- Appwrite 대시보드 > 프로젝트 > API Keys 선택 > Scopes > Auth - users.read 추가


# 📺 Build a Jira Clone With Nextjs, React, Tailwind, Hono.js | Part 2/2 (2024)

## Adding workspace projects
- `.env.local` 수정
  - PROJECT_ID 추가
- `src/config.ts` 수정
  - PROJECT_ID 상수 추가
- `src/features/projects/server/route.ts` 생성
  - project 생성 API 추가
- `src/app/api/[[...route]]/route.ts` 수정
  - project route 추가
- `src/features/projects/schemas.ts` 생성
  - project 스키마 추가
- `src/features/projects/api/use-create-project.ts` 생성
  - 프로젝트 생성 훅 정의
  - react-query의 useMutation을 사용하여 프로젝트 생성 API 요청 처리
- `src/features/projects/api/use-get-projects.ts` 생성
  - 프로젝트 조회 훅 정의
  - react-query의 useMutation을 사용하여 프로젝트 조회 API 요청 처리
- `src/components/sidebar.tsx` 수정
  - 프로젝트 메뉴 추가
- `src/components/projects.tsx` 생성
  - 프로젝트 리스트 컴포넌트 추가
- `src/features/projects/hooks/use-create-project-modal.ts` 생성  
  - 프로젝트 생성 모달 훅 추가
- `src/features/projects/components/project-avatar.tsx` 생성
  - 프로젝트 아바타 컴포넌트 추가
- `src/features/workspaces/components/workspace-avatar.tsx` 수정
  - 이미지 라운드 수정


## Building project settings
- `src/features/projects/queries.ts` 생성
  - 디비에서 프로젝트 정보 가져오기
- `src/features/projects/types.ts` 생성
  - Project 타입 추가
- `src/app/(dashboard)/workspaces/[workspaceId]/projects/[projectId]/page.tsx` 수정
  - 프로젝트 페이지
- `src/app/(standalone)/error.tsx` 생성
  - 글로벌 에러 페이지
- `src/app/(standalone)/loading.tsx` 생성
  - 글로벌 로딩 페이지
- `src/app/(auth)` error, loading 추가
- `src/app/(standalone)` error, loading 추가
- `src/features/workspaces/queries.ts` 수정
  - try catch 제거
- `src/features/projects/schemas.ts` 수정
  - updateProjectSchema 추가
- `src/features/projects/server/route.ts` 수정
  - project patch API 추가
- `src/features/workspaces/components/edit-workspace-form.tsx` 수정
  - router 관련 로직 수정
- `src/features/workspaces/api/use-update-workspace.ts` 수정
  - router 관련 로직 수정
- `src/features/workspaces/api/use-reset-invite-code.ts` 수정
  - router 관련 로직 수정
- `src/app/(standalone)/workspaces/[workspaceId]/projects/[projectId]/settings/page.tsx` 생성
  - 프로젝트 설정 페이지
- `src/app/(standalone)/workspaces/[workspaceId]/settings/page.tsx` 수정
  - 워크스페이스 설정 페이지
- `src/features/projects/api/use-update-project.ts` 생성
  - 프로젝트 업데이트 훅 정의
  - react-query의 useMutation을 사용하여 프로젝트 업데이트 API 요청 처리
- `src/features/projects/components/create-project-form.tsx` 생성
  - 프로젝트 생성 폼 컴포넌트 추가
- `src/features/projects/components/edit-project-form.tsx` 생성
  - 프로젝트 업데이트 폼 컴포넌트 추가
  - 프로젝트 업데이트, 삭제 처리
- `src/features/projects/api/use-delete-project.ts` 생성
  - 프로젝트 삭제 훅 정의
  - react-query의 useMutation을 사용하여 프로젝트 삭제 API 요청 처리


## Building a tasks API
- `src/features/tasks/components/task-view-switcher.tsx` 생성
  - taskViewSwitcher 컴포넌트
  - 태스크 뷰 TabList 추가
- `src/app/(dashboard)/workspaces/[workspaceId]/projects/[projectId]/page.tsx` 수정
  - taskViewSwitcher 추가
- `src/components/ui/tabs.tsx` 수정
  - 탭 css 수정
- AppWrite Database 추가
  - tasks collection 생성
    - attributes : workspaceId, name, projectId, assigneeId, dueDate, description, status
    - settings: all user - create, read, update, delete
- `.env.local` 수정
  - tasks collection id 추가
- `src/config.ts` 수정
  - tasks collection id 추가
- `src/features/tasks/schemas.ts` 생성
  - createTaskSchema 스키마 추가
- `src/features/tasks/types.ts` 생성
  - TaskStatus enum 타입 정의
- `src/features/tasks/server/route.ts` 생성
  - **post:** task 생성 API 추가
  - **get:** task 조회 API 추가
- `src/app/api/[[...route]]/route.ts` 수정
  - tasks route 추가


## Building a task form
- `src/features/tasks/hooks/use-create-task-modal.ts` 생성
  - 태스크 생성 모달 훅 추가
- `src/features/tasks/components/create-task-modal.tsx` 생성
  - 태스크 생성 모달 컴포넌트 추가
- `src/app/(dashboard)/layout.tsx` 수정
  - CreateTaskModal 컴포넌트 추가
- `src/features/tasks/components/task-view-switcher.tsx` 수정
  - useCreateTaskModal 훅 사용
  - new 클릭시 태스크 생성 모달 오픈
- `src/features/tasks/components/create-task-form-wrapper.tsx` 생성
  - 태스크 생성 폼 랩퍼 컴포넌트
- `src/features/tasks/components/create-task-form.tsx` 생성
  - 태스크 생성 폼 컴포넌트
- `src/components/date-picker.tsx` 날짜 선택 컴포넌트 생성
  - `bun add date-fns`


## Building data filters
- `src/features/tasks/api/use-get-tasks.ts` 수정
  - 태스크 조회 API 필터 추가
- `src/features/tasks/components/data-filters.tsx` 생성
  - 태스크 필터 컴포넌트 추가
  - status, assignee, project, dueDate 필터 추가
- `src/features/tasks/components/task-view-switcher.tsx` 수정
  - dataFilters 추가
  - task 리스트에 필터 적용
- `src/features/tasks/hooks/use-task-filters.ts` 생성
  - 태스크 필터 훅 정의


## Building a data table
- `src/features/tasks/components/columns.tsx` 생성
  - DataTable Columns 정의
  - `bun add @tanstack/react-table`
- `src/features/tasks/types.ts` 수정
  - Task 타입 추가
- `src/features/tasks/server/route.ts` 수정
  - Task get API 추가
- `src/lib/utils.ts` 수정
  - 타이틀용 텍스트 변환 유틸 추가
- `src/features/tasks/components/columns.tsx` 생성
  - 테이블 컬럼 설정
- `src/features/tasks/components/data-table.tsx` 생성
  - 테이블 컴포넌트 구현
- `src/features/tasks/components/task-actions.tsx` 생성
  - 테이블 액션 추가(Task Details, Open Project, Edit Task, Delete Task)
- `src/features/tasks/components/task-date.tsx` 추가
  - 태스크 날짜 컴포넌트
- `src/components/ui/badge.tsx` 수정
  - 뱃지 컴포넌트 Status 별 variants 추가
- `src/features/tasks/components/task-view-switcher.tsx` 수정
  - TabList 의 Table 추가(DataTable)


## Adding task settings
- `src/features/tasks/types.ts` Task Type 수정 
  - workspaceId 추가
- `src/features/tasks/server/route.ts` 수정
  - task delete 추가
  - task patch 추가
  - task get 추가
- `src/features/tasks/api/use-delete-task.ts` 생성
  - react-query 를 사용해서 태스크 삭제 API 훅 생성
- `src/features/tasks/components/task-actions.tsx` 수정
  - 테이블 액션 추가
  - Router 를 사용해서 task details, project 이동
  - Dialog, delete hook 을 사용해서 삭제 처리
  - EditForm, edit hook 을 사용해서 작업 업데이트 처리
- `src/features/tasks/hooks/use-edit-task-modal.ts` 생성
  - EditModal 에서 사용할 상태 훅 추가
- `src/features/tasks/api/use-update-task.ts` 생성
  - react-query 를 사용해서 태스크 업데이트 API 훅 생성
- `src/features/tasks/components/edit-task-form.tsx` 생성
  - EditForm 컴포넌트
- `src/features/tasks/components/edit-task-form-wrapper.tsx` 생성
  - EditTaskForm 랩퍼 컴포넌트
- `src/features/tasks/components/edit-task-modal.tsx` 생성
  - useEditTaskModal 을 사용한 모달 컴포넌트
  - EditTaskFormWrapper 컴포넌트 추가
- `src/features/tasks/api/use-get-task.ts` 생성
  - react-query 를 사용해서 태스크 하나의 정보 가져오는 API 훅 생성
- `src/app/(dashboard)/layout.tsx` 수정
  - EditTaskModal 컴포넌트 추가


## Building a data kanban
- 드래그앤드롭 라이브러리 추가
  - `bun add @hello-pangea/dnd`
- `src/features/tasks/components/task-view-switcher.tsx` 수정
  - DataKanban 컴포넌트 추가
- `src/features/tasks/components/data-kanban.tsx` 생성
  - 칸반 컴포넌트
  - DragDropContext 추가
  - 칸반 헤더 추가
- `src/features/tasks/components/kanban-column-header.tsx` 생성
  - 칸반 헤더 컴포넌트
  - 태스크 상태에 따라 아이콘 지정
  - useCreateTaskModal 을 사용해서 태스크 생성 모달 추가


## Adding a kanban update API
- `src/features/tasks/server/route.ts` 수정
  - bulk-update API 추가
- `src/features/tasks/api/use-bulk-update-tasks.ts` 생성
  - 벌크 업데이트 mutation 훅 생성
- `src/features/tasks/components/kanban-card.tsx` 생성
  - 칸반카드 컴포넌트
  - 작업 정보 표시
- `src/features/tasks/components/data-kanban.tsx` 생성
  - 드래그앤 드롭 컴포넌트 추가
  - KanbanCard 컴포넌트 추가
  - 드래그앱 드롭 후 작업 업데이트 처리
- `src/features/tasks/components/task-view-switcher.tsx` 수정
  - onKanbanChange useCallback 추가 및 전달


## Building a data calendar
- 캘린더 라이브러리 추가
  - `bun add react-big-calendar`
  - `bun add -D @types/react-big-calendar`
- `src/features/tasks/components/data-calendar.tsx` 생성
  - 데이터 기반 Calendar 컴포넌트
  - Localizer 적용
  - `import "react-big-calendar/lib/css/react-big-calendar.css";` 캘린더 스타일 적용
  - data-calendar.css 적용
  - CustomToolbar 추가
- `src/features/tasks/components/data-calendar.css` 생성
  - 캘린더 관련 css 다수 추가
- `src/features/tasks/components/event-card.tsx` 추가
  - 이벤트 카드 컴포넌트
  - status 에 따라 색상 className 추가
- `src/features/tasks/components/task-view-switcher.tsx` 수정
  - DataCalendar 컴포넌트 추가


## Adding a task page
- `src/app/(dashboard)/workspaces/[workspaceId]/tasks/page.tsx` 생성
  - MyTasks 페이지 추가
- `src/features/tasks/components/task-view-switcher.tsx` 수정
  - TaskViewSwitcherProps 추가
  - DataFilters hideProjectFilter 적용
- `src/features/tasks/components/data-filters.tsx` 수정
  - hideProjectFilter 속성에 따라 컴포넌트 처리
- `src/components/page-loader.tsx` 생성
  - 공통 페이지 로더 컴포넌트 추가
- `src/components/page-error.tsx` 생성
  - 공통 페이지 에러 컴포넌트 추가
- `src/app/(dashboard)/workspaces/[workspaceId]/tasks/[taskId]/page.tsx` 생성
  - TaskId 페이지 추가
  - TaskIdClient 컴포넌트 추가
- `src/app/(dashboard)/workspaces/[workspaceId]/tasks/[taskId]/client.tsx` 생성
  - TaskIdClient 컴포넌트
  - TaskOverview 컴포넌트 추가
  - TaskDescription 컴포넌트 추가
- `src/features/tasks/hooks/use-task-id.ts` 생성
  - useParams 를 사용해서 taskId 가져오는 훅
- `src/features/tasks/components/task-breadcrumbs.tsx` 생성
  - 작업 이동 경로 컴포넌트
- `src/features/tasks/components/task-overview.tsx` 생성
  - 작업 개요 컴포넌트
- `src/features/tasks/types.ts` 수정
  - description 추가
- `src/features/tasks/components/task-description.tsx` 생성
  - 작업 설명 컴포넌트
  - Description 수정


## Refactoring server components
- `src/app/(dashboard)/workspaces/[workspaceId]/projects/[projectId]/client.tsx` 생성
  - 프로젝트 상세 페이지 클라이언트 컴포넌트
- `src/app/(dashboard)/workspaces/[workspaceId]/projects/[projectId]/page.tsx` 수정
  - 기존에 구현되어있던 컴포넌트를 client 로 이동
- `src/features/projects/hooks/use-project-id.ts` 생성
  - useParams 훅으로 projectId 가져오기
- `src/features/projects/server/route.ts` 수정
  - get API 추가 - `/:projectId`
- `src/features/projects/api/use-get-project.ts` 생성
  - Project 조회 훅 추가
- `src/app/(standalone)/workspaces/[workspaceId]/projects/[projectId]/settings/client.tsx` 생성
  - Settings 페이지 클라이언트 컴포넌트
- `src/app/(standalone)/workspaces/[workspaceId]/projects/[projectId]/settings/page.tsx` 수정
  - Settings 페이지 클라이언트 컴포넌트 추가
- src/features/projects/components/edit-project-form.tsx 수정
  - 프로젝트 수정시 title 인풋은 변경되지 않아서 form.reset 제거
- `src/features/projects/queries.ts` 삭제
  - api/useGetProject 로 사용해서 더이상 필요하지 않음
- `src/features/workspaces/server/route.ts` 수정
  - get API 추가 - `/:workspaceId`
- `src/features/workspaces/api/use-get-workspace.ts` 생성
  - Workspace 조회 훅 추가
- `src/features/workspaces/queries.ts` 수정
  - getWorkspaceInfo, getWorkspace 제거
- `router.refresh()` 제거
  - src/features/workspaces/api/use-update-workspace.ts
  - src/features/workspaces/api/use-reset-invite-code.ts
  - src/features/tasks/api/use-update-task.ts
  - src/features/tasks/api/use-delete-task.ts


## Building project analytics
- src/features/projects/server/route.ts 수정
  - analytics 조회 API 추가
- src/features/projects/api/use-get-project-analytics.ts 생성
  - react-query 를 사용해서 analytics 조회 API 호출 훅 생성
- src/components/analytics.tsx 생성
  - 통계 데이터 컴포넌트
  - 카드 컴포넌트 추가
- src/components/analytics-card.tsx 생성
  - 통계 데이터 카드 컴포넌트
- src/app/(dashboard)/workspaces/[workspaceId]/projects/[projectId]/client.tsx 수정
  - 통계 정보 컴포넌트 추가


## Building workspace analytics
## Resolving build errors
## Implementing OAuth login
## Deployment
## Resolving leftover bugs