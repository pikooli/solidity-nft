import Layout from "components/Layout";

export type IndexViewProps = { onSubmit: () => void };

export const IndexView = ({ onSubmit }: IndexViewProps) => {
  return (
    <Layout>
      <button className="border px-4 py-2" onClick={onSubmit}>
        test
      </button>
    </Layout>
  );
};
