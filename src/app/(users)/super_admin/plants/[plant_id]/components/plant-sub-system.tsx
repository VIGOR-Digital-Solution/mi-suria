import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import HistoryChart from "./history-chart";
import { BarChart4, CircleDollarSign, Coins } from "lucide-react";

export default function PlantSubsystem({ data }: { data: any[] }) {
  function getDailyPowerYield() {
    let dailyPowerYield = data?.[0].dpy;
    return Number(dailyPowerYield / 10);
  }

  function getMonthlyPowerYield() {
    let monthlyPowerYield = data?.[0].mpy;
    return Number(monthlyPowerYield / 10);
  }

  function getTotalPowerYield() {
    let totalPowerYield = data?.[0].tpy;
    return Number(totalPowerYield / 10);
  }

  function getDailyRevenue() {
    let dailyPowerYield = getDailyPowerYield();
    let tariff = 0.57; // static value refer to tariff given by mimos
    let dailyRevenue = Math.floor(dailyPowerYield * tariff * 100) / 100;
    return dailyRevenue;
  }

  function getMonthlyRevenue() {
    let monthlyPowerYield = getMonthlyPowerYield();
    let tariff = 0.57; // static value refer to tariff given by mimos
    let monthlyRevenue = Math.floor(monthlyPowerYield * tariff * 100) / 100;
    return monthlyRevenue;
  }

  function getTotalRevenue() {
    let totalPowerYield = getTotalPowerYield();
    let tariff = 0.57; // static value refer to tariff given by mimos
    let totalRevenue = Math.floor(totalPowerYield * tariff * 100) / 100;
    return totalRevenue;
  }
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Subsystem</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-5">
        <Card>
          <CardHeader>
            <CardTitle>Plant Revenue</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-3">
            <div className="flex flex-col items-center text-sm">
              <CircleDollarSign size={50} className="mb-3 text-success-400" />
              <div>Today</div>
              <div>
                RM{" "}
                <span className="text-lg font-bold">
                  {getDailyRevenue() == undefined ? "-" : getDailyRevenue()}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center text-sm">
              <Coins size={50} className="mb-3 text-warning-400" />
              <div>This Month</div>
              <div>
                RM{" "}
                <span className="text-lg font-bold">
                  {getMonthlyRevenue() == undefined ? "-" : getMonthlyRevenue()}
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center text-sm">
              <BarChart4 size={50} className="mb-3 text-danger-400" />
              <div>Lifetime</div>
              <div>
                RM{" "}
                <span className="text-lg font-bold">
                  {getTotalRevenue() == undefined ? "-" : getTotalRevenue()}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Carbon Footprint</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="bg-success-400 p-2">Target Net Zero: 2050</div>

              <div className="bg-danger-400 p-2">
                {/* Current contribution to Net Zero: 0.5% */}
                Current contribution to Net Zero: N/A
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
