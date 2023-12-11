import React from "react";
import { DataTable } from "./components/data-table";
import { plants } from "@/lib/data";
import { promises as fs } from "fs";
import path from "path";
import { z } from "zod";
import { columns } from "./components/columns";
import { taskSchema } from "./data/schema";

// Simulate a database read for tasks.
async function getTasks() {
  const data = await fs.readFile(
    path.join(
      process.cwd(),
      "src/app/(users)/super_admin/monitor/data/tasks.json"
    )
  );

  const tasks = JSON.parse(data.toString());

  return z.array(taskSchema).parse(tasks);
}

export default async function MonitorPage() {
  const tasks = await getTasks();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-5">Plants</h1>
      <DataTable data={plants} columns={columns} />
    </div>
  );
}
