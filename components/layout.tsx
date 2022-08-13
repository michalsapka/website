import TopNav from '../components/topnav.tsx'
import { Container, Box } from '@chakra-ui/react'
export default function Layout({ children }) {
  return (
    <>
      <TopNav/>
      <Container maxW="lg">
        <Box as="main">
          {children}
        </Box>
      </Container>
    </>
  )
}
