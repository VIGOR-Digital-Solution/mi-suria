import React from "react";
import WorkOrderCard from "./work-order-card";
import CurrentWOChart from "./current-wo-chart";
import SummaryWOChart from "./summary-wo-chart";

export default function WorkOrderContainer() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <div className="col-span-1">
        <WorkOrderCard title="Current Work Orders" subtitle="">
          <CurrentWOChart openValue={0} closedValue={0} inprogressValue={0} />
        </WorkOrderCard>
      </div>
      <div className="col-span-1 lg:col-span-2">
        <WorkOrderCard title="Month-End Summary" subtitle="">
          <SummaryWOChart />
        </WorkOrderCard>
      </div>
    </div>
  );
}
