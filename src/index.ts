import "dotenv/config";
import { serve } from "@hono/node-server";
import app from "./app.js";
import { env } from "./lib/env.js";

serve(
  {
    fetch: app.fetch,
    hostname: env.HOST,
    port: env.PORT,
  },
  (info) => {
    console.log(`Demo API running on http://${env.HOST}:${info.port}`);
    console.log(`Try: http://${env.HOST}:${info.port}/crash/db-pool`);
  },
);
