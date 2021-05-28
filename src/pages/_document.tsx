import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import theme from '../lib/theme'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            // eslint-disable-next-line react/react-in-jsx-scope
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          // eslint-disable-next-line react/react-in-jsx-scope
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap"
            rel="stylesheet"
          />
          <meta name="author" content="Levir Lemos" />
          <meta
            name="description"
            content="Oque eu mando é um app que ajuda as pessoas a interagir sugerindo assuntos ,cantadas,curiosidades, entre outros para você usar"
          />
          <meta
            name="keywords"
            content="cantadas, assuntos, oque mandar, oque eu mando,curiosidades,whatsapp, gerador de assuntos, gerador de piadas, gerados de cantadas, gerados de curiosidades"
          />
          <meta name="robots" content="index,follow" />
          <meta name="format-detection" content="telephone=no" />
          <meta property="og:title" content="Oque eu mando?" />
          <meta property="og:site_name" content="Oque eu mando?" />
          <meta
            property="og:description"
            content="Oque eu mando é um app que ajuda as pessoas a interagir sugerindo assuntos e cantadas para você usar"
          />
          <meta property="og:url" content="https://oque-eu-mando.vercel.app" />
          <meta
            property="og:image"
            content="https://oque-eu-mando.vercel.app/favicon.png"
          />
          <meta property="og:image:type" content="image/png" />

          <meta name="application-name" content="PWA App" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content="PWA App" />
          <meta name="description" content="Best PWA App in the world" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content="#fd267d" />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content="#fd267d" />

          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/favicon.ico" color="#fd267d" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="" />
          <meta name="twitter:title" content="PWA App" />
          <meta
            name="twitter:description"
            content="Best PWA App in the world"
          />
          <meta name="twitter:image" content="" />
          <meta name="twitter:creator" content="@levircesar" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="PWA App" />
          <meta property="og:description" content="Best PWA App in the world" />
          <meta property="og:site_name" content="PWA App" />
          <meta property="og:url" content="" />
          <meta property="og:image" content="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
