import { betterAuth } from "better-auth";

 import * as schema from "@/db/schema";
 
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db"; // your drizzle instance

export const auth = betterAuth({
      emailAndPassword: { 
    enabled: true, 
  }, 
  
    database: drizzleAdapter(db, {
        provider: "pg", // or "mysql", "sqlite"
        schema:{
            ...schema,
        },
    }),
});