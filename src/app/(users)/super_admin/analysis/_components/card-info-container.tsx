import { Button } from "@/components/ui/button";
import {
  CardTitle,
  CardDescription,
  CardContent,
  Card,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@radix-ui/react-label";
import React from "react";
import CardInfo from "./card-info";
import { BatteryFull, CircleDollarSign, DatabaseZap } from "lucide-react";

export default function CardInfoContainer() {
  return (
    <div>
      <Tabs defaultValue="today" className="space-y-5">
        <TabsList className="grid grid-cols-4 w-fit">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">Weak to Date</TabsTrigger>
          <TabsTrigger value="month">Month to Date</TabsTrigger>
          <TabsTrigger value="year">Year to Date</TabsTrigger>
        </TabsList>
        <TabsContent value="today">
          <div className="grid grid-cols-3 space-x-5">
            <CardInfo
              title="Total Power"
              value="87.40"
              unitValue="kWh"
              diffValue="2.2"
              unitDiffValue="%"
              status="up"
              logo={<DatabaseZap size={40} className="text-foreground-400" />}
              // className="bg-primary-800"
              // textBackgroundEnabled
            />
            <CardInfo
              title="Total Yield"
              value="17.19"
              unitValue="kWh"
              diffValue="10.2"
              unitDiffValue="%"
              status="down"
              logo={<BatteryFull size={40} className="text-foreground-400" />}
            />
            <CardInfo
              title="Total Revenue"
              value="1.97"
              unitValue="USD"
              diffValue="62"
              unitDiffValue="%"
              status="down"
              logo={
                <CircleDollarSign size={40} className="text-foreground-400" />
              }
            />
          </div>
        </TabsContent>
        <TabsContent value="week">
          <div className="grid grid-cols-3 space-x-5">
            <CardInfo
              title="Total Yield"
              value="17.19"
              unitValue="kWh"
              diffValue="10.2"
              unitDiffValue="%"
              status="down"
              logo={<BatteryFull size={40} className="text-foreground-400" />}
            />
          </div>
        </TabsContent>
        <TabsContent value="month">
          <div className="grid grid-cols-3 space-x-5">
            <CardInfo
              title="Total Yield"
              value="17.19"
              unitValue="kWh"
              diffValue="10.2"
              unitDiffValue="%"
              status="down"
              logo={<BatteryFull size={40} className="text-foreground-400" />}
            />
          </div>
        </TabsContent>
        <TabsContent value="year">
          <div className="grid grid-cols-3 space-x-5">
            <CardInfo
              title="Total Yield"
              value="17.19"
              unitValue="kWh"
              diffValue="10.2"
              unitDiffValue="%"
              status="down"
              logo={<BatteryFull size={40} className="text-foreground-400" />}
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
