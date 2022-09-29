import type { NextPage } from "next";
import { useTitlePrimary } from "TitlePrimary.hook";
import { TitlePrimaryView } from "TitlePrimary.view";

export const TitlePrimaryContainer: NextPage = () => {
  const hook = useTitlePrimaryHook();
  return <TitlePrimaryView {...hook} />;
};
