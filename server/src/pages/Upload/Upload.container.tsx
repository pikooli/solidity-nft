import type { NextPage } from "next";
import { UploadHook } from "src/pages/Upload/Upload.hook";
import { UploadView } from "src/pages/Upload/Upload.view";

export const Upload: NextPage = () => {
  const hook = UploadHook();
  return <UploadView {...hook} />;
};
