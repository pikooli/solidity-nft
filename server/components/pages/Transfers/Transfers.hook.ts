import { useContext, useEffect, useState } from "react";
import AppContext from "components/AppContext";
import { getPastTransfer } from "services/NftContractService";

export const TransfersHook = () => {
  const context = useContext(AppContext);
  const contractNft = context?.values?.contractNft;
  const account = context?.values?.account;
  const [transfers, setTransfers] = useState<any>();

  useEffect(() => {
    if (contractNft && account) {
      getPastTransfer(contractNft, { to: account }).then((event) =>
        setTransfers(event)
      );
    }
  }, [contractNft]);

  return { transfers };
};
