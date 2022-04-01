import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';
import { CssBaseline } from '@nextui-org/react';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: <>{initialProps.styles}</>,
    };
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
          {CssBaseline.flush()}
          <link rel="icon" href="/static/icon.png" />
          <meta name="theme-color" content="#0070F3" />
          {/* Twitter Card */}
          <meta property="twitter:site" content="GRIG" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="grig.gsm.dev" />
          <meta property="twitter:url" content="https://grig.gsm.dev/" />
          <meta property="twitter:title" content="GSM github ranking page" />
          <meta
            name="og:description"
            content="광주소프트웨어마이스터고등학교 Github 순위 페이지"
          />
          <meta property="twitter:image" content="/static/OG.png" />
          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="GRIG" />
          <meta property="og:title" content="GSM github ranking page" />
          <meta
            name="og:description"
            content="광주소프트웨어마이스터고등학교 Github 순위 페이지"
          />
          <meta property="og:image" content="/static/OG.png" />
          <meta property="og:url" content="https://grig.gsm.dev" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
