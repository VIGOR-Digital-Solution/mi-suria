import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CloudDrizzle, Sunrise, Sunset, Wind } from "lucide-react";
import React from "react";
import WeatherChart from "./weather-chart";

export default function PlantWeather() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center">
          <div className="flex-auto">
            <div className="text-xl font-bold mb-2">33&#8451;</div>
            <div className="text-sm">24&#8451; / 33&#8451; Heavy rain</div>
            <div className="text-sm flex space-x-2">
              <div className="flex items-center">
                <Wind size={"15px"} /> 2.1m/s
              </div>
              <div className="flex items-center">
                <Sunrise size={"15px"} /> 06:57
              </div>
              <div className="flex items-center">
                <Sunset size={"15px"} /> 18:56
              </div>
            </div>
          </div>
          <div className="space-y-1 flex-none text-xs">
            <div>
              <CloudDrizzle />
            </div>
            <div> WED</div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-20">
          <WeatherChart />
        </div>
      </CardContent>
      <CardFooter className="gap-x-3 text-xs grid grid-cols-4 font-light">
        <div className="space-y-2 flex flex-col items-center">
          <div>23&#8451;</div>
          <CloudDrizzle />
          <div>THU</div>
          <div>30/11</div>
        </div>
        <div className="space-y-2 flex flex-col items-center">
          <div>23&#8451;</div>
          <CloudDrizzle />
          <div>FRI</div>
          <div>1/12</div>
        </div>
        <div className="space-y-2 flex flex-col items-center">
          <div>23&#8451;</div>
          <CloudDrizzle />
          <div>SAT</div>
          <div>2/12</div>
        </div>
        <div className="space-y-2 flex flex-col items-center">
          <div>23&#8451;</div>
          <CloudDrizzle />
          <div>SUN</div>
          <div>3/12</div>
        </div>
      </CardFooter>
    </Card>
  );
}
