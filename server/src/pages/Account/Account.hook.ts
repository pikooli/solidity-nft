import { useEffect, useState } from "react";
import { fetchAccountWithNfts } from "src/services/apiServices";
import { useRouter } from "next/router";

export const AccountHook = () => {
  const router = useRouter();
  const { id } = router.query;
  const [nfts, setNfts] = useState<Nft[]>();

  useEffect(() => {
    if (id) {
      fetchAccountWithNfts({ accountId: id as string }).then((nfts) => {
        setNfts(nfts);
      });
    }
  }, [id]);

  return {
    nfts,
    id: id as string,
  };
};
