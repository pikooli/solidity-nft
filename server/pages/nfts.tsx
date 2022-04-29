import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import fetch from "lib/customFetch";
import Layout from "components/Layout";
import AppContext from "components/AppContext";

const URL = "/api/listnft";

const NftPage: NextPage = () => {
  const context = useContext(AppContext);
  const account = context?.values?.account;
  const [nfts, setNfts] = useState<any>();

  useEffect(() => {
    if (account) {
      fetch({ url: URL, params: { account } }).then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setNfts(data.nfts);
          });
        }
      });
    }
  }, [account]);

  return (
    <Layout>
      <div className="w-3/4 break-all">
        {nfts?.map((nft: Number) => JSON.stringify(nft))}
      </div>
    </Layout>
  );
};

export default NftPage;
