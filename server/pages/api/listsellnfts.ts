import type { NextApiRequest, NextApiResponse } from "next";
import * as prismaService from "src/services/prismaServices";

//
export default async function listSellNfts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const nfts = await prismaService.findSellNfts();
  res.json({ nfts });
}
