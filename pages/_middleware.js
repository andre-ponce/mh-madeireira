import { NextResponse } from "next/server";
import { executeMiddlewares } from "../middlewares";

export async function middleware(req, ev) {
  const initialResponse = NextResponse.next();
  const finalResponse = executeMiddlewares(req, initialResponse, ev)
  return finalResponse;
}
