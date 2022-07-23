import React from "react";
import Link from "next/link";
import Layout from "src/components/Layout";
import { Nft } from "src/components/web3";

export type AccountViewProps = {
  nfts?: Nft[];
  id: string;
};

const URL = "nft";

export const AccountView = ({ nfts, id }: AccountViewProps) => {
  return (
    <Layout>
      <h1>Profile of {id}</h1>
      <div className="w-3/4 break-all">
        {nfts?.map((nft) => (
          <div className="w-60 m-3" key={nft.id}>
            <Link href={`${URL}/${nft.id}`}>
              <a>
                <Nft metadatapath={nft.uri} />
                {nft.price ? (
                  <p className="bg-sky-400 border p-3">price : {nft.price}</p>
                ) : null}
              </a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};
