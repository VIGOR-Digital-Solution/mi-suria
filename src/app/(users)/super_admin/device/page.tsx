import React from "react";
import { DataTable } from "./components/data-table";
import { devices } from "@/lib/data";
import { columns } from "./components/columns";

export default function DevicePage() {
  return (
    <div className="p-6">
      <h1 className=" text-3xl font-bold mb-5">Devices</h1>

      <DataTable columns={columns} data={devices} />
    </div>
  );
}
