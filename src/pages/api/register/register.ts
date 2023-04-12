import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { db } from "../../../../lib/db";
import { createJWT, hashPassword } from "../../../../lib/auth";

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const user = await db.user.create({
      data: {
        email: req.body.email,
        password: await hashPassword(req.body.password),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
      },
    });

    const cookieName = process.env.COOKIE_NAME || "defaultCookieName";

    const jwt = await createJWT(user);
    res.setHeader(
      "Set-Cookie",
      serialize(cookieName, jwt, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      })
    );
    res.status(201);
    res.json({});
  } else {
    res.status(402);
    res.json({});
  }
}
