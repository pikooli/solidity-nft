import type { NextApiRequest, NextApiResponse } from "next";
import * as prismaService from "src/services/prismaServices";

//
export default async function listSellNfts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const nft = await prismaService.findNftById({ id: id as string });
  res.json({ nft });
}
