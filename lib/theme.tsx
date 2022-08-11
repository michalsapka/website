import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('#d5d6db', '#24283b')(props),
      color: mode('#0f4b6e', '#7dcfff')(props),
    }
  })
}

const components = {
  Link: {
    baseStyle: props => ({
      color: mode('#34548a', '##34548a')(props),
      textUnderlineOffset: 3
    })
  }
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles,
  components
})


console.log(theme)


export default theme
