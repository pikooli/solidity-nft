import type { AppProps } from "next/app";
import { AppProvider } from "components/AppContext";
import "../styles/globals.scss";

declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

const WALLET = "0xeb24b99972c36AAF5c257ce756aA4E2dd7378A38";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
