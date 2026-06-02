import Container from "@/components/Container";

export default function PageHero({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description: string;
  eyebrow?: string;
}) {
  return (
    <section className="border-b border-[#DDE7E7] bg-white">
      <Container className="py-14 md:py-18">
        <div className="max-w-4xl">
          {eyebrow ? <p className="mb-4 text-sm font-black text-[#155F70]">{eyebrow}</p> : null}
          <h1 className="text-4xl font-black leading-tight text-[#243238] md:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#64748B]">{description}</p>
        </div>
      </Container>
    </section>
  );
}
