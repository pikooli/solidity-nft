import type { NextPage } from "next";
import { useNft } from "src/components/web3/Nft/Nft.hook";
import { NftView } from "src/components/web3/Nft/Nft.view";

type Props = { metadatapath: string; className?: string };

export const Nft = (props: Props) => {
  const { metadatapath, className } = props;
  const hook = useNft({ metadatapath });
  return <NftView {...hook} className={className} />;
};
