import { db } from "@/db";

export async function GET(request: Request) {
  try {
    const users = await db.query.user.findMany();

    return Response.json(users, {
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
