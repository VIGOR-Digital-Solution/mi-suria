import { db } from "@/db";
import { plant } from "@/db/schema/plant";

export async function GET(request: Request) {
  try {
    const plants = await db.query.plant.findMany();

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
