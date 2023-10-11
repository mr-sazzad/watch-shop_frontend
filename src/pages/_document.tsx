import ToasterContext from "@/context/ToasterContext";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ToasterContext />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
