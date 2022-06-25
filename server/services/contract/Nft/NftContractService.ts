import { Contract, PastEventOptions } from "web3-eth-contract";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import NftAbi from "public/Nft.json";
import { createContract } from "services/contract/contractServices";

const CONTRACTADDRESS = process.env.CONTRACT_ADDRESS_NFT || "";
const networkAddress = process.env.NETWORK_ADDRESS || "";
const provider = new Web3(new Web3.providers.HttpProvider(networkAddress));

export let contract: Contract | null = null;

// ==================
// more for backend
export const getContract = () => {
  if (contract) {
    return contract;
  }
  contract = createContract({
    provider,
    contractAddress: CONTRACTADDRESS,
    abi: NftAbi.abi as AbiItem[],
  });
  return contract;
};

// ==================
export const getPastTransfer = async (
  contract: Contract,
  filter?: PastEventOptions["filter"]
) => {
  return await contract.getPastEvents("Transfer", {
    filter: filter,
    fromBlock: 0,
  });
};

// ==================
export const getTransaction = async (provider: Web3, hash: string) => {
  return await provider.eth.getTransaction(hash);
};

// ==================
export const getOwnerOf = async (contract: Contract, tokenId: String) => {
  return await contract.methods.ownerOf(tokenId).call();
};

// ==================
export const getTokenUri = async (contract: Contract, tokenId: String) => {
  return await contract.methods.tokenURI(tokenId).call();
};

// ==================
export const getTokensUri = async (contract: Contract, tokensId: String[]) => {
  const tokensUri = [];
  for (let i = 0; i < tokensId.length; i++) {
    const tokenUri = await getTokenUri(contract, tokensId[i]);
    tokensUri.push(tokenUri);
  }
  return tokensUri;
};

// ==================
export const safeTransferFrom = async ({
  contract,
  tokenId,
  senderId,
  receiverId,
}: {
  contract: Contract;
  tokenId: string;
  senderId: string;
  receiverId: string;
}) => {
  try {
    return await contract.methods["safeTransferFrom(address,address,uint256)"](
      senderId,
      receiverId,
      tokenId
    ).send({ from: senderId });
  } catch (e) {
    console.log("transfer didn't work");
  }
};

// ==================
export const approve = async ({
  contract,
  tokenId,
  senderId,
  to,
}: {
  contract: Contract;
  tokenId: string;
  senderId: string;
  to: string;
}) => {
  return await contract.methods["approve(address,uint256)"](to, tokenId).send({
    from: senderId,
  });
};

// ==================
export const getApproved = async ({
  contract,
  tokenId,
}: {
  contract: Contract;
  tokenId: string;
}) => {
  return await contract.methods["getApproved(uint256)"](tokenId).call();
};

// ==================
export const payToMint = async ({
  contract,
  account,
  uri,
}: {
  contract: Contract;
  account: string;
  uri: Number;
}) => {
  const options = {
    from: account,
    value: Web3.utils.toWei("0.5"),
  };
  try {
    return await contract.methods.payToMint(uri).send(options);
  } catch (e) {
    console.log(e);
    return null;
  }
};
