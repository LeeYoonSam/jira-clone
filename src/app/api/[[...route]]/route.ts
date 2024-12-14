import { Hono } from "hono";
import { handle } from "hono/vercel";

import auth from "@/features/auth/server/route";

const app = new Hono().basePath("/api");

const routes = app
  .route("/auth", auth);

// HTTP Method 타입을 지원하기 위해 꼭 추가해야함
export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes;
