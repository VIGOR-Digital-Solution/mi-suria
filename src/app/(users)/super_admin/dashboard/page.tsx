import React from "react";
import CardInfo from "./_components/card-info";
import CardWatchList from "./_components/card-watch-list";
import CardEnvironmental from "./_components/card-environmental";
import CardWeatherForecast from "./_components/card-weather-forecast";
import CardRevenue from "./_components/card-revenue";
import PlantListCard from "./_components/plant-list-card";

export default function DashboardPage() {
  return (
    <div className="px-6 grid grid-cols-1 xl:grid-cols-4 gap-5">
      {/* row 1 */}
      <div className="col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-5 xl:h-[500px]">
        <CardInfo
          title="Current Power"
          content="1.655 kWh"
          descTitle="Installed Capacity"
          descContent="13 kWh"
          className="bg-primary-800 text-background"
        />
        <CardInfo
          title="Daily Yield"
          content="17.19 kWh"
          descTitle="Month to Date Yield"
          descContent="380 kWh"
        />
        <CardInfo
          title="Daily Revenue"
          content="1.97 USD"
          descTitle="Monthly Revenue"
          descContent="752 USD"
        />
        <CardInfo
          title="Normal Plant"
          content="12 Plants"
          descTitle="Total Plant"
          descContent="15 Plants"
        />
      </div>
      <div className="col-span-2">
        <CardWatchList />
      </div>

      {/* row 2 */}
      <div className="col-span-2">
        <CardEnvironmental />
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
