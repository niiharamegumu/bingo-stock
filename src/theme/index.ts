import {
  extendTheme,
  withDefaultProps,
  type ThemeConfig,
  type ComponentStyleConfig,
} from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const styles = {
  global: {
    body: {
      bg: 'sTMainColor',
      color: 'sTParagraph',
    },
  },
}

const Heading: ComponentStyleConfig = {
  baseStyle: {
    color: 'sTHeading',
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
    components: {
      Heading,
    },
    semanticTokens: {
      colors: {
        sTMainColor: {
          _light: '#F9F4EF',
          _dark: '#020826',
        },
        sTSecondColor: {
          _light: '#8C7851',
          _dark: '#F9F4EF',
        },
        sTHeading: {
          _light: '#020826',
          _dark: '#F9F4EF',
        },
        sTParagraph: {
          _light: '#716040',
          _dark: '#F9F4EF',
        },
        sTButton: {
          _light: '#FFFFFE',
          _dark: '#020826',
        },
        sTCard: {
          _light: 'whiteAlpha.600',
          _dark: 'whiteAlpha.200',
        },
        sTPlaceHolder: {
          _light: 'blackAlpha.400',
          _dark: 'whiteAlpha.700',
        },
        sTNotice: '#EB5757',
      },
    },
    styles,
    config,
  },
)

export default theme
