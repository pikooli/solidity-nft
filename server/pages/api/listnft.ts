import type { NextApiRequest, NextApiResponse } from "next";
import nftService from "services/nftService";

export default async function listNft(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { account } = req.query;
  if (!account) {
    return res.status(422).json({ error: "Missing value" });
  }
  const nfts = await nftService.findNfts({ account: account as string });
  res.json({ nfts });
}
