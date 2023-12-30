import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import HistoryChart from "./history-chart";
import { BarChart4, CircleDollarSign, Coins } from "lucide-react";

export default function PlantSubsystem() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Subsystem</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-x-5">
        <Card>
          <CardHeader>
            <CardTitle>Plant Revenue</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-3">
            <div className="flex flex-col items-center text-sm">
              <CircleDollarSign color="green" size={50} className="mb-3" />
              <div>Today</div>
              <div>
                RM <span className="text-lg font-bold">3.01</span>
              </div>
            </div>

            <div className="flex flex-col items-center text-sm">
              <Coins color="yellow" size={50} className="mb-3" />
              <div>This Month</div>
              <div>
                RM <span className="text-lg font-bold">73.65</span>
              </div>
            </div>

            <div className="flex flex-col items-center text-sm">
              <BarChart4 color="red" size={50} className="mb-3" />
              <div>Lifetime</div>
              <div>
                RM <span className="text-lg font-bold">798.68</span>
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
              <div className="bg-green-800 p-2">Target Net Zero: 2050</div>

              <div className="bg-red-800 p-2">
                Current contribution to Net Zero: 0.5%
              </div>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
