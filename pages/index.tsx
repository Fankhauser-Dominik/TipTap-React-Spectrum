import type { NextPage } from "next";
import Head from "next/head";
import { defaultTheme, Provider } from "@adobe/react-spectrum";
import Editor from "components/content/index";

const Home: NextPage = () => {
  return (
    <Provider theme={defaultTheme}>
      <div style={{ minHeight: "100vh", position: "relative" }}>
        <Head>
          <title>TipTap React Spectrum</title>
          <meta name="description" content="TipTap React Spectrum" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="main">
          <h1 className="title">
            <a href="https://github.com/Fankhauser-Dominik/TipTap-React-Spectrum">
              TipTap React Spectrum Editor Playground
            </a>
          </h1>
          <Editor content="Play around with this Example" />
        </main>

        <footer className="footer">TipTap React Spectrum Playground</footer>
      </div>
    </Provider>
  );
};

export default Home;
