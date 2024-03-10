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
      const inverterData = data[0];
      const id = String(inverterData.device_code);
      const name = "Sungrow";
      const status = "active";
      const connectedPlant = "Plant 1";
      const production =
        Math.floor((Number(inverterData.tap) / 1000) * 100) / 100;
      const dailyProduction = Number(inverterData.dpy) / 10;

      result = [
        {
          id,
          name,
          status,
          connectedPlant,
          production,
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
