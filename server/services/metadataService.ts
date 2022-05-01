import fs from "fs";
import { v4 } from "uuid";

// Change filepath when host on storage server
const DOMAIN = process.env.DOMAIN;

const uploadMetadataFile = async ({
  name,
  description,
  image,
  basePath,
}: {
  name: string;
  description: string;
  image: string;
  basePath: string;
}) => {
  const uuid = v4();
  const filePath = "/metadata/" + uuid + ".json";
  const fullPath = basePath + filePath;
  const metadata = {
    name,
    description,
    image,
  };
  try {
    fs.writeFileSync(fullPath, JSON.stringify(metadata));
  } catch (err) {
    console.error(err);
  }
  return DOMAIN + filePath;
};

export default { uploadMetadataFile };
