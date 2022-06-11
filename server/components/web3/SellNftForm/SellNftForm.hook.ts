import { useState, useContext, useEffect } from "react";
import AppContext from "components/AppContext";
import { listNft } from "services/marketNftService";

type Props = {
  nft: Nft;
};

export const useSellNftForm = ({ nft }: Props) => {
  const [values, setValues] = useState<Obj>({});
  const [response, setResponse] = useState("");
  const context = useContext(AppContext);
  const account = context?.values?.account;
  const contractNft = context?.values?.contractNft;
  const contractMarketNft = context?.values?.contractMarketNft;

  useEffect(() => {
    console.log(nft);
  }, []);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const to = process.env.CONTRACT_ADDRESS_MARKET;
    const price = values.price;
    const tokenId = nft.id;
    const contractAddress = process.env.CONTRACT_ADDRESS_NFT;
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
        return setResponse("Nft have been placed on sell");
      }
      setResponse("Something went wrong");
    }
  };

  return { onSubmit, setValues, response };
};
