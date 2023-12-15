import React from "react";
import CreateUserUi from "./_components/create/create-user-ui";
import UserTable from "./_components/user-table";

export default function AccountsPage() {
  return (
    <div className="space-y-5">
      <CreateUserUi />

      <UserTable />
    </div>
  );
}
