import { Contract } from "web3-eth-contract";

const getPastTransfer = async (contract: Contract, from: string) => {
  return await contract.getPastEvents("Transfer", {
    filter: { _from: from },
    fromBlock: 0,
  });
};

export default { getPastTransfer };
