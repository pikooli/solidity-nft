import type { NextApiRequest, NextApiResponse } from "next";
import prismaService from "services/prismaService";

//
export default async function listSellNfts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const nfts = await prismaService.findSellNfts();
  res.json({ nfts });
}
