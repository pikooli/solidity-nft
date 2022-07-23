import React from "react";
import { useSellNftForm } from "src/components/web3/forms/SellNftForm/SellNftForm.hook";
import { SellNftFormView } from "src/components/web3/forms/SellNftForm/SellNftForm.view";

type SellNftFormProps = {
  nft: Nft;
};

export const SellNftForm = (props: SellNftFormProps) => {
  const { nft } = props;
  const hook = useSellNftForm({ nft });
  return <SellNftFormView {...hook} nft={nft} />;
};
