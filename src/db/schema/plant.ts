import {
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { User, user } from "./user";
import { relations } from "drizzle-orm";

export const plant = pgTable("plant", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  address: text("address").notNull(),
  coordinates: jsonb("coordinates")
    .$type<{ lat: number; lng: number }>()
    .notNull(),
  userId: uuid("user_id").references(() => user.id, {
    onUpdate: "cascade",
    onDelete: "cascade",
  }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const plantRelations = relations(plant, ({ one }) => ({
  user: one(user, {
    fields: [plant.userId],
    references: [user.id],
  }),
  // createdBy: one(user, {
  //   fields: [permission.createdBy],
  //   references: [user.id],
  // }),
}));

export type Plant = typeof plant.$inferSelect; // return type when queried
export type PlantWithUser = {
  user: User | null;
} & Plant;
export type NewPlant = typeof plant.$inferInsert; // insert type
