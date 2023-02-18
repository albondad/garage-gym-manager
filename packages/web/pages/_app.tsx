import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AuthenticationContextProvider } from "../components";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthenticationContextProvider>
      <Component {...pageProps} />
    </AuthenticationContextProvider>
  );
}
