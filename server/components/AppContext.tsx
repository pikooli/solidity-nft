import React, { useState, createContext, useEffect } from "react";
import getWeb3 from "services/getWeb3";
import getContract from "hook/getContract";
import getAccount from "hook/getAccount";

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
      const contract = await getContract(web3);
      const account = await getAccount(web3);
      setValues((prev: ContextValues) => ({
        ...prev,
        provider: web3,
        account,
        contract,
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
