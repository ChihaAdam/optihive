import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/workspace"];
const reverseProtectedRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;
  const isProtected = protectedRoutes.some((route) =>
    pathname.startsWith(route),
  );
  const isReverseProtected = reverseProtectedRoutes.some((route) =>
    pathname.startsWith(route),
  );
  if (!token && isProtected) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (token && isReverseProtected) {
    return NextResponse.redirect(new URL("/workspace", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/workspace/:path*", "/login", "/register"],
};
