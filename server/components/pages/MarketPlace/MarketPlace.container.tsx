import type { NextPage } from "next";
import { useMarketPlace } from "components/pages/MarketPlace/MarketPlace.hook";
import { MarketPlaceView } from "components/pages/MarketPlace/MarketPlace.view";

export const MarketPlace: NextPage = () => {
  const hook = useMarketPlace();
  return <MarketPlaceView {...hook} />;
};
