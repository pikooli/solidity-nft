import { useNft } from "src/pages/Nft/Nft.hook";
import { NftView } from "src/pages/Nft/Nft.view";
import { useRouter } from "next/router";

type Props = {};

export const Nft = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const hook = useNft({ id: id as string });
  return <NftView {...hook} />;
};
