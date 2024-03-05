import { Html, Head, Main, NextScript } from "next/document";
import { ReduxProvider } from "../redux/provider";
export default function Document() {
  return (
    // <ReduxProvider >
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    // </ReduxProvider>
  );
}
