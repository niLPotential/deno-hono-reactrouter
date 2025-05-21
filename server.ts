import { Hono } from "hono";
import { serveStatic } from "hono/deno";
import { handler } from "./entry.server.tsx";

const app = new Hono();

app.use(
  "/**/*.js",
  serveStatic({
    root: "./dist",
  }),
);
app.use("/*", (c) => handler(c.req.raw));

Deno.serve(app.fetch);
