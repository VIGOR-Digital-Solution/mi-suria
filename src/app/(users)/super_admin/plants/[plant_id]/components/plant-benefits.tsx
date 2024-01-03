import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import HistoryChart from "./history-chart";
import {
  BadgeJapaneseYen,
  BarChart4,
  CircleDollarSign,
  Cloud,
  Coins,
  EggFried,
  Trees,
} from "lucide-react";
import InverterRankingsTable from "./inverter-rankings-table";
import colors from "tailwindcss/colors";

export default function PlantBenefits() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Environmental & Economic Benefits</CardTitle>
      </CardHeader>
      <CardContent className="text-gray-400 space-y-3 2xl:space-y-0 2xl:gap-y-4 2xl:grid 2xl:grid-cols-2">
        <div className="flex items-center space-x-5">
          <EggFried size={30} className="text-primary-500" />
          <div>
            <div>Standard Coal Saved</div>
            <div className="text-foreground-600 text-xl font-bold">
              0.3 <span className="text-base font-normal">t</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <Cloud size={30} className="text-primary-500" />
          <div>
            <div>
              CO<sub>2</sub> Emission Reduction
            </div>
            <div className="text-foreground-600 text-xl font-bold">
              0.78 <span className="text-base font-normal">t</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <Trees size={30} className="text-primary-500" />
          <div>
            <div>Tress Planted</div>
            <div className="text-foreground-600 text-xl font-bold">
              54.08 <span className="text-base font-normal">Trees</span>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <BadgeJapaneseYen size={30} className="text-primary-500" />
          <div>
            <div>Total Yields</div>
            <div className="text-foreground-600 text-xl font-bold">--</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}