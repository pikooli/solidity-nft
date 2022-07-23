import Web3 from "web3";
import { AbiItem } from "web3-utils";
import NftAbi from "public/Nft.json";
import MarketNftAbi from "public/MarketNft.json";

//
export const getContractNft = async (provider: Web3) => {
  if (provider) {
    const networkId = await provider.eth.net.getId();
    if (networkId == 5777) {
      const contractAddress = process.env.CONTRACT_ADDRESS_NFT || "";
      return new provider.eth.Contract(
        NftAbi.abi as AbiItem[],
        contractAddress
      );
    } else {
      console.log("connect to Ganache network");
    }
  }
};

//
export const getContractMarketNft = async (provider: Web3) => {
  if (provider) {
    const networkId = await provider.eth.net.getId();
    if (networkId == 5777) {
      const contractAddress = process.env.CONTRACT_ADDRESS_MARKET || "";
      return new provider.eth.Contract(
        MarketNftAbi.abi as AbiItem[],
        contractAddress
      );
    } else {
      console.log("connect to Ganache network");
    }
  }
};
