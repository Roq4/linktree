import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 to-gray-600 bg-gradient-to-r h-screen">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
