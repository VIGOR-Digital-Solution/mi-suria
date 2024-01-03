"use client";
import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
import colors from "tailwindcss/colors";
import { generateRandomArray } from "../utils";
import { useTheme } from "next-themes";

export default function WeatherChart() {
  const { theme } = useTheme();
  const arrayLength = 7; // Change this value to the desired length of the array
  const minValue = 20; // Minimum value for the random numbers
  const maxValue = 30; // Maximum value for the random numbers

  let randomNumbers = generateRandomArray(arrayLength, minValue, maxValue);
  randomNumbers = randomNumbers.map((number) => Number(number.toFixed(0)));

  let randomNumbers2 = generateRandomArray(arrayLength, minValue, maxValue);
  randomNumbers2 = randomNumbers2.map((number) => Number(number.toFixed(0)));

  const series: ApexAxisChartSeries = [
    {
      name: "Up",
      data: randomNumbers,
    },
    {
      name: "Bottom",
      data: randomNumbers2,
    },
  ];
  const options: ApexOptions = {
    theme: {
      mode: theme as "light" | "dark",
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
      curve: "smooth",
    },
    legend: {
      show: false,
    },
    grid: {
      show: false,
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