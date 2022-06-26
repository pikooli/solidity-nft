import React from "react";
import Layout from "components/Layout";
import { Nft } from "components/web3";
import { SellNftForm, UnSellNftForm } from "components/web3/forms";

export type NftViewProps = {
  nft?: Nft;
};

export const NftView = ({ nft }: NftViewProps) => {
  if (!nft) {
    return null;
  }
  const UnSell = () => (
    <div className="w-60 m-3">
      <UnSellNftForm nft={nft} />
    </div>
  );

  return (
    <Layout>
      <div className="flex">
        <div className="w-60 m-3">
          <Nft metadatapath={nft.uri} />
        </div>
        <div className="w-60 m-3">
          <SellNftForm nft={nft} />
        </div>
        {nft.price ? <UnSell /> : null}
      </div>
    </Layout>
  );
};
