import React from "react";

type Props = { transaction: Transaction; className?: string };

const Transaction: React.FC<Props> = ({ transaction, className }) => {
  if (!transaction) {
    return <></>;
  }

  return (
    <div className={className}>
      <div>hash: {transaction.hash}</div>
      <div>nonce: {transaction.nonce}</div>
      <div>blockHash: {transaction.blockHash}</div>
      <div>blockNumber: {transaction.blockNumber}</div>
      <div>transactionIndex: {transaction.transactionIndex}</div>
      <div>from: {transaction.from}</div>
      <div>to: {transaction.to}</div>
      <div>value: {transaction.value}</div>
      <div>gas: {transaction.gas}</div>
      <div>gasPrice: {transaction.gasPrice}</div>
      <div>input: {transaction.input}</div>
      <div>v: {transaction.v}</div>
      <div>r: {transaction.r}</div>
      <div>s: {transaction.s}</div>
    </div>
  );
};

export default Transaction;
