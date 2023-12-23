import {
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { user } from "./user";

export const permission = pgTable("permission", {
  id: uuid("id").primaryKey().defaultRandom(),
  role: varchar("role").notNull(),
  status: varchar("status").notNull(),
  userId: uuid("user_id").references(() => user.id, {
    onUpdate: "cascade",
    onDelete: "cascade",
  }),
  createdBy: uuid("created_by").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});
