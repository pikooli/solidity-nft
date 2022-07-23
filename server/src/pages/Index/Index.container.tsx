import type { NextPage } from "next";
import { IndexHook } from "src/pages/Index/Index.hook";
import { IndexView } from "src/pages/Index/Index.view";

export const Index: NextPage = () => {
  const hook = IndexHook();
  return <IndexView {...hook} />;
};
