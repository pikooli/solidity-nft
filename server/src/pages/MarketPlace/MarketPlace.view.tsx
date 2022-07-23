import React from "react";
import Layout from "src/components/Layout";
import { Nft } from "src/components/web3";
import { BuyNftForm } from "src/components/web3/forms/BuyNftForm";

export type MarketPlaceViewProps = { nfts?: Nft[] };

export const MarketPlaceView = ({ nfts }: MarketPlaceViewProps) => {
  return (
    <Layout>
      <div className="w-3/4 break-all">
        {nfts?.map((nft) => (
          <div key={nft.id} className="border w-60 m-3">
            <Nft metadatapath={nft.uri} />
            <BuyNftForm nft={nft} />
          </div>
        ))}
      </div>
    </Layout>
  );
};
