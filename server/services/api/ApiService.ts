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
export const fetchNft = async (id: string) => {
  const URL = "/api/nft";
  const response = await fetch({ url: URL, params: { id } });
  if (response.status === 200) {
    const data = await response.json();
    return data.nft;
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

export const uploadFile = async ({
  name,
  description,
  files,
  account,
}: {
  name: string;
  description: string;
  files: File[];
  account: string;
}) => {
  const URL_FILE = "/api/uploadfile";
  return await fetch({
    url: URL_FILE,
    method: "POST",
    body: { name, description, files, account },
  });
};
//
export const uploadNft = async ({
  account,
  tokenId,
}: {
  account: string;
  tokenId: string;
}) => {
  const URL_NFT = "/api/uploadnft";
  return await fetch({
    url: URL_NFT,
    method: "POST",
    body: { account, tokenId },
  });
};

//
export const updateMarketNft = async ({
  account,
  tokenId,
  price,
}: {
  account: string;
  tokenId: string;
  price: number;
}) => {
  const URL = "/api/updatemarketnft";
  const response = await fetch({
    method: "PUT",
    url: URL,
    body: { account, tokenId, price },
  });
  return response;
};

//
export const updateNft = async ({
  account,
  tokenId,
  price,
}: {
  account: string;
  tokenId: string;
  price: number;
}) => {
  const URL = "/api/updatenft";
  const response = await fetch({
    method: "PUT",
    url: URL,
    body: { account, tokenId, price },
  });
  return response;
};

//
export const unSellNft = async ({
  account,
  tokenId,
}: {
  account: string;
  tokenId: string;
}) => {
  const URL = "/api/unsellnft";
  const response = await fetch({
    method: "DELETE",
    url: URL,
    body: { account, tokenId },
  });
  return response;
};

//
export const removeNft = async ({
  account,
  tokenId,
}: {
  account: string;
  tokenId: string;
}) => {
  const URL = "/api/removenft";
  const response = await fetch({
    method: "DELETE",
    url: URL,
    body: { account, tokenId },
  });
  return response;
};
