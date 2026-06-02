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
    <section className="relative isolate overflow-hidden border-b border-[#D9E7E8] bg-gradient-to-br from-[#EAF7F5] via-[#F8FAFB] to-white">
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
      <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/90 to-white/70 md:to-white/28" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFB]/82 via-transparent to-transparent" aria-hidden />
      <Container className="relative flex min-h-[300px] items-center py-12 md:min-h-[360px] md:py-16 lg:min-h-[400px]">
        <div className="max-w-2xl">
          {eyebrow ? <p className="mb-4 inline-flex rounded-full bg-white/82 px-3 py-1.5 text-sm font-bold tracking-tight text-[#0F6B78] ring-1 ring-[#D9E7E8]/70 backdrop-blur">{eyebrow}</p> : null}
          <h1 className="text-3xl font-black leading-[1.16] text-[#17252A] md:text-4xl lg:text-5xl">{title}</h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[#5B6B73] md:text-lg md:leading-9">{description}</p>
        </div>
      </Container>
    </section>
  );
}
