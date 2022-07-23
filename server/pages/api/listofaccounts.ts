import type { NextApiRequest, NextApiResponse } from "next";
import * as prismaService from "src/services/prismaServices";

//
export default async function listofaccounts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const accounts = await prismaService.listAccounts();
  res.json({ accounts });
}
