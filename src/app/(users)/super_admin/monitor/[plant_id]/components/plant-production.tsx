import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import ProductionChart from "./production-chart";

export default function PlantProduction() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Production</CardTitle>
      </CardHeader>
      <CardContent className="space-y-10">
        <div className="grid grid-cols-2">
          <div>
            <ProductionChart />
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-gray-400">Production</div>
              <div className="font-medium text-lg">
                979.1{" "}
                <span className="font-normal text-base text-gray-500">w</span>
              </div>
            </div>

            <Separator />

            <div>
              <div className="text-gray-400">Capacity</div>
              <div className="font-medium text-lg">
                20{" "}
                <span className="font-normal text-base text-gray-500">kWp</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 text-xs space-x-2">
          <div className="bg-slate-900 p-2 h-full rounded-sm">
            <div className="text-gray-400 truncate">Daily Production</div>
            <div className="flex space-x-2 items-baseline">
              <div className="font-medium text-lg">38.2</div>
              <div className="font-normal  text-gray-500">kWh</div>
            </div>
          </div>

          <div className="bg-slate-900 p-2 h-full rounded-sm">
            <div className="text-gray-400 truncate">Monthly Production</div>
            <div className="flex space-x-2 items-baseline">
              <div className="font-medium text-lg">38</div>
              <div className="font-normal  text-gray-500">kWh</div>
            </div>
          </div>

          <div className="bg-slate-900 p-2 h-full rounded-sm">
            <div className="text-gray-400 truncate">Yearly Production</div>
            <div className="flex space-x-2 items-baseline">
              <div className="font-medium text-lg">38</div>
              <div className="font-normal  text-gray-500">kWh</div>
            </div>
          </div>

          <div className="bg-slate-900 p-2 h-full rounded-sm">
            <div className="text-gray-400 truncate">Total Production</div>
            <div className="flex space-x-2 items-baseline">
              <div className="font-medium text-lg">992.8</div>
              <div className="font-normal  text-gray-500">kWh</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
