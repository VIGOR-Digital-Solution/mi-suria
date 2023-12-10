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
import CardInfoChart from "./card-info-chart";

export default function CardInfo({
  title,
  value,
  unitValue,
  status,
  diffValue,
  unitDiffValue,
  logo,
  textBackgroundEnabled = false,
  className,
  ...props
}: {
  title: string;
  value: string;
  unitValue: string;
  status: "up" | "down";
  diffValue: string;
  unitDiffValue: string;
  logo: React.ReactNode;
  textBackgroundEnabled?: boolean;
} & CardProps) {
  return (
    <Card shadow="sm" className={cn("p-5", className)} {...props}>
      <CardHeader>
        <div className="w-full flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-1">
              <span
                className={cn("text-3xl font-bold", {
                  "text-background": textBackgroundEnabled,
                })}
              >
                {value}
              </span>
              <span className="self-start text-sm font-medium text-foreground-400">
                {unitValue}
              </span>
              {/* size="sm" className="h-5 bg-primary-100" radius="sm" */}
              <Chip
                startContent={
                  status === "up" ? (
                    <ArrowUp size={12} className="text-success-500" />
                  ) : (
                    <ArrowDown size={12} className="text-danger-500" />
                  )
                }
                color="success"
                size="sm"
                className="h-5 bg-success-50"
                radius="sm"
              >
                <span
                  className={cn("text-sm font-medium", {
                    "text-success-500": status === "up",
                    "text-danger-500": status === "down",
                  })}
                >
                  {diffValue}
                  {unitDiffValue}
                </span>
              </Chip>
            </div>
            <span className="text-sm font-medium text-foreground-400">
              {title}
            </span>
          </div>
          <div>
            {logo}
            {/* <DatabaseZap size={40} className="text-foreground-400" /> */}
          </div>
        </div>
        {/* <p className="text-sm font-medium text-foreground-400">{title}</p> */}
      </CardHeader>

      <CardBody>
        <div className="h-32">
          <CardInfoChart />
        </div>
      </CardBody>

      {/* <CardFooter></CardFooter> */}
    </Card>
  );
}
