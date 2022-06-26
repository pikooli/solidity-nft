import React from "react";
import Link from "next/link";
import Layout from "components/Layout";
import { Nft } from "components/web3";

export type CollectionsViewProps = {
  nfts?: Nft[];
};

const URL = "nft";

export const CollectionsView = ({ nfts }: CollectionsViewProps) => {
  return (
    <Layout>
      <div className="w-3/4 break-all">
        {nfts?.map((nft) => (
          <div className="w-60 m-3" key={nft.id}>
            <Link href={`${URL}/${nft.id}`}>
              <a>
                <Nft metadatapath={nft.uri} />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};
