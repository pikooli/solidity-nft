import { useContext, useEffect, useState } from "react";
import { fetchAccountNfts } from "services/api/ApiService";
import AppContext from "components/AppContext";

export const CollectionsHook = () => {
  const context = useContext(AppContext);
  const account = context?.values?.account;
  const [nfts, setNfts] = useState<Nft[]>();

  useEffect(() => {
    if (account) {
      fetchAccountNfts(account).then((nfts) => {
        setNfts(nfts);
      });
    }
  }, [account]);

  return {
    nfts,
  };
};
