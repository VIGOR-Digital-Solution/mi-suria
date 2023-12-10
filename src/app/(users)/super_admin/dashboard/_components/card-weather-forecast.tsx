import React, { Fragment } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { Cloudy, Droplets, Sun, TreePine, Wind } from "lucide-react";
import Carousel from "./carousel";

const weathers = [
  {
    degree: 31,
    unitDegree: "C",
    location: "Kuala Lumpur",
    icon: <Sun size={100} />,
    components: [
      {
        name: "humidity",
        value: 1.3,
        unitValue: "MM",
        icon: <Droplets />,
      },
      {
        name: "wind",
        value: 10,
        unitValue: "MPH",
        icon: <Wind />,
      },
    ],
  },
  {
    degree: 28,
    unitDegree: "C",
    location: "Tapah",
    icon: <Cloudy size={100} />,
    components: [
      {
        name: "humidity",
        value: 1.5,
        unitValue: "MM",
        icon: <Droplets />,
      },
      {
        name: "wind",
        value: 10,
        unitValue: "MPH",
        icon: <Wind />,
      },
    ],
  },
];

const CardItem = ({
  data,
  enableDivider = false,
}: {
  data: any;
  enableDivider?: boolean;
}) => {
  return (
    <div className="">
      <div className="grid grid-cols-2">
        <div className="col-span-1 flex items-center justify-center bg-gray-800">
          <div className="flex flex-col items-center space-y-5 text-white">
            <p className="text-7xl">
              {data.degree}&#176;{data.unitDegree}
            </p>
            <p className="text-3xl uppercase">{data.location}</p>
          </div>
        </div>
        <div className="col-span-1">
          <div className="p-10 flex items-center justify-center bg-gray-100">
            <p className="text-black">{data.icon}</p>
          </div>
          <div className="flex justify-around bg-foreground-500">
            {data.components.map((component: any) => (
              <div className="flex items-center space-x-2 text-white">
                <p>{component.icon}</p>
                <div className="flex flex-col items-center">
                  <p>{component.value}</p>
                  <p className="uppercase">{component.unitValue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CardWeatherForecast() {
  return (
    <Card shadow="sm" className="h-full">
      <CardHeader>
        <div>
          <p className="font-semibold">Weather Forecast</p>
          <p className="text-sm font-medium text-foreground-400">
            Today Weather
          </p>
        </div>
      </CardHeader>

      <CardBody>
        <div className="p-5">
          <Carousel>
            {weathers.map((weather, index) => (
              <CardItem key={index} data={weather} />
            ))}
          </Carousel>
        </div>
      </CardBody>
    </Card>
  );
}
