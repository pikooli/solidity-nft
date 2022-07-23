import React from "react";

export type AccountViewProps = {
  account?: Account;
  className?: string;
  color?: string;
};

export const AccountView = (props: AccountViewProps) => {
  const { className, account, color } = props;
  if (!account) {
    return null;
  }
  return (
    <div
      className={`rounded border ${className}`}
      style={{ backgroundColor: color || "white" }}
    >
      <p>{account.id}</p>
    </div>
  );
};
