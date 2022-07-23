import { Contract } from "web3-eth-contract";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import NftAbi from "public/Nft.json";
import MarketNftAbi from "public/MarketNft.json";
import {
  MARKET_CONTRACT_ADDRESS,
  NFT_CONTRACT_ADDRESS,
  NETWORK_ADDRESS,
} from "src/constants";

const provider = new Web3(new Web3.providers.HttpProvider(NETWORK_ADDRESS));

let contractNft: Contract | null = null;
let contractMarket: Contract | null = null;

// create a contract interface for use in backend
export const createContract = ({
  provider,
  contractAddress,
  abi,
}: {
  provider: Web3;
  contractAddress: string;
  abi: AbiItem[];
}) => {
  return new provider.eth.Contract(abi as AbiItem[], contractAddress);
};

// ==================

export const getContractNft = () => {
  if (contractNft) {
    return contractNft;
  }
  contractNft = createContract({
    provider,
    contractAddress: NFT_CONTRACT_ADDRESS,
    abi: NftAbi.abi as AbiItem[],
  });
  return contractNft;
};

export const getContractMarket = () => {
  if (contractMarket) {
    return contractMarket;
  }
  contractMarket = createContract({
    provider,
    contractAddress: MARKET_CONTRACT_ADDRESS,
    abi: MarketNftAbi.abi as AbiItem[],
  });
  return contractMarket;
};
