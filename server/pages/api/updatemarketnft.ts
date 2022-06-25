import type { NextApiRequest, NextApiResponse } from "next";
import { getContract } from "services/contract/Marketplace/MarketNftContractService";
import { getListing } from "services/contract/Marketplace/MarketNftContractService";
import * as prismaService from "services/prismaService";

const CONTRACTADDRESS = process.env.CONTRACT_ADDRESS_NFT || "";

const contract = getContract();
interface NextApiRequestCustom extends NextApiRequest {
  body: { price: number; tokenId: string; account: string };
}

// update the price on the NFT market
export default async function updateMarketNft(
  req: NextApiRequestCustom,
  res: NextApiResponse
) {
  if (String.prototype.toUpperCase.call(req.method) !== "PUT") {
    return res.status(400).json({ errors: { message: "bad methods" } });
  }
  const { account, price, tokenId } = req.body;
  if (!account || isNaN(price) || tokenId === (undefined || null)) {
    return res.status(400).json({ errors: { message: "bad body" } });
  }
  const token = await getListing({
    contract,
    tokenId,
    contractAddress: CONTRACTADDRESS,
  });
  if (token && token.price === price) {
    const result = await prismaService.updateNft({
      accountId: account,
      tokenId: tokenId,
      price: Number(price),
    });
    console.log("result", result);
    return res.json({ success: "token price updated" });
  }
  return res.json({ success: "Not same price" });
}
