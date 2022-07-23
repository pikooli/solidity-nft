import React from "react";
import Link from "next/link";
import Layout from "src/components/Layout";
import { Nft } from "src/components/web3";

export type ProfileViewProps = {
  account?: Account;
};

const URL = "nft";

const Nfts = (nfts?: Nft[]) => {
  return nfts?.map((nft) => (
    <div className="border bg-sky-200 break-all mt-5" key={nft.id}>
      <div className="w-60 m-3">
        <Link href={`${URL}/${nft.id}`}>
          <a>
            <Nft metadatapath={nft.uri} />
            {nft.price ? (
              <p className="bg-sky-400 border p-3">price : {nft.price}</p>
            ) : null}
          </a>
        </Link>
      </div>
    </div>
  ));
};

export const ProfileView = ({ account }: ProfileViewProps) => {
  const nfts = account?.nfts;
  return (
    <Layout>
      <p>Account id : {account?.id}</p>
      {Nfts(nfts)}
    </Layout>
  );
};
