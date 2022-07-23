import fetch from "src/lib/customFetch";

//
export const uploadNft = async ({
  accountId,
  tokenId,
}: {
  accountId: string;
  tokenId: string;
}) => {
  const URL_NFT = "/api/uploadnft";
  return await fetch({
    url: URL_NFT,
    method: "POST",
    body: { accountId, tokenId },
  });
};

//
export const updateMarketNft = async ({
  accountId,
  tokenId,
  price,
}: {
  accountId: string;
  tokenId: string;
  price: number;
}) => {
  const URL = "/api/updatemarketnft";
  const response = await fetch({
    method: "PUT",
    url: URL,
    body: { accountId, tokenId, price },
  });
  return response;
};

//
export const updateNft = async ({
  accountId,
  tokenId,
  price,
}: {
  accountId: string;
  tokenId: string;
  price: number;
}) => {
  const URL = "/api/updatenft";
  const response = await fetch({
    method: "PUT",
    url: URL,
    body: { accountId, tokenId, price },
  });
  return response;
};

//
export const unSellNft = async ({
  accountId,
  tokenId,
}: {
  accountId: string;
  tokenId: string;
}) => {
  const URL = "/api/unsellnft";
  const response = await fetch({
    method: "DELETE",
    url: URL,
    body: { accountId, tokenId },
  });
  return response;
};

//
export const removeNft = async ({
  accountId,
  tokenId,
}: {
  accountId: string;
  tokenId: string;
}) => {
  const URL = "/api/removenft";
  const response = await fetch({
    method: "DELETE",
    url: URL,
    body: { accountId, tokenId },
  });
  return response;
};
