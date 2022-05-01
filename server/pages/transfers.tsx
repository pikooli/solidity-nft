import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import Layout from "components/Layout";
import AppContext from "components/AppContext";
import Transfer from "components/web3/Transfer";
import contractService from "services/contractService";

const TransferPage: NextPage = () => {
  const context = useContext(AppContext);
  const contract = context?.values?.contract;
  const account = context?.values?.account;
  const [transfers, setTransfers] = useState<any>();

  useEffect(() => {
    if (contract && account) {
      contractService
        .getPastTransfer(contract, { to: account })
        .then((event) => setTransfers(event));
    }
  }, [contract]);

  return (
    <Layout>
      <div className="w-3/4 break-all">
        {transfers?.map((transfer: Transfer) => (
          <Transfer
            className="mb-3 border p-3"
            transfer={transfer}
            key={transfer.transactionHash}
          />
        ))}
      </div>
    </Layout>
  );
};

export default TransferPage;
