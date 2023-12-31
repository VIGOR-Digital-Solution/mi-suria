import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { CloudDrizzle, Sunrise, Sunset, Wind } from "lucide-react";
import PlantProduction from "./plant-production";
import PlantLocation from "./plant-location";
import PlantWeather from "./plant-weather";
import PlantHistory from "./plant-history";
import PlantSubsystem from "./plant-sub-system";
import PlantInverterRankings from "./plant-inverter-rankings";
import PlantPlannedProduction from "./plant-planned-production";
import PlantWorkOrder from "./plant-work-order";
import PlantBenefits from "./plant-benefits";
import PlantSystemSummary from "./plant-system-summary";

export default function PlantContent() {
  return (
    <div className="space-y-3 lg:space-y-0 lg:grid lg:grid-cols-3 2xl:grid-cols-4 gap-3">
      <div className="col-span-1">
        <PlantLocation />
      </div>

      <div className="col-span-2">
        <PlantProduction />
      </div>

      <div className="lg:col-span-3 2xl:col-span-1">
        <PlantWeather />
      </div>

      <div className="col-span-4">
        <PlantHistory />
      </div>

      <div className="col-span-4">
        <PlantSubsystem />
      </div>

      <div className="col-span-2">
        <PlantInverterRankings />
      </div>

      <div className="col-span-2">
        <PlantPlannedProduction />
      </div>

      <div className="col-span-2">
        <PlantWorkOrder />
      </div>

      <div className="col-span-2">
        <PlantBenefits />
      </div>

      <div className="col-span-4">
        <PlantSystemSummary />
      </div>
    </div>
  );
}
