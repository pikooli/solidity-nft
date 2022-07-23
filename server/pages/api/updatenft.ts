import type { NextApiRequest, NextApiResponse } from "next";
import { getContractMarket } from "src/backServices/contractsServices";
import { getListing } from "src/services/contractServices/marketplace/marketNftContractService";
import * as prismaService from "src/services/prismaServices";

const CONTRACTADDRESS = process.env.CONTRACT_ADDRESS_NFT || "";

const contract = getContractMarket();
interface NextApiRequestCustom extends NextApiRequest {
  body: { price: number; tokenId: string; accountId: string };
}

// update the price on the NFT market
export default async function updatenft(
  req: NextApiRequestCustom,
  res: NextApiResponse
) {
  if (String.prototype.toUpperCase.call(req.method) !== "PUT") {
    return res.status(400).json({ errors: { message: "bad methods" } });
  }
  const { accountId, price, tokenId } = req.body;
  if (!accountId || isNaN(price) || tokenId === (undefined || null)) {
    return res.status(400).json({ errors: { message: "bad body" } });
  }
  const result = await prismaService.updateNft({
    accountId: accountId,
    tokenId: tokenId,
    price: Number(price),
  });
  console.log("result", result);
  return res.json({ success: "token price updated" });
}
