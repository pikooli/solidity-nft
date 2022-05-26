import type { NextPage } from "next";
import { IndexHook } from "components/pages/Index/Index.hook";
import { IndexView } from "components/pages/Index/Index.view";

export const Index: NextPage = () => {
  const hook = IndexHook();
  return <IndexView {...hook} />;
};
