import type { NextPage } from "next";
import { useMarketPlace } from "src/pages/MarketPlace/MarketPlace.hook";
import { MarketPlaceView } from "src/pages/MarketPlace/MarketPlace.view";

export const MarketPlace: NextPage = () => {
  const hook = useMarketPlace();
  return <MarketPlaceView {...hook} />;
};
