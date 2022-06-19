import { useState, useContext, useEffect, useCallback } from "react";
import AppContext from "components/AppContext";
import { listNft } from "services/contract/Marketplace/MarketNftService";
import { updatePriceNft } from "services/api/ApiService";

type Props = {
  nft: Nft;
};

export const useSellNftForm = ({ nft }: Props) => {
  const [values, setValues] = useState<Obj>({
    price: nft.price,
  });
  const [response, setResponse] = useState("");
  const context = useContext(AppContext);

  const ListNftToSell = useCallback(async () => {
    const to = process.env.CONTRACT_ADDRESS_MARKET;
    const contractAddress = process.env.CONTRACT_ADDRESS_NFT;
    const account = context?.values?.account;
    const contractNft = context?.values?.contractNft;
    const contractMarketNft = context?.values?.contractMarketNft;
    const tokenId = nft.id;
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
        await updatePriceNft({ tokenId: Number(tokenId), price, account });
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
