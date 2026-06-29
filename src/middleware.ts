import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const COMING_SOON_DOMAINS = ["boxaura.in", "www.boxaura.in"];

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") ?? "";

  if (!COMING_SOON_DOMAINS.some((d) => hostname.includes(d))) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname === "/coming-soon") return NextResponse.next();

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  return NextResponse.rewrite(new URL("/coming-soon", request.url));
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
