import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Chip,
  CardProps,
} from "@nextui-org/react";
import { cn } from "@/lib/utils";
import {
  ArrowDown,
  ArrowUp,
  ChevronUp,
  DatabaseZap,
  LucideIcon,
} from "lucide-react";
import { DataTable } from "./table/data-table";
import { columns } from "./table/columns";
import { alerts } from "@/lib/data";

export default function TableCard() {
  return (
    <Card shadow="sm" className="p-5">
      <CardHeader>
        <div className="w-full">
          <p className="font-semibold">Alarm List</p>
          {/* <p className="text-sm font-medium text-foreground-400">
            Subtitle alarm list
          </p> */}
        </div>
      </CardHeader>

      <CardBody>
        <DataTable data={alerts} columns={columns} />
      </CardBody>

      <CardFooter></CardFooter>
    </Card>
  );
}
