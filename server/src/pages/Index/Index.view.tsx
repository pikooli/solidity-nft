import Layout from "src/components/Layout";
import { Account } from "src/components/web3";
export type IndexViewProps = { accounts?: Account[] };

export const IndexView = ({ accounts }: IndexViewProps) => {
  return (
    <Layout>
      {accounts?.map((account) => (
        <Account account={account} key={account.id} />
      ))}
    </Layout>
  );
};
