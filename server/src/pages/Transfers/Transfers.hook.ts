import { useContext, useEffect, useState } from "react";
import AppContext from "src/components/AppContext";
import { getPastTransfer } from "src/services/contractServices/nft/nftContractService";

export const TransfersHook = () => {
  const context = useContext(AppContext);
  const contractNft = context?.values?.contractNft;
  const accountId = context?.values?.accountId;
  const [transfers, setTransfers] = useState<any>();

  useEffect(() => {
    if (contractNft && accountId) {
      getPastTransfer(contractNft, { to: accountId }).then((event) =>
        setTransfers(event)
      );
    }
  }, [contractNft, accountId]);

  return { transfers };
};
