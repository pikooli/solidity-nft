// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import formidable, { File } from "formidable";

import fileService from "services/fileService";
import metadataService from "services/metadataService";

export const config = {
  api: {
    bodyParser: false,
  },
};

//  this upload the image and metadatafile in the local public folder, will need to change it later
const BASEPATH = "./public";

export default async function uploadFile(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await new Promise(async (resolve, reject) => {
    formidable({ multiples: false }).parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: "errors.tech" });
      }
      const { account, name, description } = fields;
      if (!name || !description || !files.files) {
        return res.status(422).json({ error: "Missing value" });
      }
      const image = await fileService.uploadFile({
        file: files.files as File,
        account: account as string,
        basePath: BASEPATH,
      });
      if (!image) {
        return res.status(500).json({ error: "errors.tech" });
      }
      const metadatapath = await metadataService.uploadMetadataFile({
        name: name as string,
        description: description as string,
        image,
        basePath: BASEPATH,
      });
      res.json({ metadatapath });
    });
  });
}
