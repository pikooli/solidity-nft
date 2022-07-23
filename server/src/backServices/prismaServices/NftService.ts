import { Prisma } from "@prisma/client";

import prisma from "src/lib/prisma";

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
    account: {
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
      account: {
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
    where: { accountId: accountId },
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
export const findNftById = async ({ id }: { id: string }) => {
  const args: Prisma.NftsFindFirstArgs = {
    where: {
      id,
    },
  };
  return await prisma.nfts.findFirst(args);
};

//
export const unSellNft = async ({ id }: { id: string }) => {
  const args: Prisma.NftsUpdateArgs = {
    where: {
      id,
    },
    data: {
      price: 0,
    },
  };
  return await prisma.nfts.update(args);
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
