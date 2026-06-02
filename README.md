# 청하람 홈페이지

청하람 회사 홈페이지, 제품 소개, 제품 후원 신청, 기관 납품 문의, 활동 소식, 공지사항, 관리자 페이지를 포함한 Next.js App Router 프로젝트입니다.

## 기술 스택

- Next.js
- TypeScript
- TailwindCSS
- React Hook Form
- Zod
- Lucide React
- Supabase Database/Auth/Storage/RLS

## 실행

```bash
npm install
npm run dev
```

기본 개발 서버는 `http://localhost:3000` 입니다.

## 환경변수

`.env.local`에 Supabase URL, publishable key, secret key를 설정합니다.

```bash
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
SUPABASE_SECRET_KEY=
```

## Supabase 초기 설정

Supabase SQL Editor에서 `supabase/schema.sql`을 실행하면 다음 항목이 생성됩니다.

- `categories`
- `products`
- `inquiries`
- `donation_requests`
- `posts`
- `banners`
- `site_settings`
- `images` Storage bucket
- 기본 RLS 정책
- 샘플 카테고리, 제품, 게시글

관리자 로그인은 Supabase Auth에서 관리자 이메일 계정을 생성한 뒤 `/admin/login`에서 사용합니다.

## 배포

배포 준비 절차는 `DEPLOYMENT.md`를 참고합니다.

## 제외 범위

이번 개발 범위에는 QR 물류 추적, PG 결제, 장바구니, 배송조회, 회원 포인트, 자동 알림 발송 기능을 포함하지 않습니다.
