"use client";
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import colors from "tailwindcss/colors";
import { generateRandomArray } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { addHours, format } from "date-fns";

function fetchBucketedDailyPowerYield({
  period,
}: {
  period: "daily" | "monthly" | "yearly";
}) {
  return axios.get(`/api/tsdb/bucketed_power_yield?period=${period}`);
}

export default function TrendChart({
  period,
}: {
  period: "daily" | "monthly" | "yearly";
}) {
  const { data: bucketedPowerYield, isLoading: isLoadingBucketedPowerYield } =
    useQuery({
      queryKey: ["bucketed_power_yield", period],
      queryFn: () => fetchBucketedDailyPowerYield({ period }),
      refetchInterval: 30000,
    });

  const data = bucketedPowerYield?.data.slice(0, 5).map((d: any) => {
    let key = "dpy";
    switch (period) {
      case "monthly":
        key = "mpy";
        break;
      case "yearly":
        key = "tpy";
        break;
      default:
        break;
    }
    let powerYield = d[key] / 10;
    return Math.floor(powerYield * 100) / 100;
  });

  const categories = bucketedPowerYield?.data.slice(0, 5).map((d: any) => {
    return format(addHours(d.bucket, 8), "yyyy/MM/dd HH:mm:ss");
  });

  // const arrayLength = 7; // Change this value to the desired length of the array
  // const minValue = 0; // Minimum value for the random numbers
  // const maxValue = 10; // Maximum value for the random numbers

  // let randomNumbers = generateRandomArray(arrayLength, minValue, maxValue);
  // randomNumbers = randomNumbers.map((number) => Number(number.toFixed(0)));

  const series: ApexAxisChartSeries = [
    {
      name: "DP",
      data,
    },
  ];
  const options: ApexOptions = {
    theme: {
      mode: "dark",
    },
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
      sparkline: {
        enabled: true,
      },
    },
    stroke: {
      width: 1,
      curve: "smooth",
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      type: "datetime",
      labels: {
        // formatter: (value, timestamp: any) => {
        //   return new Date(timestamp).toLocaleTimeString();
        // },
        datetimeUTC: false,
      },
      categories,
    },
  };

  if (isLoadingBucketedPowerYield) {
    return <div>...</div>;
  }

  return (
    <Chart
      options={options}
      series={series}
      type="line"
      width={"100%"}
      height={"100%"}
    />
  );
}
