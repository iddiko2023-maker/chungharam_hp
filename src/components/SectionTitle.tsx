export default function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm font-bold tracking-tight text-[#0F6B78]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black leading-tight text-[#17252A] md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-[#5B6B73] md:text-xl md:leading-9">{description}</p> : null}
    </div>
  );
}
