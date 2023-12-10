import React, { Fragment } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Chip,
} from "@nextui-org/react";
import { cn } from "@/lib/utils";

const plants = [
  {
    name: "Plant A",
    location: "Kajang, Selangor",
    status: "Running",
    value: 2.05,
    unitValue: "KW",
  },
  {
    name: "Plant B",
    location: "Seremban, N.Sembilan",
    status: "Running",
    value: 5.25,
    unitValue: "KW",
  },
  {
    name: "Plant C",
    location: "Taiping, Perak",
    status: "Offline",
    value: 2.05,
    unitValue: "KW",
  },
  {
    name: "Plant D",
    location: "Bukit Jalil, Kuala Lumpur",
    status: "Running",
    value: 2.05,
    unitValue: "KW",
  },
  {
    name: "Plant E",
    location: "Kuantan, Pahang",
    status: "Running",
    value: 2.05,
    unitValue: "KW",
  },
  {
    name: "Plant F",
    location: "Kemaman, Terengganu",
    status: "Offline",
    value: 2.05,
    unitValue: "KW",
  },
];

const CardItem = ({
  data,
  enableDivider,
}: {
  data: any;
  enableDivider: boolean;
}) => {
  return (
    <div className="grid grid-cols-5 gap-2 pt-2 items-center">
      <div className="col-span-3">
        <p className="font-semibold text-sm">{data.name}</p>
        <p className="text-sm font-medium text-foreground-400">
          {data.location}
        </p>
      </div>
      <div className="col-span-1">
        <Chip
          className={cn({
            "bg-success-50": data.status === "Running",
            "bg-danger-50": data.status === "Offline",
          })}
          radius="sm"
        >
          <p
            className={cn("text-sm font-semibold", {
              "text-success-500": data.status === "Running",
              "text-danger-500": data.status === "Offline",
            })}
          >
            {data.status}
          </p>
        </Chip>
      </div>
      <div className="col-span-1 flex justify-end">
        <p className="font-semibold">
          {data.value} {data.unitValue}
        </p>
      </div>

      <div className="col-span-5">{enableDivider ? <Divider /> : null}</div>
    </div>
  );
};

export default function CardWatchList() {
  return (
    <Card shadow="sm" className="h-full max-h-[500px] p-5">
      <CardHeader>
        <div className="flex items-center justify-between w-full">
          <div>
            <p className="font-semibold">Watch List</p>
            <p className="text-sm font-medium text-foreground-400">
              List of the plants
            </p>
          </div>
          <Link size="sm" href="#">
            All List
          </Link>
        </div>
      </CardHeader>

      <CardBody>
        {plants.map((plant, index) => (
          <CardItem
            key={index}
            data={plant}
            enableDivider={index + 1 === plants.length ? false : true}
          />
        ))}
      </CardBody>
    </Card>
  );
}
