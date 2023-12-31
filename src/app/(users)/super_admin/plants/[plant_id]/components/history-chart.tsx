"use client";
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import colors from "tailwindcss/colors";
import { generateRandomArray } from "../utils";
import { useTheme } from "next-themes";

export default function HistoryChart() {
  const { theme } = useTheme();
  const arrayLength = 7; // Change this value to the desired length of the array
  const minValue = 0; // Minimum value for the random numbers
  const maxValue = 1.5; // Maximum value for the random numbers

  const randomNumbers = generateRandomArray(arrayLength, minValue, maxValue);
  const randomNumbers2 = generateRandomArray(arrayLength, minValue, maxValue);

  const series: ApexAxisChartSeries = [
    {
      name: "Production",
      data: randomNumbers,
    },
    {
      name: "Weather",
      data: randomNumbers2,
    },
  ];
  const options: ApexOptions = {
    theme: {
      mode: (theme as "light") || "dark",
    },
    chart: {
      background: "transparent",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: false,
    },
    yaxis: {
      min: 0,
      max: 1.5,
      decimalsInFloat: 1,
      title: {
        text: "kW",
      },
      forceNiceScale: true,
    },
    xaxis: {
      type: "datetime",
      categories: [
        new Date("2023-11-27T00:00:00Z").getTime(),
        new Date("2023-11-27T01:00:00Z").getTime(),
        new Date("2023-11-27T02:00:00Z").getTime(),
        new Date("2023-11-27T03:00:00Z").getTime(),
        new Date("2023-11-27T04:00:00Z").getTime(),
        new Date("2023-11-27T05:00:00Z").getTime(),
        new Date("2023-11-27T06:00:00Z").getTime(),
      ],
    },
  };

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
