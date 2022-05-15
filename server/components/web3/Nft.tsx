import React, { useEffect, useState } from "react";
import fetch from "lib/customFetch";

type Props = { metadatapath: string };

const Nft: React.FC<Props> = ({ metadatapath }) => {
  const [metadata, setMetadata] = useState<Metadata>();

  useEffect(() => {
    fetch({ url: metadatapath }).then(async (res) => {
      if (res.status === 200) {
        const metadata = await res.json();
        setMetadata(metadata);
      }
    });
  }, []);

  if (!metadata) {
    return <></>;
  }

  return (
    <div>
      <img src={metadata.image} className="border w-40" />
      <div>Name: {metadata.name}</div>
      <div>Description : {metadata.description}</div>
    </div>
  );
};

export default Nft;
