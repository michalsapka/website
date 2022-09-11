import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="alternate" type="application/rss+xml" href="https://www.sapka.me/rss/feed.xml" title="Recent publications RSS Feed" />
        <link rel="alternate" type="application/feed+json" href="https://www.sapka.me/rss/feed.json" title="Recent publications RSS Feed" />
        <link rel="alternate" type="application/atom+xml" href="https://www.sapka.me/rss/atom.xml" title="Recent publications RSS Feed" />
        </Head>
      <body>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

