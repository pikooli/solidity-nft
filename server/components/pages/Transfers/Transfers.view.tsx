import Layout from "components/Layout";
import Transfer from "components/web3/Transfer";

type TransfersViewProps = {
  transfers: any;
};

export const TransfersView = ({ transfers }: TransfersViewProps) => {
  return (
    <Layout>
      <div className="w-3/4 break-all">
        {transfers?.map((transfer: Transfer) => (
          <Transfer
            className="mb-3 border p-3"
            transfer={transfer}
            key={transfer.transactionHash}
          />
        ))}
      </div>
    </Layout>
  );
};
