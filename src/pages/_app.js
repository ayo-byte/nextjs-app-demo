import Head from "next/head";
import "@/styles/globals.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    color: #333;
    background: #F9F6F1;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://db.onlinewebfonts.com/c/e0870aa7286662dd08f498a39e6737de?family=Pacific+Northwest+Letters+W01"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Patrick+Hand+SC"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
