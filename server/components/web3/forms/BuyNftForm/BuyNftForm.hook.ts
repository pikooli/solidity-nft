import { useState, useContext, useCallback } from "react";
import AppContext from "components/AppContext";
import { buyNft } from "services/contract/Marketplace/MarketNftService";
import { updatePriceNft } from "services/api/ApiService";

type Props = {
  nft: Nft;
};

export const useBuyNftForm = ({ nft }: Props) => {
  const [response, setResponse] = useState("");
  const context = useContext(AppContext);

  const onBuyNft = useCallback(async () => {
    const contractAddress = process.env.CONTRACT_ADDRESS_NFT;
    const account = context?.values?.account;
    const contractNft = context?.values?.contractNft;
    const contractMarketNft = context?.values?.contractMarketNft;
    const tokenId = nft.id;

    if (contractNft && contractMarketNft && contractAddress && account) {
      const transaction = await buyNft({
        contractNft: contractNft,
        contractMarket: contractMarketNft,
        contractAddress,
        tokenId,
        senderId: account,
      });
      console.log(transaction);
      setResponse("Something went wrong");
    }
  }, [nft]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onBuyNft();
  };

  return { onSubmit, response };
};
