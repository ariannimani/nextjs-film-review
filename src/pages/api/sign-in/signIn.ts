import { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";
import { db } from "../../../../lib/db";
import { comparePasswords, createJWT } from "../../../../lib/auth";

const signIn = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const user = await db.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    if (!user) {
      res.status(401);
      res.json({ error: "Invalid login" });
      return;
    }

    const isUser = await comparePasswords(req.body.password, user.password);

    if (isUser) {
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
      res.status(401);
      res.json({ error: "Invalid login" });
    }
  } else {
    res.status(402);
    res.json({});
  }
};

export default signIn;
