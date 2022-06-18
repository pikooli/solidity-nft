import type { NextApiRequest, NextApiResponse } from "next";
import prismaService from "services/prismaService";

export default async function listNft(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { account } = req.query;
  if (!account) {
    return res.status(422).json({ error: "Missing value" });
  }
  const nfts = await prismaService.findNfts({ accountId: account as string });
  res.json({ nfts });
}
