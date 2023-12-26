import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schemaPlant from "./schema/plant";
import * as schemaUser from "./schema/user";
import * as schemaPermission from "./schema/permission";

declare module global {
  let client: ReturnType<typeof postgres> | undefined;
}

let client;

const connectionString = process.env.DATABASE_URL!;

if (process.env.NODE_ENV !== "production") {
  if (!global.client) {
    global.client = postgres(connectionString, { prepare: false });
  }
  client = global.client;
} else {
  client = postgres(connectionString, { prepare: false });
}

export const db = drizzle(client, {
  schema: {
    ...schemaPlant,
    ...schemaUser,
    ...schemaPermission,
  },
});
