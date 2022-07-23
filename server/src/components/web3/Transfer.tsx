import React from "react";

type Props = { transfer: Transfer; className?: string };

const Transfer: React.FC<Props> = ({ transfer, className }) => {
  if (!transfer) {
    return <></>;
  }

  return (
    <div className={className}>
      <div>logIndex: {transfer.logIndex}</div>
      <div>transferIndex: {transfer.transactionIndex}</div>
      <div>blockHash: {transfer.blockHash}</div>
      <div>blockNumber: {transfer.blockNumber}</div>
      <div>address: {transfer.address}</div>
      <div>type: {transfer.type}</div>
      <div>id: {transfer.id}</div>
      <div>returnValues: {JSON.stringify(transfer.returnValues)}</div>
      <div>event: {transfer.event}</div>
      <div>signature: {transfer.signature}</div>
      <div>raw: {JSON.stringify(transfer.raw)}</div>
    </div>
  );
};

export default Transfer;
