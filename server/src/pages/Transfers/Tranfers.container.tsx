import type { NextPage } from "next";
import { TransfersHook } from "src/pages/Transfers/Transfers.hook";
import { TransfersView } from "src/pages/Transfers/Transfers.view";

export const Transfers: NextPage = () => {
  const hook = TransfersHook();
  return <TransfersView {...hook} />;
};
