import {
  pgTable,
  uuid,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const leads = pgTable("leads", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 120 }).notNull(),
  phone: varchar("phone", { length: 32 }).notNull(),
  email: varchar("email", { length: 160 }),
  service: varchar("service", { length: 120 }).notNull(),
  propertyType: varchar("property_type", { length: 32 }).notNull(),
  message: text("message"),
  source: varchar("source", { length: 80 }),
  page: text("page"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});

export type Lead = typeof leads.$inferSelect;
