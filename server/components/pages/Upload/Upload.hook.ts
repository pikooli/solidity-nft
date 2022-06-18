import { useState, useContext } from "react";
import fetch from "lib/customFetch";
import AppContext from "components/AppContext";
import { payToMint } from "services/contract/Nft/NftContractService";

const URL_FILE = "/api/uploadfile";
const URL_NFT = "/api/uploadnft";

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
      fetch({ url: URL_FILE, method: "POST", body }).then(async (res) => {
        if (res.status === 200) {
          const { metadatapath } = await res.json();
          if (contractNft) {
            const transaction = await payToMint({
              contract: contractNft,
              account,
              uri: metadatapath,
            });
            if (null) {
              return setResult("error happend");
            }
            setResult("Nft Create");
            fetch({
              url: URL_NFT,
              method: "POST",
              body: { transaction, account },
            }).then(async (res) => {
              if (res.status === 200) {
                setResult("Nft Create");
              } else {
                setResult("Something went wrong, try again");
              }
            });
          }
        }
      });
    }
  };

  return { onSubmit, values, setValues, result };
};
