import {
  extendTheme,
  withDefaultProps,
  type ThemeConfig,
} from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
  global: {
    body: {
      bg: 'sTSecondColor',
      color: 'sTMainColor',
    },
  },
}

const theme = extendTheme(
  withDefaultProps({
    defaultProps: {
      variant: 'unstyled',
      size: 'auto',
    },
    components: ['Button'],
  }),
  {
    semanticTokens: {
      colors: {
        sTMainColor: {
          _light: '#000000',
          _dark: '#FFFFFF',
        },
        sTSecondColor: {
          _light: 'gray.200',
          _dark: 'gray.600',
        },
      },
    },
    styles,
    config,
  },
)

export default theme
