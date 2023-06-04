import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Stien95 page, React Developer, dev of Tip Roulette (Project with Next + TS)" />
        <meta rel="canonical" content="https://stien95.github.io" />
      </Head>
      <body>
        <div id="modal-root"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}