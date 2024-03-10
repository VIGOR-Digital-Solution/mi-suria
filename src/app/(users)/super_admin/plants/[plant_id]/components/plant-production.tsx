import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import React from "react";
import ProductionChart from "./production-chart";

function SideCard({
  title,
  value,
  unit,
}: {
  title: string;
  value: string;
  unit: string;
}) {
  return (
    <div>
      <div className="text-foreground-500">{title}</div>
      <div className="font-medium text-lg">
        {value}{" "}
        <span className="font-normal text-base text-foreground-500">
          {unit}
        </span>
      </div>
    </div>
  );
}

export default function PlantProduction({ data }: { data: any[] }) {
  function getPowerYield(field: "dpy" | "mpy" | "tpy") {
    let powerYield = data?.[0][field] / 10;
    return powerYield;
  }

  function getProduction() {
    let production = data?.[0].tap;
    return Math.floor((Number(production) / 1000) * 100) / 100;
  }

  function getCapacity() {
    let capacity = 3.3;
    return capacity;
  }

  function getPower() {
    let production = getProduction();
    let capacity = getCapacity();
    return capacity / production;
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Production</CardTitle>
      </CardHeader>
      <CardContent className="space-y-10">
        <div className="sm:grid sm:grid-cols-2">
          <div>
            <ProductionChart value={getPower()} />
          </div>

          <div className="grid grid-cols-3 sm:space-y-4 sm:grid-cols-none">
            <SideCard
              title="Production"
              value={
                getProduction() == undefined ? "N/A" : `${getProduction()}`
              }
              unit={`${getProduction() == undefined ? "" : "kW"}`}
            />

            <div className="sm:hidden flex justify-center">
              <Separator orientation="vertical" />
            </div>

            <div className="hidden sm:flex justify-center">
              <Separator orientation="horizontal" />
            </div>

            <SideCard
              title="Production"
              value={getCapacity() == undefined ? "N/A" : `${getCapacity()}`}
              unit={`${getCapacity() == undefined ? "" : "kWp"}`}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 text-xs gap-2">
          <div className="bg-primary-50 p-2 h-full rounded-sm">
            <div className="text-foreground-500 truncate">Daily Production</div>
            <div className="flex space-x-2 items-baseline">
              <div className="font-medium text-lg">{getPowerYield("dpy")}</div>
              <div className="font-normal text-foreground-500">kWh</div>
            </div>
          </div>

          <div className="bg-primary-50 p-2 h-full rounded-sm">
            <div className="text-foreground-500  truncate">
              Monthly Production
            </div>
            <div className="flex space-x-2 items-baseline">
              <div className="font-medium text-lg">{getPowerYield("mpy")}</div>
              <div className="font-normal  text-foreground-500 ">kWh</div>
            </div>
          </div>

          <div className="bg-primary-50 p-2 h-full rounded-sm">
            <div className="text-foreground-500  truncate">
              Yearly Production
            </div>
            <div className="flex space-x-2 items-baseline">
              <div className="font-medium text-lg">{getPowerYield("tpy")}</div>
              <div className="font-normal  text-foreground-500 ">kWh</div>
            </div>
          </div>

          {/* <div className="bg-primary-50 p-2 h-full rounded-sm">
            <div className="text-foreground-500  truncate">
              Total Production
            </div>
            <div className="flex space-x-2 items-baseline">
              <div className="font-medium text-lg">992.8</div>
              <div className="font-normal  text-foreground-500 ">kWh</div>
            </div>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
}
