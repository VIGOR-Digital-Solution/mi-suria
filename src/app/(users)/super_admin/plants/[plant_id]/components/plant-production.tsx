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
        <div className="sm:grid sm:grid-cols-2">
          <div>
            <ProductionChart />
          </div>

          <div className="grid grid-cols-3 sm:space-y-4 sm:grid-cols-none">
            <div>
              <div className="text-foreground-500">Production</div>
              <div className="font-medium text-lg">
                979.1{" "}
                <span className="font-normal text-base text-foreground-500">
                  w
                </span>
              </div>
            </div>

            <div className="sm:hidden flex justify-center">
              <Separator orientation="vertical" />
            </div>

            <div className="hidden sm:flex justify-center">
              <Separator orientation="horizontal" />
            </div>

            <div>
              <div className="text-foreground-500">Capacity</div>
              <div className="font-medium text-lg">
                20{" "}
                <span className="font-normal text-base text-foreground-500">
                  kWp
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 text-xs gap-2">
          <div className="bg-primary-50 p-2 h-full rounded-sm">
            <div className="text-foreground-500 truncate">Daily Production</div>
            <div className="flex space-x-2 items-baseline">
              <div className="font-medium text-lg">38.2</div>
              <div className="font-normal text-foreground-500">kWh</div>
            </div>
          </div>

          <div className="bg-primary-50 p-2 h-full rounded-sm">
            <div className="text-foreground-500  truncate">
              Monthly Production
            </div>
            <div className="flex space-x-2 items-baseline">
              <div className="font-medium text-lg">38</div>
              <div className="font-normal  text-foreground-500 ">kWh</div>
            </div>
          </div>

          <div className="bg-primary-50 p-2 h-full rounded-sm">
            <div className="text-foreground-500  truncate">
              Yearly Production
            </div>
            <div className="flex space-x-2 items-baseline">
              <div className="font-medium text-lg">38</div>
              <div className="font-normal  text-foreground-500 ">kWh</div>
            </div>
          </div>

          <div className="bg-primary-50 p-2 h-full rounded-sm">
            <div className="text-foreground-500  truncate">
              Total Production
            </div>
            <div className="flex space-x-2 items-baseline">
              <div className="font-medium text-lg">992.8</div>
              <div className="font-normal  text-foreground-500 ">kWh</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
