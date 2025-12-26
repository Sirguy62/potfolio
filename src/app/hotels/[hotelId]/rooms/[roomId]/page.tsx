
import { redirect } from "next/navigation";
import CheckoutClient from "./CheckoutClient";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";

export default async function CheckoutPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/auth");
  }

  return <CheckoutClient />;
}
