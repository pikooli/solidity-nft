import type { NextPage } from "next";
import { TransfersHook } from "components/pages/Transfers/Transfers.hook";
import { TransfersView } from "components/pages/Transfers/Transfers.view";

export const Transfers: NextPage = () => {
  const hook = TransfersHook();
  return <TransfersView {...hook} />;
};
