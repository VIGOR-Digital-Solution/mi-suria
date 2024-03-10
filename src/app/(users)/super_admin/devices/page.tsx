"use client";
import React from "react";
import { DataTable } from "./components/data-table";
import { devices } from "@/lib/data";
import { columns } from "./components/columns";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function fetchDevicesData() {
  return axios.get(`/api/tsdb/devices_data`);
}

export default function DevicePage() {
  const { data: devicesData, isLoading: isLoadingDevicesData } = useQuery({
    queryKey: ["devices_data"],
    queryFn: fetchDevicesData,
  });

  if (isLoadingDevicesData) {
    return <div className="px-6">Loading...</div>;
  }

  return (
    <div className="px-6">
      <DataTable columns={columns} data={devicesData?.data} />
    </div>
  );
}
