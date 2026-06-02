import type { Post } from "@/types/post";
import type { Category, Product } from "@/types/product";

export const categories: Category[] = [
  { id: "cat-1", name: "생활지원", slug: "daily-care", description: "일상 편의를 돕는 제품" },
  { id: "cat-2", name: "안전보호", slug: "safety", description: "낙상과 사고를 줄이는 제품" },
  { id: "cat-3", name: "건강관리", slug: "health", description: "기본 건강 관리를 돕는 제품" },
];

export const products: Product[] = [
  {
    id: "prod-1",
    category_id: "cat-1",
    name: "실버 안심 보행 보조기",
    slug: "silver-walker",
    short_description: "가벼운 프레임과 안정적인 브레이크로 외출을 돕는 보행 보조기입니다.",
    description:
      "기관과 가정에서 모두 사용할 수 있도록 접이식 구조, 넓은 손잡이, 안정적인 제동 장치를 갖춘 생활지원 제품입니다. 제품 후원과 기관 납품 상담이 가능합니다.",
    main_image_url: "/images/product-walker.png",
    price_text: "문의 후 견적",
    is_featured: true,
    is_donation_available: true,
    is_business_available: true,
    categories: categories[0],
  },
  {
    id: "prod-2",
    category_id: "cat-2",
    name: "욕실 안전 손잡이 세트",
    slug: "bath-safety-bar",
    short_description: "미끄럼 사고가 잦은 욕실과 복도에 설치하는 안전보호 제품입니다.",
    description:
      "고령층 생활공간의 낙상 위험을 줄이기 위한 손잡이 세트입니다. 설치 위치와 수량은 기관 환경에 맞춰 상담합니다.",
    main_image_url: "/images/product-bath-safety.png",
    price_text: "기관 납품 상담",
    is_featured: true,
    is_donation_available: true,
    is_business_available: true,
    categories: categories[1],
  },
  {
    id: "prod-3",
    category_id: "cat-3",
    name: "기본 건강 체크 키트",
    slug: "health-check-kit",
    short_description: "혈압, 체온 등 기본 건강 확인에 필요한 물품을 묶은 키트입니다.",
    description:
      "복지기관, 요양시설, 지역 돌봄 현장에서 반복적으로 필요한 건강관리 물품을 구성한 키트입니다.",
    main_image_url: "/images/product-health-kit.png",
    price_text: "구성별 견적",
    is_featured: true,
    is_donation_available: false,
    is_business_available: true,
    categories: categories[2],
  },
  {
    id: "prod-4",
    category_id: "cat-1",
    name: "어르신 생활 위생 패키지",
    slug: "care-hygiene-package",
    short_description: "생활 위생과 돌봄 현장에 필요한 소모품을 안정적으로 공급합니다.",
    description:
      "정기 납품과 후원 캠페인에 모두 활용할 수 있는 위생 패키지입니다. 수량과 예산에 맞춰 구성을 조정합니다.",
    main_image_url: "/images/product-hygiene-package.png",
    price_text: "수량별 견적",
    is_featured: false,
    is_donation_available: true,
    is_business_available: true,
    categories: categories[0],
  },
];

export const posts: Post[] = [
  {
    id: "post-1",
    type: "news",
    title: "지역 어르신 생활지원 제품 전달",
    slug: "local-senior-support",
    excerpt: "청하람과 협력기관이 함께 생활지원 제품을 필요한 어르신에게 전달했습니다.",
    content: "제품 전달은 현장 수요 확인, 제품 구성, 전달 확인 순서로 진행되었습니다.",
    thumbnail_url: "/images/news-delivery.png",
    published_at: "2026-05-14",
  },
  {
    id: "post-2",
    type: "notice",
    title: "기관 납품 상담 절차 안내",
    slug: "business-process",
    excerpt: "기관 납품 문의는 제품 구성, 수량, 납품 일정 확인 후 견적으로 이어집니다.",
    content: "문의 접수 후 담당자가 제품 구성과 납품 조건을 확인해 안내드립니다.",
    thumbnail_url: "/images/news-business-consulting.png",
    published_at: "2026-05-02",
  },
  {
    id: "post-3",
    type: "donation_story",
    title: "후원 제품 구성 기준",
    slug: "donation-product-guide",
    excerpt: "후원 제품은 실제 사용성과 전달 가능성을 기준으로 추천합니다.",
    content: "후원 예산과 대상 기관의 필요를 함께 검토해 제품 구성을 제안합니다.",
    thumbnail_url: "/images/about-consultation.png",
    published_at: "2026-04-24",
  },
];
