import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-11093131310" strategy="beforeInteractive"></Script>
        <Script id="load-google-ads" strategy="beforeInteractive">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-11093131310');`}
        </Script>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  )
}
