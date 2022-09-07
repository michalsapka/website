import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import type { AppProps } from 'next/app'
import '@fontsource/lato/400.css'
import { useAnalytics } from '@happykit/analytics';

function MyApp({ Component, pageProps }: AppProps) {
  useAnalytics({ publicKey: "analytics_pub_a2812a8f3f" })

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
