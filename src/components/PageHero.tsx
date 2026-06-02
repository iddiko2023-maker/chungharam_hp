import Container from "@/components/Container";
import Image from "next/image";

export default function PageHero({
  title,
  description,
  eyebrow,
  imageSrc,
  imageAlt,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="border-b border-[#D9E7E8] bg-gradient-to-br from-[#EAF7F5] via-[#F8FAFB] to-white">
      <Container className="py-10 md:py-14">
        <div className="relative overflow-hidden rounded-lg border border-[#D9E7E8] bg-white shadow-[0_18px_45px_rgba(15,107,120,0.10)]">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={imageAlt || title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/88 to-white/25" aria-hidden />
          <div className="relative min-h-[280px] px-6 py-10 md:min-h-[340px] md:px-10 md:py-14 lg:px-12">
            <div className="max-w-3xl">
              {eyebrow ? <p className="mb-4 text-sm font-bold tracking-tight text-[#0F6B78]">{eyebrow}</p> : null}
              <h1 className="text-4xl font-black leading-tight text-[#17252A] md:text-5xl">{title}</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5B6B73]">{description}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
