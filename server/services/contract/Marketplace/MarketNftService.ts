import { Contract } from "web3-eth-contract";
import { approve, getApproved } from "services/contract/Nft/NftContractService";
import {
  listItem,
  updateListing,
  getListing,
} from "services/contract/Marketplace/MarketNftContractService";

// here is function that can make some check and call multiple function of the contract

type ListNft = {
  contractNft: Contract;
  contractMarket: Contract;
  to: string;
  price: number;
  tokenId: string;
  senderId: string;
  contractAddress: string;
};

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
  if (transactionListing) {
    if (transactionListing.price !== price) {
      const translation = await updateListing({
        contract: contractMarket,
        contractAddress,
        price,
        tokenId,
        senderId,
      });
      return translation;
    }
    return;
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
