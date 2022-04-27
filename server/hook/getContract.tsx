import Web3 from "web3";
import { AbiItem } from "web3-utils";
import GameItemAbi from "public/GameItem.json";

const getContract = async (provider: Web3) => {
  if (provider) {
    const networkId = await provider.eth.net.getId();
    if (networkId == 5777) {
      const deployedNetwork = GameItemAbi.networks[networkId];
      const instance = new provider.eth.Contract(
        GameItemAbi.abi as AbiItem[],
        deployedNetwork && deployedNetwork.address
      );
      return instance;
    } else {
      console.log("connect to Ganache network");
    }
  }
};

export default getContract;
