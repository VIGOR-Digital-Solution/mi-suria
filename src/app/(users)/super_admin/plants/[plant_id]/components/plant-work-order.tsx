import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import HistoryChart from "./history-chart";
import { BarChart4, CircleDollarSign, Coins } from "lucide-react";
import InverterRankingsTable from "./inverter-rankings-table";

export default function PlantWorkOrder() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle>Work Order</CardTitle>
      </CardHeader>
      <CardContent className="text-xs flex items-center justify-around grow">
        <div className="space-y-2 flex flex-col items-center">
          <div className="text-2xl text-primary-500 font-bold">0</div>
          <div>Executing</div>
        </div>

        <div className="space-y-2 flex flex-col items-center">
          <div className="text-2xl text-success-500 font-bold">0</div>
          <div>Finished</div>
        </div>
      </CardContent>
    </Card>
  );
}
