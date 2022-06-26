import React from "react";
import { useUnSellNftForm } from "components/web3/forms/UnSellNftForm/UnSellNftForm.hook";
import { UnSellNftFormView } from "components/web3/forms/UnSellNftForm/UnSellNftForm.view";

type UnSellNftFormProps = {
  nft: Nft;
};

export const UnSellNftForm = (props: UnSellNftFormProps) => {
  const { nft } = props;
  const hook = useUnSellNftForm({ nft });
  return <UnSellNftFormView {...hook} />;
};
