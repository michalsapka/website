import TopNav from '../components/topnav'
import Footer from '../components/footer'
import { Container, Box } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'

type Props = {
    children?: any
}

export default function Layout({ children } : Props) {
  return (
    <>
        <DefaultSeo
          openGraph={{
            type: 'website',
            locale: 'en_US',
            url: 'https://www.sapka.me/',
            site_name: 'Michał Sapka'
          }}
          twitter={{
            handle: '@handle',
            site: '@site',
            cardType: 'summary_large_image',
          }}
        />
      <TopNav/>
      <Container maxW="lg">
        <Box as="main" pt="20">
          {children}
        </Box>
      </Container>
      <Footer/>

    </>
  )
}
