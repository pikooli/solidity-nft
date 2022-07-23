import fetch from "src/lib/customFetch";

//
export const fetchNft = async (nftId: string) => {
  const URL = "/api/nft";
  const response = await fetch({ url: URL, params: { nftId } });
  if (response.status === 200) {
    const data = await response.json();
    return data.nft;
  }
};

//
export const fetchListSellNfts = async () => {
  const URL = "/api/listsellnfts";
  const response = await fetch({ url: URL });
  if (response.status === 200) {
    const data = await response.json();
    return data.nfts;
  }
};
