import Header from "../_components/header";

export default async function SuperAdminAccountsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header title="Accounts" />
      {children}
    </div>
  );
}
