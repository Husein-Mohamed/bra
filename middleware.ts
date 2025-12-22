// middleware.ts (project root)
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/news/admin/:path*"],
};

export function middleware(req: NextRequest) {
  const isAdmin = req.cookies.get("isAdmin");
  if (isAdmin && isAdmin.value !== "true") {
    // server‐side bounce before /news/admin is rendered
    return NextResponse.redirect(new URL("/news/g", req.url));
  }
  return NextResponse.next();
}
