import { db } from "@/db";
import { permission } from "@/db/schema/permission";
import { plant } from "@/db/schema/plant";
import { eq } from "drizzle-orm";

export async function GET(
  request: Request,
  { params }: { params: { uid: string } }
) {
  const uid = params.uid;
  const { searchParams } = new URL(request.url);
  const isUser = searchParams.get("is_user");
  let user: true | undefined = undefined;

  try {
    if (isUser === "true") {
      user = true;
    }

    const permissions = await db.query.permission.findMany({
      where: eq(permission.createdBy, uid),
      with: {
        user: {
          with: {
            plants: {
              with: { user },
            },
          },
        },
      },
    });

    const plants = permissions.map((permission) => permission.user?.plants);
    const flatPlants = plants.flat();

    return Response.json(flatPlants, {
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
