import { ChakraProvider } from '@chakra-ui/react'
import theme from '../lib/theme'
import type { AppProps } from 'next/app'
import '@fontsource/lato/400.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
