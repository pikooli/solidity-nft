import { useContext, useEffect, useState } from "react";
import AppContext from "components/AppContext";
import {} from "services/contract/Marketplace/MarketNftContractService";

const URL = "/api/listnft";

export const useMarketPlace = () => {
  const context = useContext(AppContext);
  const account = context?.values?.account;
  const [nfts, setNfts] = useState<Nft[]>();

  useEffect(() => {
    // if (account) {
    //   fetch({ url: URL, params: { account } }).then((res) => {
    //     if (res.status === 200) {
    //       res.json().then((data) => {
    //         setNfts(data.nfts);
    //       });
    //     }
    //   });
    // }
  }, [account]);

  return {
    nfts,
  };
};
