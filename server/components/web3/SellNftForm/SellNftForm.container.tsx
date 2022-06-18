import React from "react";
import { useSellNftForm } from "components/web3/SellNftForm/SellNftForm.hook";
import { SellNftFormView } from "components/web3/SellNftForm/SellNftForm.view";

type SellNftFormProps = {
  nft: Nft;
};

export const SellNftForm = (props: SellNftFormProps) => {
  const { nft } = props;
  const hook = useSellNftForm({ nft });
  return <SellNftFormView {...hook} nft={nft} />;
};
