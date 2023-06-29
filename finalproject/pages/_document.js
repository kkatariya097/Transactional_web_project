import { Html, Head, Main, NextScript } from 'next/document'
// import globals from '../styles'
export default function Document() {
  return (
    <Html>
      <Head>
        <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
