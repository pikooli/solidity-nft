import fetch from "src/lib/customFetch";

//
export const uploadFile = async ({
  name,
  description,
  files,
  accountId,
}: {
  name: string;
  description: string;
  files: File[];
  accountId: string;
}) => {
  const URL_FILE = "/api/uploadfile";
  return await fetch({
    url: URL_FILE,
    method: "POST",
    body: { name, description, files, accountId },
  });
};
