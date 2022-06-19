import React from "react";
import ReactImgPrev from "react-img-prev";
import { FloatInput, FloatTextArea } from "components/forms";

type Props = {
  className?: string;
  onSubmit?: React.FormEventHandler<HTMLFormElement>;
  setValues: Function;
  values: Obj;
};

const CreateNftForm: React.FC<Props> = ({
  setValues,
  values,
  onSubmit,
  className,
}) => {
  return (
    <form className={`text-black ${className || ""}`} onSubmit={onSubmit}>
      <div>
        <FloatInput
          type="string"
          name="name"
          label="Name"
          onChange={(e) =>
            setValues((prev: Obj) => ({ ...prev, name: e.target.value }))
          }
        />
        <FloatTextArea
          name="description"
          label="Description"
          onChange={(e) =>
            setValues((prev: Obj) => ({ ...prev, description: e.target.value }))
          }
        />
        <ReactImgPrev setFiles={setValues} files={values.files} />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default CreateNftForm;
