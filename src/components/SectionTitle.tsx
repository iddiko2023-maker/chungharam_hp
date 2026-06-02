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
      {eyebrow ? <p className="mb-3 text-sm font-black text-[#2D8C8C]">{eyebrow}</p> : null}
      <h2 className="text-3xl font-black leading-tight text-[#333333] md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-lg leading-8 text-[#6B7280] md:text-xl md:leading-9">{description}</p> : null}
    </div>
  );
}
