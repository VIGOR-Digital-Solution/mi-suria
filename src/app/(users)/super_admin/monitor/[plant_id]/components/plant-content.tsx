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

export default function PlantContent() {
  return (
    <div className="grid grid-cols-4 gap-3">
      <div className="col-span-1">
        <PlantLocation />
      </div>

      <div className="col-span-2">
        <PlantProduction />
      </div>

      <div className="col-span-1">
        <PlantWeather />
      </div>

      <div className="col-span-4">
        <PlantHistory />
      </div>
    </div>
  );
}
