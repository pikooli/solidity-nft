import type { NextApiRequest, NextApiResponse } from "next";
import { getContractMarket } from "src/backServices/contractsServices";
import { getListing } from "src/services/contractServices/marketplace/marketNftContractService";
import * as prismaService from "src/services/prismaServices";

const CONTRACTADDRESS = process.env.CONTRACT_ADDRESS_NFT || "";

const contract = getContractMarket();
interface NextApiRequestCustom extends NextApiRequest {
  body: { tokenId: string; accountId: string };
}

// update the price on the NFT market
export default async function removeNft(
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
  await prismaService.removeNfts({
    id: tokenId,
  });
  return res.json({ success: "token have been removed" });
}
