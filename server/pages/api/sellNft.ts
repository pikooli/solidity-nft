// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Web3 from "web3";
import contractService from "services/contractService";
import nftService from "services/nftService";

const CONTRACTADDRESS = process.env.CONTRACT_ADDRESS || "";
const networkAddress = process.env.NETWORK_ADDRESS || "";
const provider = new Web3(new Web3.providers.HttpProvider(networkAddress));

const contract = contractService.createContract({
  provider,
  contractAddress: CONTRACTADDRESS,
});

export default async function uploadNft(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { transaction, account } = req.body;
  const { events } = transaction;
  const { Transfer } = events;
  const { returnValues } = Transfer;
  const { tokenId, to } = returnValues;
  const ownerOfContract = await contractService.getOwnerOf(contract, tokenId);
  const tokenUri = await contractService.getTokenUri(contract, tokenId);
  if (!account || !tokenId || !tokenUri) {
    return res.status(422).json({ error: "Missing value" });
  }
  if (to !== account || account !== ownerOfContract) {
    return res.status(403).json({ error: "Not authorized" });
  }
  await nftService.storeNft({
    account,
    tokenId: Number(tokenId),
    tokenUri,
  });
  res.json({ success: "token stored" });
}