import type { NextPage } from "next";
import { useState, useContext } from "react";
import Layout from "components/Layout";
import Form from "components/Form";
import AppContext from "components/AppContext";
import ViewTranslaction from "components/ViewTransaction";

const Home: NextPage = () => {
  const context = useContext(AppContext);
  const account = context?.values?.account;
  const contract = context?.values?.contract;
  const [values, setValues] = useState<Obj>({});

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (contract) {
      await contract.methods
        .awardItem(account, values.nft)
        .send({ from: account });
    }
  };

  return (
    <Layout>
      <div className="w-56">
        <Form onSubmit={onSubmit} setValues={setValues} />
      </div>
      <ViewTranslaction />
    </Layout>
  );
};

export default Home;
