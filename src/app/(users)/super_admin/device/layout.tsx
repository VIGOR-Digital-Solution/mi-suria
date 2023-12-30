import Header from "../_components/header";

export default async function SuperAdminDevicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header title="Devices" />
      {children}
    </div>
  );
}
