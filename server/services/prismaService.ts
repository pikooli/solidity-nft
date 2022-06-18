import { Prisma } from "@prisma/client";

import prisma from "lib/prisma";

const storeNft = async ({
  accountId,
  tokenId,
  tokenUri,
}: {
  accountId: string;
  tokenId: number;
  tokenUri: string;
}) => {
  const data: Prisma.NftsCreateInput = {
    id: tokenId,
    uri: tokenUri,
    user: {
      connectOrCreate: {
        where: {
          id: accountId,
        },
        create: {
          id: accountId,
        },
      },
    },
  };
  return await prisma.nfts.create({ data: data });
};

const updateNft = async ({
  accountId,
  tokenId,
  price,
}: {
  accountId: string;
  tokenId: number;
  price?: number;
}) => {
  const args: Prisma.NftsUpdateArgs = {
    where: { id: tokenId },
    data: {
      price: price || 0,
      user: {
        connectOrCreate: {
          where: {
            id: accountId,
          },
          create: {
            id: accountId,
          },
        },
      },
    },
  };
  return await prisma.nfts.update(args);
};

const findNfts = async ({ accountId }: { accountId: string }) => {
  const args: Prisma.NftsFindManyArgs = {
    where: { userId: accountId },
  };
  return await prisma.nfts.findMany(args);
};

export default { storeNft, updateNft, findNfts };
