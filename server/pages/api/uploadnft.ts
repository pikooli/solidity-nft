import type { NextApiRequest, NextApiResponse } from "next";
import * as prismaService from "src/services/prismaServices";
import { getContractNft } from "src/backServices/contractsServices";
import * as contractNftService from "src/services/contractServices/nft/nftContractService";

const contract = getContractNft();
interface NextApiRequestCustom extends NextApiRequest {
  body: { tokenId: string; accountId: string };
}
export default async function uploadNft(
  req: NextApiRequestCustom,
  res: NextApiResponse
) {
  const { tokenId, accountId } = req.body;
  const ownerOfNft = await contractNftService.getOwnerOf(contract, tokenId);
  const tokenUri = await contractNftService.getTokenUri(contract, tokenId);
  if (!accountId || !tokenId || !tokenUri) {
    return res.status(422).json({ error: "Missing value" });
  }
  if (accountId !== ownerOfNft) {
    return res.status(403).json({ error: "Not authorized" });
  }
  await prismaService.storeNft({
    accountId: accountId,
    tokenId: tokenId,
    tokenUri,
  });
  res.json({ success: "token stored" });
}
