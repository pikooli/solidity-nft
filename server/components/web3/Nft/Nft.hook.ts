import { useEffect, useState } from "react";
import fetch from "lib/customFetch";
import { stringToColour } from "utils/stringToColors";
type Params = { metadatapath: string };

export const useNft = (params: Params) => {
  const { metadatapath } = params;
  const [metadata, setMetadata] = useState<Metadata>();
  const color = stringToColour(metadata?.name);
  useEffect(() => {
    fetch({ url: metadatapath }).then(async (res) => {
      if (res.status === 200) {
        const metadata = await res.json();
        setMetadata(metadata);
      }
    });
  }, []);
  return { metadata, color };
};
