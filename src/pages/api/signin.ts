// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name?: string | null;
  message?: string | null;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  //   res.status(200).json({ name: null })
  // res.setHeader("Set-Cookie", "a_name=Mike;Max-age=3600;HttpOnly,Secure");
  res.statusCode = 200;
  res.json({ message: "ok" });
}
