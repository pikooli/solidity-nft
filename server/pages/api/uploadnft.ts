import type { NextApiRequest, NextApiResponse } from "next";
import * as prismaService from "services/prismaService";
import { getContract } from "services/contract/Nft/NftContractService";
import * as contractNftService from "services/contract/Nft/NftContractService";

const contract = getContract();
interface NextApiRequestCustom extends NextApiRequest {
  body: { tokenId: string; account: string };
}
export default async function uploadNft(
  req: NextApiRequestCustom,
  res: NextApiResponse
) {
  const { tokenId, account } = req.body;
  const ownerOfNft = await contractNftService.getOwnerOf(contract, tokenId);
  const tokenUri = await contractNftService.getTokenUri(contract, tokenId);
  if (!account || !tokenId || !tokenUri) {
    return res.status(422).json({ error: "Missing value" });
  }
  if (account !== ownerOfNft) {
    return res.status(403).json({ error: "Not authorized" });
  }
  await prismaService.storeNft({
    accountId: account,
    tokenId: tokenId,
    tokenUri,
  });
  res.json({ success: "token stored" });
}
