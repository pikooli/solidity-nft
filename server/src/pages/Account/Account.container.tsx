import type { NextPage } from "next";
import { AccountHook } from "src/pages/Account/Account.hook";
import { AccountView } from "src/pages/Account/Account.view";

export const Account: NextPage = () => {
  const hook = AccountHook();
  return <AccountView {...hook} />;
};
