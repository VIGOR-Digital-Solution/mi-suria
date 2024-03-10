import { tsdb } from "@/tsdb";
import { sql } from "drizzle-orm";

export async function GET(request: Request) {
  try {
    const data = await tsdb.execute(
      sql`select * from sungrow 
      where up_timestamp > now() - interval '1 day' and device_code='9731'
      order by up_timestamp desc
      limit 5`
    );

    let result: any[] = [];

    if (data.length) {
      const plantData = data[0];
      // const isAlert = plantData.alarm === "No Alarm" ? false : true;
      const capacity = 3.3;
      const production = Math.floor((Number(plantData.tap) / 1000) * 100) / 100;
      const power = Math.floor((capacity / production) * 100) / 100;
      const dailyProduction = Number(plantData.dpy) / 10;

      result = [
        {
          id: "plant1",
          name: "Plant 1",
          isAlert: null,
          capacity,
          production,
          power,
          trend: "UP",
          dailyProduction,
        },
      ];
    }

    return Response.json(result, {
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
