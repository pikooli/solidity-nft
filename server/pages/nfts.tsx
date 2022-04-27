import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import Layout from "components/Layout";
import AppContext from "components/AppContext";
import contractService from "services/contractService";

const NftPage: NextPage = () => {
  const context = useContext(AppContext);
  const contract = context?.values?.contract;
  const account = context?.values?.account;
  const [tokens, setTokens] = useState<any>();

  useEffect(() => {
    if (contract && account) {
      contractService
        .getPastTransfer(contract, account)
        .then((events) =>
          setTokens(events.map((event) => event.returnValues.tokenId))
        );
    }
  }, [contract]);

  return (
    <Layout>
      <div className="w-3/4 break-all">
        {tokens?.map((token: Number) => token)}
      </div>
    </Layout>
  );
};

export default NftPage;
