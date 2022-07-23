import { useContext, useEffect, useState } from "react";
import { fetchAccountWithNfts } from "src/services/apiServices";
import AppContext from "src/components/AppContext";

export const useProfile = () => {
  const context = useContext(AppContext);
  const accountId = context?.values?.accountId;
  const [account, setAccount] = useState<Account>();
  useEffect(() => {
    if (accountId) {
      fetchAccountWithNfts({ accountId }).then((account) => {
        setAccount(account);
      });
    }
  }, [accountId]);

  return {
    account,
  };
};
