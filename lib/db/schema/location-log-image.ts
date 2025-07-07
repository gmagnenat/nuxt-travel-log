import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { locationLog } from "./location-log";

export const locationLogImage = sqliteTable("locationLogImage", {
  id: int().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  locationLogId: int().references(() => locationLog.id),
  userId: int().references(() => user.id),
  createdAt: int().notNull().$default(() => Date.now()),
  updatedAt: int().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
