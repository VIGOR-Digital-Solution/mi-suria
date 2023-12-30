import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import HistoryChart from "./history-chart";
import {
  BadgeJapaneseYen,
  BarChart4,
  CalendarRange,
  CircleDollarSign,
  Cloud,
  Coins,
  EggFried,
  Router,
  Trees,
} from "lucide-react";
import InverterRankingsTable from "./inverter-rankings-table";
import colors from "tailwindcss/colors";

export default function PlantSystemSummary() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>System Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2">
        <div className="font-light flex items-baseline space-x-3">
          <Router size={20} />
          <div>
            <div>
              Inverter <span className="text-xl font-bold">2</span>
            </div>
            <div className="flex space-x-3">
              <div>
                <span className="text-xl font-bold">2</span> Offline
              </div>
              <div>
                <span className="text-xl font-bold">0</span> Alerts
              </div>
            </div>
          </div>
        </div>

        <div className="font-light flex items-baseline space-x-3">
          <CalendarRange size={20} />
          <div>
            <div>
              Inverter <span className="text-xl font-bold">2</span>
            </div>
            <div className="flex space-x-3">
              <div>
                <span className="text-xl font-bold">2</span> Offline
              </div>
              <div>
                <span className="text-xl font-bold">0</span> Alerts
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
