import type { NextApiRequest, NextApiResponse } from "next";
import {
  getContract,
  getOwnerOf,
  getTokenUri,
} from "services/contract/Nft/NftContractService";
import prismaService from "services/prismaService";

const contract = getContract();

export default async function uploadNft(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { transaction, account } = req.body;
  const { events } = transaction;
  const { Transfer } = events;
  const { returnValues } = Transfer;
  const { tokenId, to } = returnValues;
  const ownerOfContract = await getOwnerOf(contract, tokenId);
  const tokenUri = await getTokenUri(contract, tokenId);
  if (!account || !tokenId || !tokenUri) {
    return res.status(422).json({ error: "Missing value" });
  }
  if (to !== account || account !== ownerOfContract) {
    return res.status(403).json({ error: "Not authorized" });
  }
  await prismaService.storeNft({
    accountId: account,
    tokenId: Number(tokenId),
    tokenUri,
  });
  res.json({ success: "token stored" });
}
