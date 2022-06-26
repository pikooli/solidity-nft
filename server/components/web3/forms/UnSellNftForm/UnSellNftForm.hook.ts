import { useState, useContext, useCallback } from "react";
import AppContext from "components/AppContext";
import { cancelListingNft } from "services/contract/Marketplace/MarketNftService";
import { unSellNft } from "services/api/ApiService";

type Props = {
  nft: Nft;
};

export const useUnSellNftForm = ({ nft }: Props) => {
  const [response, setResponse] = useState("");
  const context = useContext(AppContext);

  const onCancelListingNft = useCallback(async () => {
    const contractAddress = process.env.CONTRACT_ADDRESS_NFT;
    const account = context?.values?.account;
    const contractMarketNft = context?.values?.contractMarketNft;
    const tokenId = nft.id;
    if (contractMarketNft && contractAddress && account) {
      const translation = await cancelListingNft({
        contractMarket: contractMarketNft,
        tokenId,
        senderId: account,
        contractAddress,
      });
      if (translation) {
        await unSellNft({ account, tokenId });
        return setResponse("Nft is removed from market");
      }
    }
    setResponse("Something went wrong");
  }, [nft, context]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onCancelListingNft();
  };

  return { onSubmit, response };
};
