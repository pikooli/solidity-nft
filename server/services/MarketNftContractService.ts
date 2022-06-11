import { Contract } from "web3-eth-contract";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import MarketNftAbi from "public/MarketNft.json";

export let contract: Contract | null = null;

export const getContract = ({
  provider,
  contractAddress,
}: {
  provider: Web3;
  contractAddress: string;
}) => {
  if (contract) {
    return contract;
  }
  contract = new provider.eth.Contract(
    MarketNftAbi.abi as AbiItem[],
    contractAddress
  );
  return contract;
};

// ==================
export const listItem = async ({
  contract,
  contractAddress,
  tokenId,
  price,
  senderId,
}: {
  contract: Contract;
  contractAddress: string;
  price: number;
  tokenId: string;
  senderId: string;
}) => {
  try {
    return await contract.methods["listItem(address,uint256,uint256)"](
      contractAddress,
      tokenId,
      price
    ).send({ from: senderId });
  } catch (e) {
    console.log("transfer didn't work", e);
  }
};

// ==================
export const updateListing = async ({
  contract,
  contractAddress,
  tokenId,
  price,
  senderId,
}: {
  contract: Contract;
  contractAddress: string;
  price: number;
  tokenId: string;
  senderId: string;
}) => {
  try {
    return await contract.methods["updateListing(address,uint256,uint256)"](
      contractAddress,
      tokenId,
      price
    ).send({ from: senderId });
  } catch (e) {
    console.log("transfer didn't work", e);
  }
};

// ==================
export const getListing = async ({
  contract,
  contractAddress,
  tokenId,
}: {
  contract: Contract;
  contractAddress: string;
  tokenId: string;
}) => {
  try {
    return await contract.methods["getListing(address,uint256)"](
      contractAddress,
      tokenId
    ).call();
  } catch (e) {
    console.log("transfer didn't work", e);
  }
};
