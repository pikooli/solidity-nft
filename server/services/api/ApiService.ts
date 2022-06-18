import fetch from "lib/customFetch";

export const fetchAccountNft = async (account: string) => {
  const URL = "/api/listnft";
  const response = await fetch({ url: URL, params: { account } });
  if (response.status === 200) {
    const data = await response.json();
    return data.nfts;
  }
};

export const updatePriceNft = async (
  account: string,
  tokenId: number,
  price: number
) => {
  const URL = "/api/listnft";
  const response = await fetch({ url: URL, params: { account } });
  if (response.status === 200) {
    const data = await response.json();
    return data.nfts;
  }
};
