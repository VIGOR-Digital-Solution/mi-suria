import Header from "../_components/header";

export default async function UserDashboardLayout({
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
