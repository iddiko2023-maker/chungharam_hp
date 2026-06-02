create extension if not exists "pgcrypto";

create table if not exists categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  sort_order integer default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references categories(id),
  name text not null,
  slug text unique not null,
  short_description text,
  description text,
  main_image_url text,
  gallery_urls text[],
  price_text text,
  is_featured boolean default false,
  is_donation_available boolean default false,
  is_business_available boolean default true,
  status text default 'active',
  sort_order integer default 0,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists inquiries (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('product', 'business', 'donation', 'partnership', 'general')),
  name text not null,
  phone text,
  email text,
  company text,
  message text,
  product_id uuid references products(id),
  status text default 'new' check (status in ('new', 'checking', 'completed')),
  created_at timestamptz default now()
);

create table if not exists donation_requests (
  id uuid primary key default gen_random_uuid(),
  donor_type text not null check (donor_type in ('개인', '기업', '단체', '기관')),
  donor_name text not null,
  phone text,
  email text,
  company text,
  product_id uuid references products(id),
  quantity integer,
  message text,
  status text default 'new' check (status in ('new', 'checking', 'completed')),
  created_at timestamptz default now()
);

create table if not exists posts (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('notice', 'news', 'donation_story')),
  title text not null,
  slug text unique not null,
  excerpt text,
  content text,
  thumbnail_url text,
  status text default 'published',
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists banners (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  subtitle text,
  image_url text,
  button_text text,
  button_link text,
  sort_order integer default 0,
  is_active boolean default true,
  created_at timestamptz default now()
);

create table if not exists site_settings (
  id uuid primary key default gen_random_uuid(),
  company_name text,
  phone text,
  email text,
  address text,
  business_number text,
  kakao_url text,
  footer_description text,
  updated_at timestamptz default now()
);

alter table categories enable row level security;
alter table products enable row level security;
alter table inquiries enable row level security;
alter table donation_requests enable row level security;
alter table posts enable row level security;
alter table banners enable row level security;
alter table site_settings enable row level security;

create policy "public read active categories" on categories for select using (is_active = true);
create policy "public read active products" on products for select using (status = 'active');
create policy "public read published posts" on posts for select using (status = 'published');
create policy "public read active banners" on banners for select using (is_active = true);
create policy "public insert inquiries" on inquiries for insert with check (true);
create policy "public insert donations" on donation_requests for insert with check (true);

insert into categories (name, slug, description, sort_order)
values
  ('생활지원', 'daily-care', '일상 편의를 돕는 제품', 1),
  ('안전보호', 'safety', '낙상과 사고를 줄이는 제품', 2),
  ('건강관리', 'health', '기본 건강 관리를 돕는 제품', 3)
on conflict (slug) do nothing;

insert into products (
  category_id,
  name,
  slug,
  short_description,
  description,
  main_image_url,
  price_text,
  is_featured,
  is_donation_available,
  is_business_available,
  sort_order
)
values
  (
    (select id from categories where slug = 'daily-care'),
    '실버 안심 보행 보조기',
    'silver-walker',
    '가벼운 프레임과 안정적인 브레이크로 외출을 돕는 보행 보조기입니다.',
    '기관과 가정에서 모두 사용할 수 있도록 접이식 구조, 넓은 손잡이, 안정적인 제동 장치를 갖춘 생활지원 제품입니다.',
    '/images/product-walker.png',
    '문의 후 견적',
    true,
    true,
    true,
    1
  ),
  (
    (select id from categories where slug = 'safety'),
    '욕실 안전 손잡이 세트',
    'bath-safety-bar',
    '미끄럼 사고가 잦은 욕실과 복도에 설치하는 안전보호 제품입니다.',
    '고령층 생활공간의 낙상 위험을 줄이기 위한 손잡이 세트입니다.',
    '/images/product-bath-safety.png',
    '기관 납품 상담',
    true,
    true,
    true,
    2
  ),
  (
    (select id from categories where slug = 'health'),
    '기본 건강 체크 키트',
    'health-check-kit',
    '혈압, 체온 등 기본 건강 확인에 필요한 물품을 묶은 키트입니다.',
    '복지기관, 요양시설, 지역 돌봄 현장에서 반복적으로 필요한 건강관리 물품을 구성한 키트입니다.',
    '/images/product-health-kit.png',
    '구성별 견적',
    true,
    false,
    true,
    3
  )
on conflict (slug) do nothing;

insert into posts (type, title, slug, excerpt, content, thumbnail_url, published_at)
values
  (
    'news',
    '지역 어르신 생활지원 제품 전달',
    'local-senior-support',
    '청하람과 협력기관이 함께 생활지원 제품을 필요한 어르신에게 전달했습니다.',
    '제품 전달은 현장 수요 확인, 제품 구성, 전달 확인 순서로 진행되었습니다.',
    '/images/news-delivery.png',
    now()
  ),
  (
    'notice',
    '기관 납품 상담 절차 안내',
    'business-process',
    '기관 납품 문의는 제품 구성, 수량, 납품 일정 확인 후 견적으로 이어집니다.',
    '문의 접수 후 담당자가 제품 구성과 납품 조건을 확인해 안내드립니다.',
    '/images/news-business-consulting.png',
    now()
  )
on conflict (slug) do nothing;

insert into storage.buckets (id, name, public)
values ('images', 'images', true)
on conflict (id) do nothing;
