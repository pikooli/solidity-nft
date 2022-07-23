import type { NextApiRequest, NextApiResponse } from "next";
import * as prismaService from "src/services/prismaServices";

//
export default async function accountWithNft(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { accountId } = req.query;
  if (!accountId) {
    return res.status(422).json({ error: "Missing value" });
  }
  const account = await prismaService.accountWithNfts({
    accountId: accountId as string,
  });
  res.json({ account });
}
