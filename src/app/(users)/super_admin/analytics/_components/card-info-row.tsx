"use client";
import React from "react";
import CardInfo from "./card-info";
import { CircleDollarSign, DatabaseZap } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function fetchComparedPowerYield({
  period,
}: {
  period: "daily" | "monthly" | "yearly";
}) {
  return axios.get(`/api/tsdb/compared_power_yield?period=${period}`);
}

export default function CardInfoRow({
  period,
}: {
  period: "daily" | "monthly" | "yearly";
}) {
  const { data: comparedPowerYield, isLoading: isLoadingComparedPowerYield } =
    useQuery({
      queryKey: ["compared_power_yield", period],
      queryFn: () => fetchComparedPowerYield({ period }),
      refetchInterval: 30000,
    });

  const data = comparedPowerYield?.data.map((d: any) => {
    let field = "dpy";
    switch (period) {
      case "monthly":
        field = "mpy";
        break;
      case "yearly":
        field = "tpy";
        break;
      default:
        break;
    }
    let powerYield = d[field] / 10;
    return Math.floor(powerYield * 100) / 100;
  });

  const revenueData = comparedPowerYield?.data.map((d: any) => {
    let field = "dpy";
    switch (period) {
      case "monthly":
        field = "mpy";
        break;
      case "yearly":
        field = "tpy";
        break;
      default:
        break;
    }
    let powerYield = d[field] / 10;
    let tariff = 0.57;
    let result = powerYield * tariff;
    return Math.floor(result * 100) / 100;
  });

  function getDiffValue() {
    let currentPowerYield = data?.[0];
    let pastPowerYield = data?.[1];
    let result = ((currentPowerYield - pastPowerYield) / pastPowerYield) * 100;
    return Math.floor(result * 100) / 100;
  }

  function getDiffValueRevenue() {
    let currentRevenue = revenueData?.[0];
    let pastRevenue = revenueData?.[1];
    let result = ((currentRevenue - pastRevenue) / pastRevenue) * 100;
    result = result * 0.8;
    return Math.floor(result * 100) / 100;
  }

  function getDiffStatus() {
    let sign = Math.sign(getDiffValue());
    if (sign === 1) return "up";
    if (sign === -1) return "down";
    return "neutral";
  }

  function getDiffStatusRevenue() {
    let sign = Math.sign(getDiffValueRevenue());
    if (sign === 1) return "up";
    if (sign === -1) return "down";
    return "neutral";
  }

  if (isLoadingComparedPowerYield) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-5 xl:gap-x-5">
      <CardInfo
        period={period}
        type="power"
        title="Avg Power Yield"
        value={`${data?.[0] == undefined ? "N/A" : data[0]}`}
        unitValue="kWh"
        diffValue={`${isNaN(getDiffValue()) ? "" : getDiffValue()}`}
        unitDiffValue={`${isNaN(getDiffValue()) ? "" : "%"}`}
        status={getDiffStatus()}
        logo={<DatabaseZap size={40} className="text-foreground-400" />}
        // className="bg-primary-800"
        // textBackgroundEnabled
      />
      <CardInfo
        period={period}
        type="revenue"
        title="Avg Revenue"
        value={`${revenueData?.[0] == undefined ? "N/A" : revenueData[0]}`}
        unitValue="MYR"
        diffValue={`${
          isNaN(getDiffValueRevenue()) ? "" : getDiffValueRevenue()
        }`}
        unitDiffValue={`${isNaN(getDiffValueRevenue()) ? "" : "%"}`}
        status={getDiffStatusRevenue()}
        logo={<CircleDollarSign size={40} className="text-foreground-400" />}
        // className="bg-primary-800"
        // textBackgroundEnabled
      />
      {/* <CardInfo
      title="Total Yield"
      value="17.19"
      unitValue="kWh"
      diffValue="10.2"
      unitDiffValue="%"
      status="down"
      logo={<BatteryFull size={40} className="text-foreground-400" />}
    /> */}
      {/* <CardInfo
        period={period}
        type="revenue"
        title="Total Revenue"
        value="1.97"
        unitValue="USD"
        diffValue="62"
        unitDiffValue="%"
        status="down"
        logo={<CircleDollarSign size={40} className="text-foreground-400" />}
      /> */}
    </div>
  );
}
