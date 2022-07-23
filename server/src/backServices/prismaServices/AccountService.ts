import { Prisma } from "@prisma/client";

import prisma from "src/lib/prisma";

//
export const listAccounts = async () => {
  // const data: Prisma.AccountsFindManyArgs = {
  //   where: {},
  // };
  return await prisma.accounts.findMany();
};

//
export const accountWithNfts = async ({ accountId }: { accountId: string }) => {
  const data: Prisma.AccountsFindFirstArgs = {
    where: {
      id: accountId,
    },
    include: {
      nfts: true,
    },
  };
  try {
    const res = await prisma.accounts.findFirst(data);
    return res;
  } catch (e) {
    console.log(e);
  }
};
