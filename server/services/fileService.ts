import fs from "fs";
import { File } from "formidable";
import mime from "mime-types";

// Change filepath when host on storage server
const DOMAIN = process.env.DOMAIN;

const uploadFile = async ({
  file,
  account,
  basePath,
}: {
  file: File;
  account: string;
  basePath: string;
}) => {
  if (!file) {
    return null;
  }
  const { mimetype, size, filepath, newFilename } = file;
  const dir = basePath + "/images/" + account;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  const extension = mime.extension(mimetype as string);
  const path = "/images/" + account + "/" + newFilename + "." + extension;
  const newPath = basePath + path;
  await fs.rename(filepath, newPath, (err) => console.log(err));
  return DOMAIN + path;
};

export default { uploadFile };
