import React, { SetStateAction } from "react";
import { FloatInput } from "components/forms";

export type SellNftFormViewProps = {
  className?: string;
  onSubmit: (e: FormEvent) => void;
  setValues: React.Dispatch<SetStateAction<Obj>>;
  response: string;
};

export const SellNftFormView: React.FC<SellNftFormViewProps> = ({
  className,
  onSubmit,
  setValues,
  response,
}) => {
  return (
    <form className={`text-black ${className || ""}`} onSubmit={onSubmit}>
      <FloatInput
        type="number"
        name="eth"
        label="Price Eth"
        onChange={(e) =>
          setValues((prev: Obj) => ({ ...prev, price: e.target.value }))
        }
      />
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
      {response}
    </form>
  );
};
