import fetch from "src/lib/customFetch";

//
export const fetchListOfAccounts = async () => {
  const URL = "/api/listofaccounts";
  const response = await fetch({ url: URL });
  if (response.status === 200) {
    const data = await response.json();
    return data.accounts;
  }
};

//
export const fetchAccountWithNfts = async ({
  accountId,
}: {
  accountId: string;
}) => {
  const URL = "/api/accountwithnfts";
  const response = await fetch({ url: URL, params: { accountId } });
  if (response.status === 200) {
    const data = await response.json();
    return data.account;
  }
};
