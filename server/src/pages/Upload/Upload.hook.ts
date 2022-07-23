import { useState, useContext } from "react";
import AppContext from "src/components/AppContext";
import { payToMint } from "src/services/contractServices/nft/nftContractService";
import { uploadNft, uploadFile } from "src/services/apiServices";

export const UploadHook = () => {
  const context = useContext(AppContext);
  const accountId = context?.values?.accountId;
  const contractNft = context?.values?.contractNft;
  const [values, setValues] = useState<Obj>({});
  const [result, setResult] = useState("");

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (accountId) {
      const body = {
        name: values.name,
        description: values.description,
        files: values.files,
        accountId,
      };
      const res = await uploadFile(body);
      if (res.status === 200) {
        const { metadatapath } = await res.json();
        if (contractNft) {
          const transaction = await payToMint({
            contract: contractNft,
            accountId,
            uri: metadatapath,
          });
          const { events } = transaction;
          const { Transfer } = events;
          const { returnValues } = Transfer;
          const { tokenId } = returnValues;
          const res = await uploadNft({ accountId, tokenId });
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
