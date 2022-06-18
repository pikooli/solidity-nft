import Web3 from "web3";
import { AbiItem } from "web3-utils";

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
