import { Contract } from "web3-eth-contract";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import GameItemAbi from "public/GameItem.json";

export const createContract = ({
  provider,
  contractAddress,
}: {
  contractAddress: string;
  provider?: Web3;
}) => {
  const networkAddress = process.env.NETWORK_ADDRESS || "";
  if (!provider)
    provider = new Web3(new Web3.providers.HttpProvider(networkAddress));
  const contract = new provider.eth.Contract(
    GameItemAbi.abi as AbiItem[],
    contractAddress
  );
  return contract;
};

export const getPastTransfer = async (contract: Contract, to: string) => {
  return await contract.getPastEvents("Transfer", {
    filter: { to },
    fromBlock: 0,
  });
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
  createContract,
};
