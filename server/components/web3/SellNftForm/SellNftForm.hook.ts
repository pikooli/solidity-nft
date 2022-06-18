import { useState, useContext, useEffect, useCallback } from "react";
import AppContext from "components/AppContext";
import { listNft } from "services/contract/Marketplace/MarketNftService";
import fetch from "lib/customFetch";

type Props = {
  nft: Nft;
};

const URL_UPDATE = "/api/updatenft";

export const useSellNftForm = ({ nft }: Props) => {
  const [values, setValues] = useState<Obj>({
    price: nft.price,
  });
  const [response, setResponse] = useState("");
  const context = useContext(AppContext);
  const account = context?.values?.account;
  const contractNft = context?.values?.contractNft;
  const contractMarketNft = context?.values?.contractMarketNft;
  const to = process.env.CONTRACT_ADDRESS_MARKET;
  const tokenId = nft.id;
  const contractAddress = process.env.CONTRACT_ADDRESS_NFT;

  useEffect(() => {
    console.log(nft);
  }, []);

  const ListNftToSell = useCallback(async () => {
    const price = values.price;
    if (to && contractNft && contractMarketNft && contractAddress && account) {
      const transaction = await listNft({
        contractNft: contractNft,
        contractMarket: contractMarketNft,
        contractAddress,
        to,
        price,
        tokenId,
        senderId: account,
      });
      if (transaction) {
        const body = {
          tokenId,
          price,
          account,
        };
        fetch({ url: URL_UPDATE, method: "POST", body }).then((res) => {
          console.log(res);
          res.json().then((data) => console.log(data));
        });
        return setResponse("Nft price is set");
      }
      setResponse("Something went wrong");
    }
  }, [values]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await ListNftToSell();
  };

  return { onSubmit, setValues, values, response };
};
