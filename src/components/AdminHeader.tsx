export default function AdminHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="mb-7 rounded-lg border border-[#DDE7E7] bg-white p-6 shadow-sm">
      <p className="mb-2 text-sm font-black text-[#155F70]">청하람 관리자</p>
      <h1 className="text-3xl font-black text-[#243238]">{title}</h1>
      {description ? <p className="mt-3 text-[#64748B]">{description}</p> : null}
    </div>
  );
}
