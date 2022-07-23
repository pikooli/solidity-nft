import { useEffect, useMemo } from "react";
import { stringToColour } from "src/utils/stringToColors";

type Params = { account: Account };

export const useAccount = (params: Params) => {
  const { account } = params;
  const color = useMemo(() => stringToColour(account?.id), []);
  useEffect(() => {}, []);
  return { color };
};
