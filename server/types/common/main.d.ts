/// <reference path="./common.d.ts" />
/// <reference path="./web3.d.ts" />

type ContextValues = {
  provider?: import("web3").default;
  account?: string;
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

type Nft = {
  createdAt: Date;
  id: string;
  price?: number;
  updatedAt: Date;
  uri: string;
  userId: string;
};
