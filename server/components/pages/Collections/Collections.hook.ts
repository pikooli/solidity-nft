import { useContext, useEffect, useState } from "react";
import fetch from "lib/customFetch";
import AppContext from "components/AppContext";

const URL = "/api/listnft";

export const CollectionsHook = () => {
  const context = useContext(AppContext);
  const account = context?.values?.account;
  const [nfts, setNfts] = useState<any>();
  const [values, setValues] = useState<Obj>({});

  useEffect(() => {
    if (account) {
      fetch({ url: URL, params: { account } }).then((res) => {
        if (res.status === 200) {
          res.json().then((data) => {
            setNfts(data.nfts);
          });
        }
      });
    }
  }, [account]);

  const onSubmit = (e: FormEvent, tokenId: Number) => {
    e.preventDefault();
    // approve({ contract, tokenId, to:  });
  };

  return {
    nfts,
    setValues,
    values,
    onSubmit,
  };
};
