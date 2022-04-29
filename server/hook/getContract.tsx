import Web3 from "web3";
import { createContract } from "services/contractService";

const getContract = async (provider: Web3) => {
  if (provider) {
    const networkId = await provider.eth.net.getId();
    if (networkId == 5777) {
      const contractAddress = process.env.CONTRACT_ADDRESS || "";
      return createContract({
        provider,
        contractAddress,
      });
    } else {
      console.log("connect to Ganache network");
    }
  }
};

export default getContract;
