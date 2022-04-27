import Web3 from "web3";

const getAccount = async (provider: Web3) => {
  const account = await provider?.eth.getAccounts();
  return account && account[0];
};

export default getAccount;
