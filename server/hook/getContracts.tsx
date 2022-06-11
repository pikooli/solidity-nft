import Web3 from "web3";
import { getContract as createContractNft } from "services/NftContractService";
import { getContract as createContractMarketNft } from "services/MarketNftContractService";

//
const getContractNft = async (provider: Web3) => {
  if (provider) {
    const networkId = await provider.eth.net.getId();
    if (networkId == 5777) {
      const contractAddress = process.env.CONTRACT_ADDRESS_NFT || "";
      return createContractNft({
        provider,
        contractAddress,
      });
    } else {
      console.log("connect to Ganache network");
    }
  }
};

//
const getContractMarketNft = async (provider: Web3) => {
  if (provider) {
    const networkId = await provider.eth.net.getId();
    if (networkId == 5777) {
      const contractAddress = process.env.CONTRACT_ADDRESS_MARKET || "";
      return createContractMarketNft({
        provider,
        contractAddress,
      });
    } else {
      console.log("connect to Ganache network");
    }
  }
};

export default { getContractNft, getContractMarketNft };
