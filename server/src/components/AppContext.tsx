import React, { useState, createContext, useEffect } from "react";
import getWeb3 from "src/services/getWeb3";
import * as getContract from "src/hook/getContracts";
import getAccount from "src/hook/getAccount";

//
const AppContext = createContext<GlobalContext | null>(null);

export default AppContext;

type Props = {
  children: React.ReactNode;
};

//
export const AppProvider: React.FC<Props> = ({ children }) => {
  const [values, setValues] = useState<Obj>({});
  useEffect(() => {
    getWeb3().then(async (web3) => {
      const contractNft = await getContract.getContractNft(web3);
      const contractMarketNft = await getContract.getContractMarketNft(web3);
      const accountId = await getAccount(web3);
      setValues((prev: ContextValues) => ({
        ...prev,
        provider: web3,
        accountId,
        contractNft,
        contractMarketNft,
      }));
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        values,
        setValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
