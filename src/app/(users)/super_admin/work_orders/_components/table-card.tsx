import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import CurrentWOChart from "./current-wo-chart";
import { DataTable } from "./table/data-table";
import { alerts, workOrders } from "@/lib/data";
import { columns } from "./table/columns";

export default function TableCard() {
  return (
    <Card shadow="sm" className="p-5">
      <CardBody>
        <DataTable data={workOrders} columns={columns} />
      </CardBody>
    </Card>
  );
}
