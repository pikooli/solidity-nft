import React from "react";
import { useBuyNftForm } from "src/components/web3/forms/BuyNftForm/BuyNftForm.hook";
import { BuyNftFormView } from "src/components/web3/forms/BuyNftForm/BuyNftForm.view";

type BuyNftFormProps = {
  nft: Nft;
};

export const BuyNftForm = (props: BuyNftFormProps) => {
  const { nft } = props;
  const hook = useBuyNftForm({ nft });
  return <BuyNftFormView {...hook} nft={nft} />;
};
