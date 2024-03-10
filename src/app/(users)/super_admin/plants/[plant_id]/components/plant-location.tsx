import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import Image from "next/image";

export default function PlantLocation() {
  return (
    <Card className="h-full">
      <CardHeader className="relative h-40 mb-2">
        <Image src={"/plant.jpg"} alt="plant image" fill objectFit="cover" />
      </CardHeader>
      <CardContent className="px-3 space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div>Address</div>
          <div className="truncate max-w-[20rem]">Kuala Lumpur, Selangor</div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div>Plant Type</div>
          <div>Commercial</div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div>System Type</div>
          <div>PV + Grid</div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div>Phone</div>
          <div>-</div>
        </div>
      </CardContent>
    </Card>
  );
}
