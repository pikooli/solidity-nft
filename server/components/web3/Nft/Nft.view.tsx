import React from "react";

export type NftViewProps = {
  metadata?: Metadata;
  className?: string;
  color?: string;
};

export const NftView = (props: NftViewProps) => {
  const { className, metadata, color } = props;
  if (!metadata) {
    return null;
  }
  return (
    <div
      className={`rounded border ${className}`}
      style={{ backgroundColor: color || "white" }}
    >
      <div className="font-bold p-3">{metadata.name}</div>
      <img src={metadata.image} className="w-40 m-auto my-2 border rounded" />
      <div className="p-3">
        Description : <span className="font-bold">{metadata.description}</span>
      </div>
    </div>
  );
};
