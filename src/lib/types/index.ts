export type IPermission = {
  id: string;
  created_at: string;
  role: "super-admin" | "admin" | "installer" | "user";
  status: "active" | "inactive";
  user_id: string;
  created_by: string;
  user: {
    id: string;
    created_at: string;
    name: string;
  };
};

export type IPlant = {
  id: string;
  name: string;
  isAlert: boolean;
  capacity: number;
  production: number;
  power: number;
  trend: string;
  dailyProduction: number;
  peakHoursToday: number;
};

export type IDevice = {
  id: string;
  name: string;
  status: "active" | "inactive";
  connectedPlant: string;
  dcDiscrete: number;
  production: number;
  dailyProduction: number;
  peakHoursToday: number;
};

export type IAlert = {
  id: string;
  name: string;
  status: "Open" | "Closed";
  importance: "Warning" | "Failure";
  plant: string;
  device: string;
  openedTime: string;
  closedTime: string;
};
