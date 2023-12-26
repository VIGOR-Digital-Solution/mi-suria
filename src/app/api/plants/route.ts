import { db } from "@/db";
import { plant } from "@/db/schema/plant";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isUser = searchParams.get("is_user");
  let user: true | undefined = undefined;

  try {
    if (isUser && isUser === "true") {
      user = true;
    }

    const plants = await db.query.plant.findMany({
      with: {
        user,
      },
    });

    return Response.json(plants, {
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

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const insertedPlant = await db.insert(plant).values(body).returning();

    return Response.json(insertedPlant, {
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
