import { tsdb } from "@/tsdb";
import { sql } from "drizzle-orm";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const period = searchParams.get("period");
  let timeBucket = "5 minutes";
  let field = "dpy";
  let interval = "up_timestamp::date = now()::date";

  switch (period) {
    case "monthly":
      timeBucket = "1 day";
      field = "mpy";
      interval = "date_part('month', up_timestamp) = date_part('month', now())";
      break;
    case "yearly":
      timeBucket = "1 month";
      field = "tpy";
      interval = "date_part('year', up_timestamp) = date_part('year', now())";
      break;
    default:
      break;
  }

  try {
    const data = await tsdb.execute(
      sql.raw(`select time_bucket('${timeBucket}', up_timestamp) as bucket, avg(${field}) as ${field} from sungrow
      where ${interval} and device_code='9731'
      group by bucket
      order by bucket desc`)
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
