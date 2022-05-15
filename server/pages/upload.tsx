import type { NextPage } from "next";
import { useState, useContext } from "react";
import fetch from "lib/customFetch";
import Layout from "components/Layout";
import CreateNftForm from "components/CreateNftForm";
import AppContext from "components/AppContext";
import ViewTranslaction from "components/ViewTransaction";

const URL_FILE = "/api/uploadfile";
const URL_NFT = "/api/uploadnft";

const Upload: NextPage = () => {
  const context = useContext(AppContext);
  const account = context?.values?.account;
  const contract = context?.values?.contract;
  const [values, setValues] = useState<Obj>({});
  const [ressult, setResult] = useState("");

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
          if (contract) {
            const transaction = await contract.methods
              .awardItem(account, metadatapath)
              .send({ from: account });
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

  return (
    <Layout>
      <div className="w-56">
        {ressult}
        <CreateNftForm
          onSubmit={onSubmit}
          setValues={setValues}
          values={values}
          className="mb-3"
        />
      </div>
      <ViewTranslaction />
    </Layout>
  );
};

export default Upload;
