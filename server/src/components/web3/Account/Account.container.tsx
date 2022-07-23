import { useAccount } from "src/components/web3/Account/Account.hook";
import { AccountView } from "src/components/web3/Account/Account.view";

type Props = { account: Account; className?: string };

export const Account = (props: Props) => {
  const { account, className } = props;
  const hook = useAccount({ account });
  return <AccountView {...hook} className={className} account={account} />;
};
