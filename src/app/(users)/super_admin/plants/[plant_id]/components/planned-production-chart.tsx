"use client";
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import colors from "tailwindcss/colors";
import { generateRandomArray } from "../utils";
import { useTheme } from "next-themes";

export default function PlannedProductionChart() {
  const { theme } = useTheme();
  const arrayLength = 7; // Change this value to the desired length of the array
  const minValue = 0; // Minimum value for the random numbers
  const maxValue = 45; // Maximum value for the random numbers

  const randomNumbers = generateRandomArray(arrayLength, minValue, maxValue);
  const randomNumbers2 = generateRandomArray(arrayLength, minValue, maxValue);
  const randomNumbers3 = generateRandomArray(arrayLength, minValue, maxValue);

  const series: ApexAxisChartSeries = [
    {
      name: "Monthly Production",
      data: randomNumbers,
    },
    {
      name: "Monthly Planned Production",
      data: randomNumbers2,
    },
    {
      name: "Monthly Completion",
      data: randomNumbers3,
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
    dataLabels: {
      enabled: false,
    },
    yaxis: {
      min: 0,
      max: 45,
      decimalsInFloat: 0,
      title: {
        text: "kWh",
      },
      forceNiceScale: true,
    },
    // colors: [colors.blue[400], colors.yellow[300], colors.green[300]],
    xaxis: {
      type: "datetime",
      categories: [
        new Date("2023-01-01T00:00:00Z").getTime(),
        new Date("2023-02-01T00:00:00Z").getTime(),
        new Date("2023-03-01T00:00:00Z").getTime(),
        new Date("2023-04-01T00:00:00Z").getTime(),
        new Date("2023-05-01T00:00:00Z").getTime(),
        new Date("2023-06-01T00:00:00Z").getTime(),
        new Date("2023-07-01T00:00:00Z").getTime(),
      ],
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="bar"
      width={"100%"}
      height={"100%"}
    />
  );
}