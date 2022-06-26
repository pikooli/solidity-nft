import { Contract } from "web3-eth-contract";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import MarketNftAbi from "public/MarketNft.json";
import { createContract } from "services/contract/contractServices";

const CONTRACTADDRESS = process.env.CONTRACT_ADDRESS_MARKET || "";
const networkAddress = process.env.NETWORK_ADDRESS || "";
const provider = new Web3(new Web3.providers.HttpProvider(networkAddress));

export let contract: Contract | null = null;
// only function directely connected to the contract

// More for backend use
export const getContract = () => {
  if (contract) {
    return contract;
  }
  contract = createContract({
    provider,
    contractAddress: CONTRACTADDRESS,
    abi: MarketNftAbi.abi as AbiItem[],
  });
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

// ==================
export const buyItem = async ({
  contract,
  contractAddress,
  tokenId,
  senderId,
  price,
}: {
  contract: Contract;
  contractAddress: string;
  tokenId: string;
  senderId: string;
  price: string;
}) => {
  try {
    return await contract.methods["buyItem(address,uint256)"](
      contractAddress,
      tokenId
    ).send({ from: senderId, value: Web3.utils.toWei(price) });
  } catch (e) {
    console.log("transfer didn't work", e);
  }
};

// ==================
export const cancelListing = async ({
  contract,
  contractAddress,
  tokenId,
  senderId,
}: {
  contract: Contract;
  contractAddress: string;
  tokenId: string;
  senderId: string;
}) => {
  try {
    return await contract.methods["cancelListing(address,uint256)"](
      contractAddress,
      tokenId
    ).send({ from: senderId });
  } catch (e) {
    console.log("transfer didn't work", e);
  }
};
