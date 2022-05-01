import type { NextPage } from "next";
import { useState, useContext } from "react";
import fetch from "lib/customFetch";
import Layout from "components/Layout";
import Form from "components/Form";
import AppContext from "components/AppContext";
import ViewTranslaction from "components/ViewTransaction";

const URL_FILE = "api/uploadfile";
const URL_NFT = "api/uploadnft";

const Home: NextPage = () => {
  const context = useContext(AppContext);
  const account = context?.values?.account;
  const contract = context?.values?.contract;
  const [values, setValues] = useState<Obj>({});

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
              console.log(transaction);
            });
          }
        }
      });
    }
  };

  return (
    <Layout>
      <div className="w-56">
        <Form
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

export default Home;
