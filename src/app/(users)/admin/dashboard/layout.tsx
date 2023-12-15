import Header from "../_components/header";

export default async function AdminDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header title="Dashboard" />
      <div className="px-6">{children}</div>
    </div>
  );
}
