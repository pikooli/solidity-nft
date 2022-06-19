import fetch from "lib/customFetch";

//
export const fetchAccountNfts = async (account: string) => {
  const URL = "/api/listofaccountnfts";
  const response = await fetch({ url: URL, params: { account } });
  if (response.status === 200) {
    const data = await response.json();
    return data.nfts;
  }
};

//
export const fetchSellNfts = async () => {
  const URL = "/api/listsellnfts";
  const response = await fetch({ url: URL });
  if (response.status === 200) {
    const data = await response.json();
    return data.nfts;
  }
};

//
export const updatePriceNft = async ({
  account,
  tokenId,
  price,
}: {
  account: string;
  tokenId: number;
  price: number;
}) => {
  const URL = "/api/updatenft";
  const response = await fetch({
    url: URL,
    params: { account, tokenId, price },
  });
  if (response.status === 200) {
    const data = await response.json();
    return data.nfts;
  }
};
