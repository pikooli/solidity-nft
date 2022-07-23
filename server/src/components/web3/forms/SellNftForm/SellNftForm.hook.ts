import { useState, useContext, useCallback } from "react";
import AppContext from "src/components/AppContext";
import { listNft } from "src/services/contractServices/marketplace/marketNftService";
import { updateMarketNft } from "src/services/apiServices";

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
    const accountId = context?.values?.accountId;
    const contractNft = context?.values?.contractNft;
    const contractMarketNft = context?.values?.contractMarketNft;
    const tokenId = nft.id;
    const price = values.price;
    if (
      to &&
      contractNft &&
      contractMarketNft &&
      contractAddress &&
      accountId
    ) {
      const transaction = await listNft({
        contractNft: contractNft,
        contractMarket: contractMarketNft,
        contractAddress,
        to,
        price,
        tokenId,
        senderId: accountId,
      });
      if (transaction) {
        await updateMarketNft({ tokenId: tokenId, price, accountId });
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
