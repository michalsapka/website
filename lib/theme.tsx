import { extendTheme } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'

type propsType = any

const styles = {
  global: (_props : propsType) => {
    body: {
      //bg: mode('#d5d6db', '#24283b')(props),
      //color: mode('#0f4b6e', '#7dcfff')(props),
    }
  }
}

const components = {
  Link: {
    baseStyle: (props : propsType) => {
      color: mode('#34548a', '##34548a')(props);
      textUnderlineOffset: 3;
    }
  },
  Heading: {
    baseStyle: {
    },
    variants: {
      'section-title': {
        fontSize: 20,
        marginBottom: 2,
      },
      'main-title': {
        fontSize: 30.
      }
    }
  },
  Text: {
    baseStyle: {
      textAlign: 'justify',
      textIndent: '1em'
    },
    variants: {
      'main-title': {
        fontSize: '1em',
        textIndent: 0
      }
    }
  }
}

const fonts = {
  body: `'Lato', sans-serif`,
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  styles,
  fonts,
  components
})


export default theme
