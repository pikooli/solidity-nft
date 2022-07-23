import { useState, useContext, useCallback } from "react";
import AppContext from "src/components/AppContext";
import { buyNft } from "src/services/contractServices/marketplace/marketNftService";
import { updateNft } from "src/services/apiServices";

type Props = {
  nft: Nft;
};

export const useBuyNftForm = ({ nft }: Props) => {
  const [response, setResponse] = useState("");
  const context = useContext(AppContext);

  const onBuyNft = useCallback(async () => {
    const contractAddress = process.env.CONTRACT_ADDRESS_NFT;
    const accountId = context?.values?.accountId;
    const contractNft = context?.values?.contractNft;
    const contractMarketNft = context?.values?.contractMarketNft;
    const tokenId = nft.id;

    if (contractNft && contractMarketNft && contractAddress && accountId) {
      const transaction = await buyNft({
        contractNft: contractNft,
        contractMarket: contractMarketNft,
        contractAddress,
        tokenId,
        senderId: accountId,
      });
      if (!transaction) {
        setResponse("Something went wrong");
      }
      await updateNft({ accountId, tokenId, price: 0 });
    }
  }, [nft]);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await onBuyNft();
  };

  return { onSubmit, response };
};
