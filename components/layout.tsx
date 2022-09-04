import TopNav from '../components/topnav'
import { Container, Box } from '@chakra-ui/react'
export default function Layout({ children }) {
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
