// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import contractService from "services/contractService";
import nftService from "services/nftService";

const CONTRACTADDRESS = process.env.CONTRACT_ADDRESS || "";

const contract = contractService.createContract({
  contractAddress: CONTRACTADDRESS,
});

export default async function uploadNft(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { account, tokenId, tokenUri } = req.body;
  if (!account || !tokenId || !tokenUri) {
    return res.status(422).json({ error: "Missing value" });
  }
  const owner = await contractService.getOwnerOf(contract, 1);
  if (owner !== account) {
    return res.status(400).json({ error: "Not owner of token" });
  }
  await nftService.storeNft({
    account,
    tokenId,
    tokenUri,
  });
  res.json({ success: "token stored" });
}
