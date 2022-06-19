import React, { SetStateAction } from "react";
import { FloatInput } from "components/forms";

export type BuyNftFormViewProps = {
  className?: string;
  onSubmit: (e: FormEvent) => void;
  response: string;
  nft: Nft;
};

export const BuyNftFormView: React.FC<BuyNftFormViewProps> = ({
  className,
  onSubmit,
  response,
  nft,
}) => {
  return (
    <form className={`text-black ${className || ""}`} onSubmit={onSubmit}>
      <h1 className="mt-3">{nft.price}</h1>
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
