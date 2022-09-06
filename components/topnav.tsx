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
  useMediaQuery,
  Container
} from '@chakra-ui/react'
import { GiHamburgerMenu } from "react-icons/gi"
import { DiGithubBadge } from "react-icons/di"
import ThemeToggleButton from "../components/toggle_theme_button"

function MobileNav() {
  return <>
  <Menu>
    <MenuButton as={IconButton} icon={<GiHamburgerMenu/>}>
      Action
    </MenuButton>
    <MenuList>
      <MenuItem icon={<DiGithubBadge/>}>View source</MenuItem>
    </MenuList>
  </Menu>
  </>
}

function DesktopNav() {
  return <HStack>
    <Box flex="1">
      <Link href="https://github.com/michalsapka/michal-sapka-pl">Source code</Link>
    </Box>
  </HStack>
}


export default function Navbar() {
 const [isMobile] = useMediaQuery("(max-width: 768px)")
  return <Box
    as="header"
    position="fixed"
    backdropFilter="auto" 
    backdropBlur="6px"
    width="100%"
    pt="5px"
  >
    <Container 
      maxW="xl"
      mt="0"
      mb="1"
    >
      <HStack>
        <Heading flex="0">Michal </Heading>
        <Box flex="1">
          {isMobile ? null : <DesktopNav/>}
        </Box>
        <ThemeToggleButton/>
        {isMobile ? <MobileNav/> : null}
      </HStack>
    </Container>
  </Box>
}


