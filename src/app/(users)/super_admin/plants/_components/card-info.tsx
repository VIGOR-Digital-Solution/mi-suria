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
  CheckCircle2,
  ChevronUp,
  DatabaseZap,
  LucideIcon,
  MinusCircle,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import CardInfoChart from "./card-info-chart";
import CardInfoLegend from "./card-info-legend";

export default function CardInfo({
  title,
  activeValue,
  faultValue,
  inactiveValue,
  className,
  ...props
}: {
  title: string;
  activeValue: string;
  faultValue: string;
  inactiveValue: string;
} & CardProps) {
  return (
    <Card shadow="sm" className={cn("", className)} {...props}>
      <CardHeader>
        <div className="w-full flex">
          <span className="font-semibold">{title}</span>
        </div>
      </CardHeader>

      <CardBody>
        <div className="grid xl:grid-cols-2">
          <div className="h-64">
            <CardInfoChart
              activeValue={Number(activeValue)}
              faultValue={Number(faultValue)}
              inactiveValue={Number(inactiveValue)}
            />
          </div>

          <div className="space-y-2">
            <CardInfoLegend
              title="Active"
              value={Number(activeValue)}
              color="success"
              logo={<CheckCircle2 className="text-success-500" />}
            />
            <CardInfoLegend
              title="Fault"
              value={Number(faultValue)}
              color="danger"
              logo={<XCircle className="text-danger-500" />}
            />
            <CardInfoLegend
              title="Inactive"
              value={Number(inactiveValue)}
              color="default"
              logo={<MinusCircle className="text-default-500" />}
            />
          </div>
        </div>
      </CardBody>

      {/* <CardFooter></CardFooter> */}
    </Card>
  );
}
