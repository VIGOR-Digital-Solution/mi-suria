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
import {
  BatteryFull,
  BellRing,
  CircleDollarSign,
  ClipboardCheck,
  DatabaseZap,
  FolderCheck,
} from "lucide-react";

export default function CardInfoContainer() {
  return (
    <div className="grid grid-cols-3 space-x-5">
      <CardInfo
        title="Today's Alarms"
        subtitle="Problems triggered"
        value="12"
        unitValue="Alarms"
        className="bg-rose-500 text-white"
        logo={<BellRing size={40} />}
      />
      <CardInfo
        title="Work Order Issued Today"
        subtitle="Problems triggered"
        value="3"
        unitValue="Orders"
        className="bg-violet-600 text-white"
        logo={<ClipboardCheck size={40} />}
      />
      <CardInfo
        title="Work Order Closed Today"
        subtitle="Completed orders"
        value="25"
        unitValue="Orders"
        className="bg-blue-500 text-white"
        logo={<FolderCheck size={40} />}
      />
    </div>
  );
}
