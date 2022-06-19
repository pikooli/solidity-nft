import { useContext, useEffect, useState } from "react";
import AppContext from "components/AppContext";
import {} from "services/contract/Marketplace/MarketNftContractService";
import { fetchSellNfts } from "services/api/ApiService";

export const useMarketPlace = () => {
  const context = useContext(AppContext);
  const account = context?.values?.account;
  const [nfts, setNfts] = useState<Nft[]>();

  useEffect(() => {
    fetchSellNfts().then((nfts) => {
      if (nfts) {
        console.log(nfts);
        setNfts(nfts);
      }
    });
  }, [account]);

  return {
    nfts,
  };
};
