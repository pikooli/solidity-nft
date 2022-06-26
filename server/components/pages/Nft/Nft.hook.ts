import { useEffect, useState } from "react";
import { fetchNft } from "services/api/ApiService";

type Params = {
  id: string;
};

export const useNft = (params: Params) => {
  const { id } = params;
  const [nft, setNft] = useState<Nft>();
  useEffect(() => {
    fetchNft(id).then((nft) => {
      setNft(nft);
    });
  }, [id]);

  return {
    nft,
  };
};
