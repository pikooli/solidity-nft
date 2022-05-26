import React from "react";
import Layout from "components/Layout";
import { Nft } from "components/web3";
import SellNftForm from "components/SellNftForm";

export type CollectionsViewProps = {
  nfts: any;
  setValues: Function;
  values: Obj;
  onSubmit: (e: FormEvent, tokenId: Number) => void;
};

export const CollectionsView = ({
  nfts,
  setValues,
  values,
  onSubmit,
}: CollectionsViewProps) => {
  return (
    <Layout>
      <div className="w-3/4 break-all">
        {nfts?.map((nft: any) => (
          <div key={nft.id} className="border w-60 m-3">
            <Nft metadatapath={nft.uri} />
            <SellNftForm
              setValues={setValues}
              values={values}
              onSubmit={(e: FormEvent) => onSubmit(e, nft.id)}
            />
          </div>
        ))}
      </div>
    </Layout>
  );
};
