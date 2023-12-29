import {
  integer,
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
import { Plant, plant } from "./plant";

export const workOrder = pgTable("work_order", {
  id: serial("id").primaryKey(),
  alarmType: varchar("alarm_type", { length: 256 }).notNull(),
  plantId: integer("plant_id").references(() => plant.id, {
    onUpdate: "cascade",
    onDelete: "cascade",
  }),
  issuedBy: uuid("issued_by").references(() => user.id, {
    onUpdate: "cascade",
    onDelete: "cascade",
  }),
  issuedTo: uuid("issued_to").references(() => user.id, {
    onUpdate: "cascade",
    onDelete: "cascade",
  }),
  closedAt: timestamp("closed_at", { withTimezone: true, mode: "string" }),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
});

export const workOrderRelations = relations(workOrder, ({ one }) => ({
  plant: one(plant, {
    fields: [workOrder.plantId],
    references: [plant.id],
  }),
}));

export type WorkOrder = typeof workOrder.$inferSelect; // return type when queried
// export type WorkOrderWithPlant = {
//   plant: Plant | null;
// } & WorkOrder;
export type NewWorkOrder = typeof workOrder.$inferInsert; // insert type
