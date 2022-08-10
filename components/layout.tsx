import TopNav from '../components/topnav.tsx'
import { Container, Box } from '@chakra-ui/react'
export default function Layout({ children }) {
  return (
    <Container maxW="2xl">
      <TopNav/>
      <Box as="main">
        {children}
      </Box>
    </Container>
  )
}
