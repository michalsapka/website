import { 
  Link,
  Box, 
  HStack, 
  IconButton,
  Menu,
  Heading,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  useMediaQuery,
  Container
} from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box as="footer">
    <Container 
      maxW="xl"
      mt="5"
      mb="5"
      textAlign="center"
      opacity="0.5"
      fontSize="0.8rem"
    >© 2022 Michał Sapka. All Rights Reserved.
    </Container>
    </Box>)

}

export default Footer
