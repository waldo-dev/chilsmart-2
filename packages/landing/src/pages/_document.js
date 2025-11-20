import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { createStylesServer, ServerStyles } from "@mantine/next";

const stylesServer = createStylesServer();

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    // Styled components style SSR extraction
    const sheet = new ServerStyleSheet();

    try {
      const originalRenderPage = ctx.renderPage;
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) =>
            (props) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.png" />
          <link rel="apple-touch-icon" href="/favicon.png" />
          <meta name="format-detection" content="telephone=no" />
          {/* Next and Styled components SSR styles */}
          {this.props.styles}
          {/* Mantine SSR styles */}
          <ServerStyles html={this.props.html} server={stylesServer} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
