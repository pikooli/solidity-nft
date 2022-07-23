import type { NextApiRequest, NextApiResponse } from "next";
import { getContractNft } from "src/backServices/contractsServices";
import { getListing } from "src/services/contractServices/marketplace/marketNftContractService";
import * as prismaService from "src/services/prismaServices";

const CONTRACTADDRESS = process.env.CONTRACT_ADDRESS_NFT || "";

const contract = getContractNft();
interface NextApiRequestCustom extends NextApiRequest {
  body: { tokenId: string; accountId: string };
}

export default async function unSellNft(
  req: NextApiRequestCustom,
  res: NextApiResponse
) {
  if (String.prototype.toUpperCase.call(req.method) !== "DELETE") {
    return res.status(400).json({ errors: { message: "bad methods" } });
  }
  const { accountId, tokenId } = req.body;
  if (!accountId || tokenId === (undefined || null)) {
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
