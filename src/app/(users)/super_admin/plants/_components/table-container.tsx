"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { DataTable } from "./table/data-table";
import { plants } from "@/lib/data";
import { columns } from "./table/columns";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function fetchPlantsData() {
  return axios.get(`/api/tsdb/plants_data`);
}

export default function TableContainer() {
  const { data: plantsData, isLoading: isLoadingPlantsData } = useQuery({
    queryKey: ["plants_data"],
    queryFn: fetchPlantsData,
  });
  // const plants: IPlant[] = [
  //   {
  //     id: "plant-1",
  //     name: "Plant 1",
  //     isAlert: false,
  //     capacity: 20,
  //     production: 0.97,
  //     power: 4.89,
  //     trend: "UP",
  //     dailyProduction: 38.2,
  //     peakHoursToday: 1.91,
  //   },
  //   {
  //     id: "plant2",
  //     name: "Suria-Energy",
  //     isAlert: false,
  //     capacity: 25,
  //     production: 0.81,
  //     power: 4.04,
  //     trend: "UP",
  //     dailyProduction: 40.0,
  //     peakHoursToday: 1.5,
  //   },
  // ];

  if (isLoadingPlantsData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Tabs defaultValue="commercial" className="space-y-5">
        <TabsList className="grid grid-cols-1 w-fit">
          <TabsTrigger value="commercial" className="truncate justify-start">
            Commercial & Residential
          </TabsTrigger>
          {/* <TabsTrigger value="utility">Utility</TabsTrigger> */}
        </TabsList>
        <TabsContent value="commercial">
          <DataTable data={plantsData?.data} columns={columns} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
