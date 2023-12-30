import React from "react";
import { DataTable } from "./components/data-table";
import { devices } from "@/lib/data";
import { columns } from "./components/columns";

export default function DevicePage() {
  return (
    <div className="px-6">
      <DataTable columns={columns} data={devices} />
    </div>
  );
}
