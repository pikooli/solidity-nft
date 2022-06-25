import { useState, useContext } from "react";
import fetch from "lib/customFetch";
import AppContext from "components/AppContext";
import { payToMint } from "services/contract/Nft/NftContractService";
import { uploadNft, uploadFile } from "services/api/ApiService";

const URL_FILE = "/api/uploadfile";

export const UploadHook = () => {
  const context = useContext(AppContext);
  const account = context?.values?.account;
  const contractNft = context?.values?.contractNft;
  const [values, setValues] = useState<Obj>({});
  const [result, setResult] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (account) {
      const body = {
        name: values.name,
        description: values.description,
        files: values.files,
        account,
      };
      console.log("body", body);
      const res = await uploadFile(body);
      console.log("upload File");
      if (res.status === 200) {
        const { metadatapath } = await res.json();
        if (contractNft) {
          const transaction = await payToMint({
            contract: contractNft,
            account,
            uri: metadatapath,
          });
          const { events } = transaction;
          const { Transfer } = events;
          const { returnValues } = Transfer;
          const { tokenId } = returnValues;
          const res = await uploadNft({ account, tokenId });
          if (res.status === 200) {
            setResult("Nft Create");
          } else {
            setResult("Something went wrong, try again");
          }
        }
      }
    }
  };

  return { onSubmit, values, setValues, result };
};
