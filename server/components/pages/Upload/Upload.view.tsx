import Layout from "components/Layout";
import CreateNftForm from "components/CreateNftForm";
import ViewTranslaction from "components/ViewTransaction";

export type UploadViewProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  values: Obj;
  setValues: Function;
  result: String;
};

export const UploadView = ({
  onSubmit,
  values,
  setValues,
  result,
}: UploadViewProps) => {
  return (
    <Layout>
      <div className="w-56">
        {result}
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
