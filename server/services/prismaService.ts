import { Prisma } from "@prisma/client";

import prisma from "lib/prisma";

//
export const storeNft = async ({
  accountId,
  tokenId,
  tokenUri,
}: {
  accountId: string;
  tokenId: string;
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

//
export const updateNft = async ({
  accountId,
  tokenId,
  price,
}: {
  accountId: string;
  tokenId: string;
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

//
export const findAccountNfts = async ({ accountId }: { accountId: string }) => {
  const args: Prisma.NftsFindManyArgs = {
    where: { userId: accountId },
  };
  return await prisma.nfts.findMany(args);
};

//
export const findSellNfts = async () => {
  const args: Prisma.NftsFindManyArgs = {
    where: {
      price: {
        gt: 0,
      },
    },
  };
  return await prisma.nfts.findMany(args);
};

//
export const removeNfts = async ({ id }: { id: string }) => {
  const args: Prisma.NftsDeleteArgs = {
    where: {
      id,
    },
  };
  return await prisma.nfts.delete(args);
};
