import React from "react";

export type UnSellNftFormViewProps = {
  className?: string;
  onSubmit: (e: FormEvent) => void;
  response: string;
};

export const UnSellNftFormView: React.FC<UnSellNftFormViewProps> = (props) => {
  const { className, onSubmit, response } = props;
  return (
    <form className={`text-black ${className || ""}`} onSubmit={onSubmit}>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        UnSell
      </button>
      {response}
    </form>
  );
};
