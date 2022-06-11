import { Prisma } from "@prisma/client";

import prisma from "lib/prisma";

const storeNft = async ({
  account,
  tokenId,
  tokenUri,
}: {
  account: string;
  tokenId: number;
  tokenUri: string;
}) => {
  const data: Prisma.NftsCreateInput = {
    id: tokenId,
    uri: tokenUri,
    user: {
      connectOrCreate: {
        where: {
          id: account,
        },
        create: {
          id: account,
        },
      },
    },
  };
  return await prisma.nfts.create({ data: data });
};

const upldateNft = async ({
  account,
  tokenId,
}: {
  account: string;
  tokenId: number;
}) => {
  const args: Prisma.NftsUpdateArgs = {
    where: { id: tokenId },
    data: {
      user: {
        connectOrCreate: {
          where: {
            id: account,
          },
          create: {
            id: account,
          },
        },
      },
    },
  };
  return await prisma.nfts.update(args);
};

const findNfts = async ({ account }: { account: string }) => {
  const args: Prisma.NftsFindManyArgs = {
    where: { userId: account },
  };
  return await prisma.nfts.findMany(args);
};

export default { storeNft, upldateNft, findNfts };
