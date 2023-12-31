import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import HistoryChart from "./history-chart";
import { Separator } from "@/components/ui/separator";

export default function PlantHistory() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>History</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-around">
          <div>
            <div className="text-gray-400">Daily Production</div>
            <div className="font-medium text-lg">
              38.2{" "}
              <span className="font-normal text-base text-gray-500">kWh</span>
            </div>
          </div>

          <Separator className="sm:hidden" />

          <div>
            <div className="text-gray-400">Daily Irradiation</div>
            <div className="font-medium text-lg">--</div>
          </div>

          <Separator className="sm:hidden" />

          <div>
            <div className="text-gray-400">Peak Hours Today</div>
            <div className="font-medium text-lg">
              1.91{" "}
              <span className="font-normal text-base text-gray-500">h</span>
            </div>
          </div>

          <Separator className="sm:hidden" />
        </div>

        <div className="h-52">
          <HistoryChart />
        </div>
      </CardContent>
    </Card>
  );
}
