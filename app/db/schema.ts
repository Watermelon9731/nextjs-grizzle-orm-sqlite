import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const response = sqliteTable("response_table", {
  id: int("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
});

export type ResponseSelect = typeof response.$inferSelect;
