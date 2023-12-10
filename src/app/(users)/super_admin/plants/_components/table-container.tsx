import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { DataTable } from "./table/data-table";
import { plants } from "@/lib/data";
import { columns } from "./table/columns";

export default function TableContainer() {
  return (
    <div>
      <Tabs defaultValue="commercial" className="space-y-5">
        <TabsList className="grid grid-cols-2 w-fit">
          <TabsTrigger value="commercial">Commercial & Residential</TabsTrigger>
          <TabsTrigger value="utility">Utility</TabsTrigger>
        </TabsList>
        <TabsContent value="commercial">
          <DataTable data={plants} columns={columns} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
