import { Contract } from "web3-eth-contract";
import { approve, getApproved } from "services/contract/Nft/NftContractService";
import {
  listItem,
  updateListing,
  getListing,
  buyItem,
  cancelListing,
} from "services/contract/Marketplace/MarketNftContractService";

// here is function that can make some check and call multiple function of the contract
const CONTRACTADDRESS = process.env.CONTRACT_ADDRESS_MARKET || "";
const NULL_ADDRESS = "0x0000000000000000000000000000000000000000";

type ListNft = {
  contractNft: Contract;
  contractMarket: Contract;
  to: string;
  price: number;
  tokenId: string;
  senderId: string;
  contractAddress: string;
};

//
export const listNft = async ({
  contractNft,
  contractMarket,
  to,
  price,
  tokenId,
  senderId,
  contractAddress,
}: ListNft) => {
  const approved = await getApproved({
    contract: contractNft,
    tokenId,
  });
  if (approved !== to) {
    const translation = await approve({
      contract: contractNft,
      tokenId,
      senderId,
      to,
    });
    if (!translation.transactionHash) {
      return;
    }
  }
  const transactionListing = await getListing({
    contract: contractMarket,
    contractAddress,
    tokenId,
  });
  if (
    transactionListing &&
    transactionListing.price != price &&
    transactionListing.seller != NULL_ADDRESS
  ) {
    const translation = await updateListing({
      contract: contractMarket,
      contractAddress,
      price,
      tokenId,
      senderId,
    });
    return translation;
  }
  const translation = await listItem({
    contract: contractMarket,
    contractAddress,
    price,
    tokenId,
    senderId,
  });
  return translation;
};

type CancelListingNft = {
  contractMarket: Contract;
  tokenId: string;
  senderId: string;
  contractAddress: string;
};
//
export const cancelListingNft = async ({
  contractMarket,
  tokenId,
  senderId,
  contractAddress,
}: CancelListingNft) => {
  const transactionListing = await getListing({
    contract: contractMarket,
    contractAddress,
    tokenId,
  });
  if (transactionListing && transactionListing.seller != NULL_ADDRESS) {
    const translation = await cancelListing({
      contract: contractMarket,
      contractAddress,
      tokenId,
      senderId,
    });
    return translation;
  }
};

type BuyNft = {
  contractNft: Contract;
  contractMarket: Contract;
  tokenId: string;
  senderId: string;
  contractAddress: string;
};

//
export const buyNft = async ({
  contractNft,
  contractMarket,
  tokenId,
  senderId,
  contractAddress,
}: BuyNft) => {
  const approved = await getApproved({
    contract: contractNft,
    tokenId,
  });
  if (approved !== CONTRACTADDRESS) {
    return;
  }

  const transactionListing = await getListing({
    contract: contractMarket,
    contractAddress,
    tokenId,
  });
  if (transactionListing) {
    if (!transactionListing.price) {
      return;
    }
  }
  const translation = await buyItem({
    contract: contractMarket,
    contractAddress,
    tokenId,
    senderId,
    price: transactionListing.price,
  });
  return translation;
};
