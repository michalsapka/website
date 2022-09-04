import TopNav from '../components/topnav'
import { Container, Box } from '@chakra-ui/react'
import ReactNode from 'react'

type Props = {
    children?: any
}

export default function Layout({ children } : Props) {
  return (
    <>
      <TopNav/>
      <Container maxW="lg">
        <Box as="main" pt="20">
          {children}
        </Box>
      </Container>
    </>
  )
}
