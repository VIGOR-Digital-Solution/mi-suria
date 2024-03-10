"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import HistoryChart from "./history-chart";
import { BarChart4, CircleDollarSign, Coins } from "lucide-react";
import PlannedProductionChart from "./planned-production-chart";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function fetchBucketedDailyPowerYield({
  period,
}: {
  period: "daily" | "monthly" | "yearly";
}) {
  return axios.get(`/api/tsdb/bucketed_power_yield?period=${period}`);
}

export default function PlantPlannedProduction() {
  const { data: bucketedPowerYield, isLoading: isLoadingBucketedPowerYield } =
    useQuery({
      queryKey: ["bucketed_power_yield", "monthly"],
      queryFn: () => fetchBucketedDailyPowerYield({ period: "monthly" }),
      refetchInterval: 30000,
    });

  if (isLoadingBucketedPowerYield) {
    return <div>Loading...</div>;
  }

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Planned Production</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-52">
          <PlannedProductionChart data={bucketedPowerYield?.data} />
        </div>
      </CardContent>
    </Card>
  );
}
