import { plants } from "@/lib/data";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import React from "react";
import PlantContent from "./components/plant-content";

export default function page({ params }: { params: { plant_id: string } }) {
  const { plant_id } = params;

  const plant = plants.find((plant) => plant.id === plant_id);

  if (!plant) {
    return <div>Please select correct plant</div>;
  }

  return (
    <div>
      <div className="mb-5">
        <h1 className="text-xl font-bold">{plant?.name}</h1>
        <div className="flex items-center space-x-2">
          <CheckCircledIcon color="green" />
          <span className="text-sm font-light">No alerts</span>
        </div>
      </div>

      <PlantContent />
    </div>
  );
}
