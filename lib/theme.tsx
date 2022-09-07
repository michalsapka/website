import { extendTheme ,type ThemeConfig } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const styles = {
  global: (props : StyleFunctionProps) => ({
    body: {
      bg: mode('#f8f8f2', '#282a36')(props),
      color: mode('#282a36', '#f8f8f2')(props),
    }
  })
}

const components = {
  Link: {
    baseStyle: (props : StyleFunctionProps)  => ({
      color: mode('#ff5555', '#bd93f9')(props),

      textUnderlineOffset: 3
    }),
    variants: {
      'topnav-link': (props : StyleFunctionProps) => ({
        color: mode('#282a36', '#f8f8f2')(props),
        textDecoration: "none"
      }),
      'list-link': (props : StyleFunctionProps) => ({
        color: mode('#282a36', '#f8f8f2')(props),
        textDecoration: "none"
      })
    }
  },
  Text: {
    baseStyle: (_props : StyleFunctionProps)  => ({
      textAlign: "justify",
    })
  },
  Heading: {
    variants: {
      "section-title": {
        pt: "10px",
        pb: "10px",
        fontSize: "1.5rem"
      }
    }
  }
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles, components })

export default theme
