import { tsdb } from "@/tsdb";
import { sql } from "drizzle-orm";

export async function GET(request: Request) {
  try {
    const data = await tsdb.execute(
      sql`select * from sungrow 
      where up_timestamp > now() - interval '1 day' and device_code='9731'
      order by up_timestamp desc;`
    );

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
