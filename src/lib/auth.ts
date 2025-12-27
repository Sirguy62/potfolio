import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { prisma } from "./db";

export const auth = betterAuth({
  baseURL: process.env.NEXT_PUBLIC_APP_URL!, // REQUIRED
  database: prismaAdapter(prisma, { provider: "postgresql" }),

  emailAndPassword: { enabled: true },

  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },

  plugins: [nextCookies()],
  trustedOrigins: ["http://localhost:3000", "https://bookora-mu.vercel.app/"],
});
