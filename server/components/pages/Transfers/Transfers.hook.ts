import { useContext, useEffect, useState } from "react";
import AppContext from "components/AppContext";
import { getPastTransfer } from "services/contractService";

export const TransfersHook = () => {
  const context = useContext(AppContext);
  const contract = context?.values?.contract;
  const account = context?.values?.account;
  const [transfers, setTransfers] = useState<any>();

  useEffect(() => {
    if (contract && account) {
      getPastTransfer(contract, { to: account }).then((event) =>
        setTransfers(event)
      );
    }
  }, [contract]);

  return { transfers };
};
