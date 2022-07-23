import { useState, useContext, useCallback } from "react";
import AppContext from "src/components/AppContext";
import { cancelListingNft } from "src/services/contractServices/marketplace/marketNftService";
import { unSellNft } from "src/services/apiServices";

type Props = {
  nft: Nft;
};

export const useUnSellNftForm = ({ nft }: Props) => {
  const [response, setResponse] = useState("");
  const context = useContext(AppContext);

  const onCancelListingNft = useCallback(async () => {
    const contractAddress = process.env.CONTRACT_ADDRESS_NFT;
    const accountId = context?.values?.accountId;
    const contractMarketNft = context?.values?.contractMarketNft;
    const tokenId = nft.id;
    if (contractMarketNft && contractAddress && accountId) {
      const translation = await cancelListingNft({
        contractMarket: contractMarketNft,
        tokenId,
        senderId: accountId,
        contractAddress,
      });
      if (translation) {
        await unSellNft({ accountId, tokenId });
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
