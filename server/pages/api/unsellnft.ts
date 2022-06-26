import type { NextApiRequest, NextApiResponse } from "next";
import { getContract } from "services/contract/Marketplace/MarketNftContractService";
import { getListing } from "services/contract/Marketplace/MarketNftContractService";
import * as prismaService from "services/prismaService";

const CONTRACTADDRESS = process.env.CONTRACT_ADDRESS_NFT || "";

const contract = getContract();
interface NextApiRequestCustom extends NextApiRequest {
  body: { tokenId: string; account: string };
}

export default async function unSellNft(
  req: NextApiRequestCustom,
  res: NextApiResponse
) {
  if (String.prototype.toUpperCase.call(req.method) !== "DELETE") {
    return res.status(400).json({ errors: { message: "bad methods" } });
  }
  const { account, tokenId } = req.body;
  if (!account || tokenId === (undefined || null)) {
    return res.status(400).json({ errors: { message: "bad body" } });
  }
  const token = await getListing({
    contract,
    tokenId,
    contractAddress: CONTRACTADDRESS,
  });
  if (!token) {
    return res.status(404).json({ success: "token not found" });
  }
  await prismaService.unSellNft({
    id: tokenId,
  });
  return res.json({ success: "token have been removed" });
}
