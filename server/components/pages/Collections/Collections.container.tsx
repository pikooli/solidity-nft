import type { NextPage } from "next";
import { CollectionsHook } from "components/pages/Collections/Collections.hook";
import { CollectionsView } from "components/pages/Collections/Collections.view";

export const Collections: NextPage = () => {
  const hook = CollectionsHook();
  return <CollectionsView {...hook} />;
};
