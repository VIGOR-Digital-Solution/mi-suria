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
