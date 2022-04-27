type Transfer = {
  logIndex: Number;
  transactionIndex: Number;
  transactionHash: string;
  blockHash: string;
  blockNumber: Number;
  address: string;
  type: string;
  id: string;
  returnValues: {
    "0": string;
    "1": string;
    "2": string;
    from: string;
    to: string;
    tokenId: string;
  };
  event: string;
  signature: string;
  raw: {
    data: string;
    topics: [string];
  };
};

type Transaction = {
  hash: string;
  nonce: Number;
  blockHash: string;
  blockNumber: Number;
  transactionIndex: Number;
  from: string;
  to: string;
  value: string;
  gas: Number;
  gasPrice: string;
  input: string;
  v: string;
  r: string;
  s: string;
};
