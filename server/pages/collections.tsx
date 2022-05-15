import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import fetch from "lib/customFetch";
import Layout from "components/Layout";
import AppContext from "components/AppContext";
import { Nft } from "components/web3";
import SellNftForm from "components/SellNftForm";

const URL = "/api/listnft";

const Collections: NextPage = () => {
  const context = useContext(AppContext);
  const account = context?.values?.account;
  const [nfts, setNfts] = useState<any>();
  const [values, setValues] = useState<Obj>({});

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

  const onSubmit = () => {};

  return (
    <Layout>
      <div className="w-3/4 break-all">
        {nfts?.map((nft: any) => (
          <div key={nft.id} className="border w-60 m-3">
            <Nft metadatapath={nft.uri} />
            <SellNftForm setValues={setValues} values={values} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Collections;
