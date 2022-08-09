import TopNav from '../components/topnav.tsx'
import { VStack, Box } from '@chakra-ui/react'
export default function Layout({ children }) {
  return (
    <VStack>
      <TopNav/>
      <Box as="main">
        {children}
      </Box>
    </VStack>
  )
}
