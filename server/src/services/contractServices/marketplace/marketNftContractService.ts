import { Contract } from "web3-eth-contract";
import Web3 from "web3";

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
