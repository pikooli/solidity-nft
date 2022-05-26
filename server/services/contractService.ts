import { Contract, PastEventOptions } from "web3-eth-contract";
import Web3 from "web3";
import { AbiItem } from "web3-utils";
import ContractAbi from "public/MarketNft.json";

export let contract: Contract | null = null;

// ==================
// more for backend
export const getContract = ({
  provider,
  contractAddress,
}: {
  provider: Web3;
  contractAddress: string;
}) => {
  if (contract) {
    return contract;
  }
  contract = new provider.eth.Contract(
    ContractAbi.abi as AbiItem[],
    contractAddress
  );
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
export const getOwnerOf = async (contract: Contract, tokenId: Number) => {
  return await contract.methods.ownerOf(tokenId).call();
};

// ==================
export const getTokenUri = async (contract: Contract, tokenId: Number) => {
  return await contract.methods.tokenURI(tokenId).call();
};

// ==================
export const getTokensUri = async (contract: Contract, tokensId: Number[]) => {
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
  tokenId: Number;
  senderId: Number;
  receiverId: Number;
}) => {
  try {
    const transfer = await contract.methods.safeTransferFrom(
      senderId,
      receiverId,
      tokenId
    );
    return transfer;
  } catch (e) {
    console.log("transfer didn't work");
  }
};

// ==================
export const approve = async ({
  contract,
  tokenId,
  to,
}: {
  contract: Contract;
  tokenId: Number;
  to: Number;
}) => {
  await contract.methods.approve(to, tokenId);
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
    const response = await contract.methods.payToMint(uri).send(options);
    return response;
  } catch (e) {
    return null;
  }
};
