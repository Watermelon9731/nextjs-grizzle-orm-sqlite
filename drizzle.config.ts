import "dotenv/config";
import { defineConfig } from "drizzle-kit";

if (!process.env.NEXT_PUBLIC_DB_URL) {
  throw new Error("No process.env.NEXT_PUBLIC_DB_URL");
}

export default defineConfig({
  out: "./app/db/migrations",
  schema: "./app/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DB_URL,
  },
});
