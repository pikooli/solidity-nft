import { useEffect, useState } from "react";
import { fetchListSellNfts } from "src/services/apiServices";

export const useMarketPlace = () => {
  const [nfts, setNfts] = useState<Nft[]>();

  useEffect(() => {
    fetchListSellNfts().then((nfts) => {
      if (nfts) {
        setNfts(nfts);
      }
    });
  }, []);

  return {
    nfts,
  };
};
