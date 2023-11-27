import React from "react";
import UserTable from "./components/user-table";
import CreateUserUi from "./components/create/create-user-ui";

export default async function UserManagementPage() {
  return (
    <div className="space-y-5 w-full overflow-y-auto px-3">
      <h1 className="text-3xl font-bold">Accounts</h1>
      <div className="flex gap-2">
        {/* <SearchMembers /> */}
        <CreateUserUi />
      </div>
      <UserTable />
    </div>
  );
}
