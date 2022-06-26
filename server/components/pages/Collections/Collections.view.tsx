import React from "react";
import Layout from "components/Layout";
import { Nft } from "components/web3";
import { SellNftForm } from "components/web3/forms/SellNftForm";

export type CollectionsViewProps = {
  nfts?: Nft[];
};

export const CollectionsView = ({ nfts }: CollectionsViewProps) => {
  return (
    <Layout>
      <div className="w-3/4 break-all">
        {nfts?.map((nft) => (
          <div key={nft.id} className="w-60 m-3">
            <Nft metadatapath={nft.uri} />
          </div>
        ))}
      </div>
    </Layout>
  );
};
