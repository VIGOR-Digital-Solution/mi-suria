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

export default function CardInfo({
  title,
  content,
  descContent,
  descTitle,
  className,
  ...props
}: {
  title: string;
  content: string;
  descTitle?: string;
  descContent?: string;
} & CardProps) {
  return (
    <Card shadow="sm" className={cn("p-5", className)} {...props}>
      <CardHeader>
        <p className="text-sm font-medium text-foreground-400">{title}</p>
      </CardHeader>

      <CardBody></CardBody>

      <CardFooter>
        <div>
          <p className="text-3xl font-bold">{content}</p>

          {!descTitle && !descContent ? null : (
            <div className="flex space-x-2 items-center">
              <p className="text-sm font-medium text-foreground-400">
                {descTitle}
              </p>
              <Chip size="sm" className="h-5 bg-primary-100" radius="sm">
                <p className="font-medium"> {descContent}</p>
              </Chip>
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
