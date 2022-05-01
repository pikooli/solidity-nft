/// <reference path="./common.d.ts" />
/// <reference path="./web3.d.ts" />

type ContextValues = {
  provider?: import("web3").default;
  account?: string;
  contract?: import("web3-eth-contract").Contract;
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
