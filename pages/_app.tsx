import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global";
import Header from "../src/components/header";
import Head from "next/head";
import Carousel from "../src/components/carousel";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Header />
      <Carousel />
      <GlobalStyle />
    </>
  );
}

export default MyApp;
