const labels: Record<string, string> = {
  new: "신규",
  checking: "확인중",
  completed: "완료",
  active: "노출",
  published: "발행",
  draft: "임시저장",
};

export default function StatusBadge({ status }: { status?: string | null }) {
  const value = status || "new";
  return <span className="rounded-md bg-[#eefafa] px-3 py-1 text-sm font-bold text-[#2D8C8C]">{labels[value] ?? value}</span>;
}
