import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
// import { Client } from "pg";
// import { drizzle } from "drizzle-orm/node-postgres";

declare module global {
  let tsdbClient: ReturnType<typeof postgres> | undefined;
}

let tsdbClient;

const connectionString =
  "postgres://tsdbadmin@lzvccok4h7.nsp25iwq8b.tsdb.cloud.timescale.com:33417/tsdb?sslmode=require";
const password = "vigorvigor123";

if (process.env.NODE_ENV !== "production") {
  if (!global.tsdbClient) {
    global.tsdbClient = postgres(connectionString, { password });
  }
  tsdbClient = global.tsdbClient;
} else {
  tsdbClient = postgres(connectionString, { password });
}

// export const client = new Client({
//   host: "lzvccok4h7.nsp25iwq8b.tsdb.cloud.timescale.com",
//   port: 33417,
//   user: "tsdbadmin",
//   password: "vigorvigor123",
//   database: "tsdb",
// });

// export const client = new Client({
//   connectionString:
//     "postgres://tsdbadmin@lzvccok4h7.nsp25iwq8b.tsdb.cloud.timescale.com:33417/tsdb?sslmode=require",
//   password: "vigorvigor123",
// });

// // for query purposes
// export const queryClient = postgres(connectionString, {
//   password,
// });
export const tsdb = drizzle(tsdbClient);
