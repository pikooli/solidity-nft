import { Contract, PastEventOptions } from "web3-eth-contract";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import GameItemAbi from "public/GameItem.json";

export const createContract = ({
  provider,
  contractAddress,
}: {
  provider: Web3;
  contractAddress: string;
}) => {
  const contract = new provider.eth.Contract(
    GameItemAbi.abi as AbiItem[],
    contractAddress
  );
  return contract;
};

export const getPastTransfer = async (
  contract: Contract,
  filter?: PastEventOptions["filter"]
) => {
  return await contract.getPastEvents("Transfer", {
    filter: filter,
    fromBlock: 0,
  });
};

export const getTransaction = async (provider: Web3, hash: string) => {
  return await provider.eth.getTransaction(hash);
};

export const getOwnerOf = async (contract: Contract, tokenId: Number) => {
  return await contract.methods.ownerOf(tokenId).call();
};

export const getTokenUri = async (contract: Contract, tokenId: Number) => {
  return await contract.methods.tokenURI(tokenId).call();
};

export const getTokensUri = async (contract: Contract, tokensId: Number[]) => {
  const tokensUri = [];
  for (let i = 0; i < tokensId.length; i++) {
    const tokenUri = await getTokenUri(contract, tokensId[i]);
    tokensUri.push(tokenUri);
  }
  return tokensUri;
};

export default {
  getPastTransfer,
  getOwnerOf,
  getTokenUri,
  getTokensUri,
  getTransaction,
  createContract,
};
