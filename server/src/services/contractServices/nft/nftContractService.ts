import { Contract, PastEventOptions } from "web3-eth-contract";
import Web3 from "web3";

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
  accountId,
  uri,
}: {
  contract: Contract;
  accountId: string;
  uri: Number;
}) => {
  const options = {
    from: accountId,
    value: Web3.utils.toWei("0.5"),
  };
  try {
    return await contract.methods.payToMint(uri).send(options);
  } catch (e) {
    console.log(e);
    return null;
  }
};
