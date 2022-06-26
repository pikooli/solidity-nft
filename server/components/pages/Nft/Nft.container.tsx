import { useNft } from "components/pages/Nft/Nft.hook";
import { NftView } from "components/pages/Nft/Nft.view";
import { useRouter } from "next/router";

type Props = {};

export const Nft = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const hook = useNft({ id: id as string });
  return <NftView {...hook} />;
};
