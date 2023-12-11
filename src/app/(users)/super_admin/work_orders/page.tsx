import React from "react";
import WorkOrderContainer from "./_components/work-order-container";
import TableCard from "./_components/table-card";

export default function WorkOrdersPage() {
  return (
    <div className="p-5 space-y-5">
      <WorkOrderContainer />
      <TableCard />
    </div>
  );
}
