/// <reference path="./common.d.ts" />
/// <reference path="./web3.d.ts" />

type ContextValues = {
  provider?: import("web3").default;
  accountId?: string;
  contractNft?: import("web3-eth-contract").Contract;
  contractMarketNft?: import("web3-eth-contract").Contract;
};

type GlobalContext = {
  values: ContextValues;
  setValues: Function;
};

type Metadata = {
  name: string;
  description: string;
  image: string;
};

type Account = {
  id: string;
  createAt: string;
  updatedAt: string;
  nfts: Nft[];
};

type Nft = {
  createdAt: Date;
  id: string;
  price?: number;
  updatedAt: Date;
  uri: string;
  userId: string;
};
