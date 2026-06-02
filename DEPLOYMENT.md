# 배포 준비 문서

## 1. 배포 대상

- Framework: Next.js
- 권장 배포: Vercel
- Backend: Supabase
- Domain: Cloudflare 또는 기존 도메인 연결

## 2. Vercel 환경변수

Vercel Project Settings > Environment Variables에 아래 값을 등록합니다.

```bash
NEXT_PUBLIC_SITE_URL=https://cheongharam.co.kr
NEXT_PUBLIC_SUPABASE_URL=https://tybsykuprjkivllfshca.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=...
SUPABASE_SECRET_KEY=...
```

`SUPABASE_SECRET_KEY`는 서버 전용 값입니다. 브라우저에 노출되면 안 됩니다.

## 3. Supabase 설정

1. Supabase SQL Editor에서 `supabase/schema.sql` 실행
2. Storage에 `images` bucket 생성 확인
3. Auth에서 관리자 이메일 계정 생성
4. Vercel 배포 URL을 Supabase Auth URL 설정에 추가

권장 Auth URL:

```txt
Site URL: https://cheongharam.co.kr
Redirect URLs:
https://cheongharam.co.kr/**
https://*.vercel.app/**
http://localhost:3000/**
```

## 4. Vercel 빌드 설정

Vercel이 자동 감지하면 별도 설정은 필요 없습니다.

```txt
Install Command: npm install
Build Command: npm run build
Output Directory: .next
```

## 5. 배포 전 로컬 검증

```bash
npm run lint
npm run build
```

## 6. 배포 후 확인 페이지

- `/`
- `/products`
- `/products/silver-walker`
- `/donation`
- `/business`
- `/news`
- `/contact`
- `/admin/login`
- `/robots.txt`
- `/sitemap.xml`

## 7. 제외 범위 유지

이번 배포에는 QR 물류 추적, PG 결제, 장바구니, 배송조회, 회원 포인트, 자동 알림 발송 기능을 포함하지 않습니다.
