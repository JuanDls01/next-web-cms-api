import "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      fullName: string;
      username: string;
      accessToken: string;
      id: number | string;
    };
  }
}
