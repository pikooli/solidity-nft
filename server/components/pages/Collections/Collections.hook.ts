import { useContext, useEffect, useState } from "react";
import { fetchAccountNft } from "services/api/ApiService";
import AppContext from "components/AppContext";

export const CollectionsHook = () => {
  const context = useContext(AppContext);
  const account = context?.values?.account;
  const [nfts, setNfts] = useState<Nft[]>();

  useEffect(() => {
    if (account) {
      fetchAccountNft(account).then((nfts) => {
        setNfts(nfts);
      });
    }
  }, [account]);

  return {
    nfts,
  };
};
