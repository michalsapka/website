import { extendTheme ,type ThemeConfig } from "@chakra-ui/react"
import { mode } from '@chakra-ui/theme-tools'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const styles = {
  global: (props : StyleFunctionProps) => ({
    body: {
      bg: mode('#d5d6db', '#282a36')(props),
      color: mode('#0f4b6e', '#f8f8f2')(props),
    }
  })
}

const components = {
  Link: {
    baseStyle: (props : StyleFunctionProps)  => ({
      color: mode('#3d7aed', '#bd93f9')(props),
      textUnderlineOffset: 3
    })
  },
  Text: {
    baseStyle: (_props : StyleFunctionProps)  => ({
      textAlign: "justify",
    })
  }
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ config, styles, components })

export default theme
