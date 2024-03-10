"use client";
import React from "react";
import CardInfo from "./_components/card-info";
import CardWatchList from "./_components/card-watch-list";
import CardEnvironmental from "./_components/card-environmental";
import CardWeatherForecast from "./_components/card-weather-forecast";
import CardRevenue from "./_components/card-revenue";
import PlantListCard from "./_components/plant-list-card";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EggFried, Grip, TreePine } from "lucide-react";
import { isNullOrUndefined } from "util";

function fetchDailyInverterData() {
  return axios.get(`/api/tsdb/daily_inverter_data`);
}

function fetchSumDailyPowerYield() {
  return axios.get(`/api/tsdb/sum_daily_power_yield`);
}

export default function DashboardPage() {
  const { data: dailyInverterData, isLoading: isLoadingDailyInverterData } =
    useQuery({
      queryKey: ["daily_inverter_data"],
      queryFn: fetchDailyInverterData,
      refetchInterval: 30000,
    });

  console.log(dailyInverterData?.data);

  function getActivePower() {
    let activePower = dailyInverterData?.data?.[0].tap;
    activePower = Number(activePower) / 1000;
    return Math.floor(activePower * 1000) / 1000;
  }

  function getInstalledCapacity() {
    return 3.3;
    // let installedCapacity = dailyInverterData?.data?.[0].ipp;
    // if (installedCapacity) {
    //   installedCapacity = Number(installedCapacity) / 1000;
    //   return Math.floor(installedCapacity * 100) / 100;
    // }
    // return null;
  }

  function getDailyPowerYield() {
    let dailyPowerYield = dailyInverterData?.data?.[0].dpy;
    return Number(dailyPowerYield / 10);
  }

  function getMonthlyPowerYield() {
    // SUNGROW
    let monthlyPowerYield = dailyInverterData?.data?.[0].mpy;
    return Number(monthlyPowerYield / 10);

    // INVT
    // let dailyPowerYield = getDailyPowerYield();
    // if (dailyPowerYield) {
    //   dailyPowerYield = Number(dailyPowerYield) * 30.5;
    //   return Math.floor(dailyPowerYield * 100) / 100;
    // }
  }

  function getDailyRevenue() {
    let dailyPowerYield = getDailyPowerYield();
    let tariff = 0.57; // static value refer to tariff given by mimos
    let dailyRevenue = Math.floor(dailyPowerYield * tariff * 1000) / 1000;
    return dailyRevenue;
  }

  function getMonthlyRevenue() {
    let monthlyPowerYield = getMonthlyPowerYield();
    let tariff = 0.57; // static value refer to tariff given by mimos
    let monthlyRevenue = Math.floor(monthlyPowerYield * tariff * 1000) / 1000;
    return monthlyRevenue;
  }

  const plantInfo = {
    active: 1,
    total: 1,
  };

  // based on formula given by mimos
  function getCarbonEmissionSaved() {
    let totalPowerYield = dailyInverterData?.data?.[0].tpy;
    let energyCommission = 0.78 - 0.035; // static value refer to energy comission given by mimos
    let result = (totalPowerYield * energyCommission) / 1000;
    return result;
  }

  // based on formula given by mimos
  function getTreesPlantedEquivalent() {
    let carbonEmissionSaved = getCarbonEmissionSaved();
    let yearlyAvgCarbonEmission = 0.04; // static value  given by mimos
    let result = carbonEmissionSaved / yearlyAvgCarbonEmission;
    return result;
  }

  // mimic carbon emission formula (unable to found formula given by mimos)
  function getCoalSaved() {
    let totalPowerYield = dailyInverterData?.data?.[0].tpy;
    let petrol = 2.3228;
    let diesel = 2.7325;
    let coalCommission = petrol + diesel - 0.5;
    let result = (totalPowerYield * coalCommission) / 1000;
    return result;
  }

  const impacts = [
    {
      title: "Carbon Emissions Saved",
      value: getCarbonEmissionSaved(),
      unitValue: "Tons",
      icon: <Grip />,
    },
    {
      title: "Trees Planted Equivalent",
      value: getTreesPlantedEquivalent(),
      unitValue: "Tress",
      icon: <TreePine />,
    },
    {
      title: "Coal Saved",
      value: getCoalSaved(),
      unitValue: "Tons",
      icon: <EggFried />,
    },
  ];

  if (isLoadingDailyInverterData) {
    return (
      <div className="px-6 grid grid-cols-1 xl:grid-cols-4 gap-5">
        Loading...
      </div>
    );
  }

  return (
    <div className="px-6 grid grid-cols-1 xl:grid-cols-4 gap-5">
      {/* row 1 */}
      <div className="col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-5 xl:h-[500px]">
        <CardInfo
          title="Current Power"
          content={
            getActivePower() == undefined ? "N/A" : getActivePower() + " kW"
          }
          descTitle="Installed Capacity"
          descContent={
            getInstalledCapacity() == undefined
              ? "N/A"
              : getInstalledCapacity() + " kW"
          }
          className="bg-primary-800 text-background"
        />
        <CardInfo
          title="Daily Yield"
          content={
            getDailyPowerYield() == undefined
              ? "N/A"
              : getDailyPowerYield() + " kWh"
          }
          descTitle="Monthly Yield"
          descContent={
            getMonthlyPowerYield() == undefined
              ? "N/A"
              : getMonthlyPowerYield() + " kWh"
          }
        />
        <CardInfo
          title="Daily Revenue"
          content={
            getDailyRevenue() == undefined ? "N/A" : getDailyRevenue() + " MYR"
          }
          descTitle="Monthly Revenue"
          descContent={
            getMonthlyRevenue() == undefined
              ? "N/A"
              : getMonthlyRevenue() + " MYR"
          }
        />
        <CardInfo
          title="Active Plant"
          content={`${plantInfo.active} Plants`}
          descTitle="Total Plant"
          descContent={`${plantInfo.total} Plants`}
        />
      </div>
      <div className="col-span-2">
        <CardWatchList
          activePower={
            getActivePower() == undefined ? "N/A" : getActivePower() + " kW"
          }
        />
      </div>

      {/* row 2 */}
      <div className="col-span-2">
        <CardEnvironmental impacts={impacts} />
      </div>
      <div className="col-span-2">
        <CardWeatherForecast />
      </div>

      {/* row 3 */}
      <div className="col-span-3">
        <CardRevenue />
      </div>
      <div className="col-span-1">
        <PlantListCard />
      </div>
    </div>
  );
}
