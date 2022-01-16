import { AppType, RenderPage } from "next/dist/shared/lib/utils"
import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getStaticProps(ctx: DocumentContext) {
    const sheet: ServerStyleSheet = new ServerStyleSheet()
    const originalRenderPage: RenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: AppType) => (props) => sheet.collectStyles(<App {...props} />),
        })

      const initialProps: DocumentInitialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
