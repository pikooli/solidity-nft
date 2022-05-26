import type { NextPage } from "next";
import { useContext, useEffect } from "react";
import AppContext from "components/AppContext";

export const IndexHook = () => {
  const context = useContext(AppContext);
  const contract = context?.values?.contract;
  const account = context?.values?.account;
  const onSubmit = () => {};
  useEffect(() => {}, []);

  return { onSubmit };
};
