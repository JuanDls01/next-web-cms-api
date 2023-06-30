import { JWTPayload, SignJWT, jwtVerify } from "jose";

export const signJwt = async (payload: JWTPayload, subject: string) => {
  try {
    const secret = new TextEncoder().encode(process.env.SECRET_KEY);
    const alg = "HS256";
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg })
      .setExpirationTime("1h")
      .setIssuedAt()
      .setSubject(subject)
      .sign(secret);
    return token;
  } catch (error) {
    console.error(error);
  }
};

export const verifyJWT = async (token: string) => {
  try {
    const payload = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.SECRET_KEY)
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};
