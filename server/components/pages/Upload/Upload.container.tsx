import type { NextPage } from "next";
import { UploadHook } from "components/pages/Upload/Upload.hook";
import { UploadView } from "components/pages/Upload/Upload.view";

export const Upload: NextPage = () => {
  const hook = UploadHook();
  return <UploadView {...hook} />;
};
