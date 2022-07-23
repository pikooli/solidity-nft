import { useEffect, useState } from "react";
import { fetchListOfAccounts } from "src/services/apiServices";

export const IndexHook = () => {
  const [accounts, setAccounts] = useState<Account[]>();

  useEffect(() => {
    fetchListOfAccounts().then((accounts: Account[]) => {
      setAccounts(accounts);
    });
  }, []);

  return { accounts };
};
