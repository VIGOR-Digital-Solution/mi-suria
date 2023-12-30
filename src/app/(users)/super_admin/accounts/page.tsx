import React from "react";
import UserTable from "./components/user-table";
import CreateUserUi from "./components/create/create-user-ui";

export default async function AccountsPage() {
  return (
    <div className="px-6 space-y-5 w-full overflow-y-auto">
      <div className="flex gap-2">
        {/* <SearchMembers /> */}
        <CreateUserUi />
      </div>
      <UserTable />
    </div>
  );
}
