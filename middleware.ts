import { jwtVerify } from "jose";
import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const checkIsAuthRoute = (pathname: string) =>
  pathname.includes("/signin") || pathname.includes("/register");

export default withAuth(
  async function middleware(req) {
    let token;
    if (await getToken({ req })) {
      token = await getToken({ req });
    } else if (
      !token &&
      req.headers.get("Authorization")?.startsWith("Bearer ")
    ) {
      token = req.headers.get("Authorization")?.substring(7) as unknown;
      const secret = new TextEncoder().encode(process.env.SECRET_KEY);
      try {
        await jwtVerify(`${token}`, secret);
      } catch (err) {
        console.error(err);
        return new NextResponse(
          JSON.stringify({ success: false, message: "Authentication failed" }),
          { status: 401, headers: { "content-type": "application/json" } }
        );
      }
    }

    const isAuthenticated = !!token;
    const isAuthRoute = checkIsAuthRoute(req.nextUrl.pathname);

    if (isAuthRoute) {
      if (isAuthenticated) return NextResponse.redirect(new URL("/", req.url));
      return NextResponse.next();
    }

    if (!isAuthenticated) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }
      if (req.nextUrl.pathname.includes("/mobileapp")) {
        return new NextResponse(
          JSON.stringify({ success: false, message: "Authentication failed" }),
          { status: 401, headers: { "content-type": "application/json" } }
        );
      }
      return NextResponse.redirect(
        new URL(`/api/auth/signin?from=${encodeURIComponent(from)}`, req.url)
      );
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  }
);

export const config = {
  // Put in the array all the pages url that are only available for authenticated users
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api/healthcheck|_next/static|_next/image|favicon.ico).*)",
  ],
};
