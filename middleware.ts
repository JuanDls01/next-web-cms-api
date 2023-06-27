export { default } from "next-auth/middleware";

export const config = {
  // Put in the array all the pages url that are only available for authenticated users
  matcher: ["/dashboard/:path*"],
};
