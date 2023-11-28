import { IAlert, IPlant } from "../types";

export const plants: IPlant[] = [
  {
    id: "plant1",
    name: "MI-Energy",
    isAlert: false,
    capacity: 20,
    production: 0.97,
    power: 4.89,
    trend: "UP",
    dailyProduction: 38.2,
    peakHoursToday: 1.91,
  },
  {
    id: "plant2",
    name: "Suria-Energy",
    isAlert: false,
    capacity: 25,
    production: 0.81,
    power: 4.04,
    trend: "UP",
    dailyProduction: 40.0,
    peakHoursToday: 1.5,
  },
];

export const alerts: IAlert[] = [
  {
    id: "alert1",
    name: "Inverter Soft Fail",
    status: "Closed",
    importance: "Warning",
    plant: "MI-Energy",
    device: "Inverter",
    openedTime: new Date().toLocaleTimeString(),
    closedTime: new Date().toLocaleTimeString(),
  },
  {
    id: "alert2",
    name: "OP DC Voltage Over",
    status: "Closed",
    importance: "Warning",
    plant: "MI-Energy",
    device: "Inverter",
    openedTime: new Date().toLocaleTimeString(),
    closedTime: new Date().toLocaleTimeString(),
  },
];
