/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@1.13.2.
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as functions_chat from "../functions/chat.js";
import type * as functions_video from "../functions/video.js";
import type * as functions_videoChunking_videoChunking from "../functions/videoChunking/videoChunking.js";
import type * as helpers from "../helpers.js";
import type * as ingest_load from "../ingest/load.js";
import type * as langchain_db from "../langchain/db.js";
import type * as messages from "../messages.js";
import type * as serve from "../serve.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  "functions/chat": typeof functions_chat;
  "functions/video": typeof functions_video;
  "functions/videoChunking/videoChunking": typeof functions_videoChunking_videoChunking;
  helpers: typeof helpers;
  "ingest/load": typeof ingest_load;
  "langchain/db": typeof langchain_db;
  messages: typeof messages;
  serve: typeof serve;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
