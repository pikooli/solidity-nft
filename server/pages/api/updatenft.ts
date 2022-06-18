import type { NextApiRequest, NextApiResponse } from "next";
import { getContract } from "services/contract/Marketplace/MarketNftContractService";
import { getListing } from "services/contract/Marketplace/MarketNftContractService";
import prismaService from "services/prismaService";

const CONTRACTADDRESS = process.env.CONTRACT_ADDRESS_NFT || "";

const contract = getContract();
interface NextApiRequestCustom extends NextApiRequest {
  body: { price: number; tokenId: string; account: string };
}

// update the price on the NFT market
export default async function updateNft(
  req: NextApiRequestCustom,
  res: NextApiResponse
) {
  const { account, price, tokenId } = req.body;
  console.log(req.body);
  console.log(CONTRACTADDRESS);
  const token = await getListing({
    contract,
    tokenId,
    contractAddress: CONTRACTADDRESS,
  });
  if (token.price === price) {
    await prismaService.updateNft({
      accountId: account,
      tokenId: Number(tokenId),
      price: Number(price),
    });
    return res.json({ success: "token price updated" });
  }
  return res.json({ success: "Not same price" });
}
