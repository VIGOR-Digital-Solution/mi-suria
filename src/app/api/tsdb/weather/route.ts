import { tsdb } from "@/tsdb";
import axios from "axios";
import { sql } from "drizzle-orm";

export async function GET(request: Request) {
  const WEATHER_API_KEY = "e14eabb91b7242d1b0581517240103";

  try {
    const res = await axios.post(
      `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=bulk`,
      {
        locations: [
          {
            q: "Kuala Lumpur",
            custom_id: "plant-1",
          },
          {
            q: "Kedah",
            custom_id: "plant-2",
          },
        ],
      }
    );

    const data = res.data;

    return Response.json(data, {
      status: 200,
    });
  } catch (error: any) {
    return Response.json(
      { message: error.message },
      {
        status: 400,
      }
    );
  }
}
