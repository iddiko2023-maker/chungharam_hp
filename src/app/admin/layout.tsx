import AdminSidebar from "@/components/AdminSidebar";
import Container from "@/components/Container";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="grid gap-6 py-8 lg:grid-cols-[272px_1fr]">
      <AdminSidebar />
      <section>{children}</section>
    </Container>
  );
}
