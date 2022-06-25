import type { NextApiRequest, NextApiResponse } from "next";
import * as prismaService from "services/prismaService";

//
export default async function listofaccountnfts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { account } = req.query;
  if (!account) {
    return res.status(422).json({ error: "Missing value" });
  }
  const nfts = await prismaService.findAccountNfts({
    accountId: account as string,
  });
  res.json({ nfts });
}
