import { headers } from "next/headers";
import { auth } from "./auth";

export async function getSession() {
  return auth.api.getSession({
    headers: new Headers(await headers()),
  });
}
