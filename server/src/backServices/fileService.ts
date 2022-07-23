import fs from "fs";
import { File } from "formidable";
import mime from "mime-types";
import { BASE_URL } from "src/constants/";

const uploadFile = async ({
  file,
  accountId,
  basePath,
}: {
  file: File;
  accountId: string;
  basePath: string;
}) => {
  if (!file) {
    return null;
  }
  const { mimetype, size, filepath, newFilename } = file;
  const dir = basePath + "/images/" + accountId;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  const extension = mime.extension(mimetype as string);
  const path = "/images/" + accountId + "/" + newFilename + "." + extension;
  const newPath = basePath + path;
  await fs.rename(filepath, newPath, (err) => console.log(err));
  return BASE_URL + path;
};

export default { uploadFile };
