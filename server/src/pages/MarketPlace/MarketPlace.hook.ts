import { useEffect, useState } from "react";
import {} from "src/services/contractServices/marketplace/marketNftContractService";
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
