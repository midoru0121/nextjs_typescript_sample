import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

/* 
  カスタムドキュメント
  ※ サーバーサイド側 (Node.js側) でのみ実行される。
  ※ https://nextjs.org/docs/#custom-document
*/
export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    // styled-componentsをサーバーサイドレンダリング
    // https://www.styled-components.com/docs/advanced#server-side-rendering

    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) =>
          sheet.collectStyles(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...(initialProps.styles as any), ...sheet.getStyleElement()]
    };
  }

  public render() {
    return (
      <html lang="ja">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta name="author" content="Curry Lover" />
          <link rel="stylesheet" href="/static/reset.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
