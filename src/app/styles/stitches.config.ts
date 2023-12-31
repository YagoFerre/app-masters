import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    space: {
      px: '1px',
      1: '0.25rem', // 4px
      2: '0.5rem', // 8px
      3: '0.75rem', // 12px
      4: '1rem', // 16px
      5: '1.25rem', // 20px
      6: '1.5rem', // 24px
      7: '1.75rem', // 28px
      8: '2rem', // 32px
      10: '2.5rem', // 40px
    },

    fontSizes: {
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      md: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
    },

    fontWeights: {
      regular: '400',
      bold: '700',
    },

    lineHeights: {
      shorter: '125%',
      short: '140%',
      base: '160%',
      tall: '180%',
    },

    colors: {
      white: '#FFFFFF',
      black: '#000000',

      blue100: '#1D42CF',
      purple100: '#A782E9',

      red100: '#FD5646',
      green100: '#29b474',

      gray100: '#DBDADA',
      gray200: '#282B3F',
      gray300: '#1F2534',
      gray400: '#212635',
      gray500: '#1B222E',
      gray600: '#232839',
    },
  },
})
