// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prismaService from "services/prismaService";
import { getContract } from "services/api/ApiUtils";
import * as contractNftService from "services/contract/Nft/NftContractService";

const contract = getContract();
interface NextApiRequestCustom extends NextApiRequest {
  body: { transaction: any; account: string };
}
export default async function uploadNft(
  req: NextApiRequestCustom,
  res: NextApiResponse
) {
  const { transaction, account } = req.body;
  const { events } = transaction;
  const { Transfer } = events;
  const { returnValues } = Transfer;
  const { tokenId, to } = returnValues;
  const ownerOfContract = await contractNftService.getOwnerOf(
    contract,
    tokenId
  );
  const tokenUri = await contractNftService.getTokenUri(contract, tokenId);
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
