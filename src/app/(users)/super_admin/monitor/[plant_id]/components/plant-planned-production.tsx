import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import HistoryChart from "./history-chart";
import { BarChart4, CircleDollarSign, Coins } from "lucide-react";
import PlannedProductionChart from "./planned-production-chart";

export default function PlantPlannedProduction() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Planned Production</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-52">
          <PlannedProductionChart />
        </div>
      </CardContent>
    </Card>
  );
}
