import { NewPlant } from "@/db/schema/plant";
import {
  UseMutationOptions,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

const fetchPlants = () => {
  return axios.get("/api/plants");
};

const createPlant = (data: NewPlant) => {
  return axios.post("/api/plants", data);
};

export const usePlants = () => {
  return useQuery({
    queryKey: ["plants"],
    queryFn: fetchPlants,
  });
};

export const useCreatePlant = () => {
  return useMutation({
    mutationFn: createPlant,
  });
};
