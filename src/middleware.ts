import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
  // Getting the token from the request
  const token = await getToken({ req: request });
  // Getting the URL from the request
  const url = request.nextUrl;

  // Checking if the token exists and if the URL is for authentication or home pages
  if (
    token &&
    (url.pathname.startsWith("/sign-in") ||
      url.pathname.startsWith("/sign-up") ||
      url.pathname.startsWith("/verify") ||
      url.pathname.startsWith("/"))
  ) {
    // Redirecting to the dashboard if authenticated
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (!token && url.pathname.startsWith("/dashboard")) {
    // Redirecting to the sign-in page if not authenticated
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Configuring matchers for middleware
  matchers: ["/sign-in", "sign-up", "/", "/dashboard/:path*", "/verify/:path*"],
};
