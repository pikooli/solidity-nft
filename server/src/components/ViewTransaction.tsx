import React, { useEffect, useState, useContext, useCallback } from "react";
import AppContext from "src/components/AppContext";
import { Transaction } from "src/components/web3";

type Props = {};

const ViewTransaction: React.FC<Props> = ({}) => {
  const [transaction, setTransaction] = useState<any>();
  const [subscription, setSubscription] = useState<any>();
  const context = useContext(AppContext);
  const provider = context?.values?.provider;

  const getLastTransaction = useCallback(async () => {
    if (provider) {
      const lastBlockNumber = await provider.eth.getBlockNumber();
      const lastBlock = await provider.eth.getBlock(lastBlockNumber);
      provider.eth.getTransaction(
        lastBlock.transactions[0],
        (error, transaction) => {
          setTransaction(transaction);
        }
      );
    }
  }, [provider]);

  const setLog = useCallback((error, log) => {
    setTransaction(log);
  }, []);

  useEffect(() => {
    if (provider && !subscription) {
      setSubscription(provider.eth.subscribe("logs", {}, setLog));
      getLastTransaction();
      return () => {
        subscription && subscription.unsubscribe(setLog);
      };
    }
  }, [provider]);

  return (
    <div className="w-3/4 break-all">
      <div className="border">
        <div className="mb-3">Last transaction :</div>
        <Transaction transaction={transaction} />
      </div>
      <div className="border">
        <div className="mb-3">Information :</div>
      </div>
    </div>
  );
};

export default ViewTransaction;
