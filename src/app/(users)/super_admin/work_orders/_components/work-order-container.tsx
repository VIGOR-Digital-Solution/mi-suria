import React from "react";
import WorkOrderCard from "./work-order-card";
import CurrentWOChart from "./current-wo-chart";
import SummaryWOChart from "./summary-wo-chart";

export default function WorkOrderContainer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="col-span-1">
        <WorkOrderCard
          title="Current Work Orders"
          subtitle="Subtitle current work orders"
        >
          <CurrentWOChart openValue={12} closedValue={5} inprogressValue={3} />
        </WorkOrderCard>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <WorkOrderCard
          title="Month-End Summary"
          subtitle="Subtitle month-end summary"
        >
          <SummaryWOChart />
        </WorkOrderCard>
      </div>
    </div>
  );
}
