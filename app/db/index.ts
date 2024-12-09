import { createClient } from "@libsql/client";
import "dotenv/config";
import { drizzle } from "drizzle-orm/libsql";

const client = createClient({ url: `file:${process.env.NEXT_PUBLIC_DB_URL!}` });
export const db = drizzle(client);
