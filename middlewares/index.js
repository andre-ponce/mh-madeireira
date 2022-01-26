import addSessionCookie from "./AddSessionCookie"
import AddAuthorization from "./AddAuthorization";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const middlewares = [
  ({ page: { name } }) => { if (!name) return { abort: true } },
  addSessionCookie,
  AddAuthorization,
];

/**
 * Create a pipeline to isolate the scope of each Middleware
 * The middlewares must be registered at /middlewares/index.js
 * @param {NextRequest} request - The middleware request
 * @param {NextResponse} response - A initial response object
 * @param {NextFetchEvent} event - The middleware event
 * @return { NextResponse | Response | undefined | null }
*/
export async function executeMiddlewares(request, response, event) {

  let currentResponse = response;

  for (const middleware of middlewares) {
    try {
      const res = middleware(request, currentResponse, event);
      const middlewareResponse = await Promise.resolve(res);

      if (!middlewareResponse) {
        continue;
      }

      if (middlewareResponse.abort) {
        return middlewareResponse.response || currentResponse;
      }

      currentResponse = middlewareResponse;
    }
    catch (err) {
      throw process.env.production ? Error() : err;
    }
  }

  return currentResponse;
}

export default middlewares;
