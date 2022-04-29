import type { AppProps } from "next/app";
import { AppProvider } from "components/AppContext";
import "../styles/globals.scss";

declare global {
  interface Window {
    ethereum?: any;
    web3?: any;
  }
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
