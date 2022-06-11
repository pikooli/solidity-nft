import React from "react";
import Layout from "components/Layout";

export type MarketPlaceViewProps = { nfts?: Nft[] };

export const MarketPlaceView = ({ nfts }: MarketPlaceViewProps) => {
  return (
    <Layout>
      <div className="w-3/4 break-all"></div>
    </Layout>
  );
};
