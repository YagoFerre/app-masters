import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$blue100',
    color: '$gray200',
    '-webkit-font-smoothing': 'antialiased',

    fontFamily: 'Roboto, sans-serif',
  },

  button: {
    border: 0,
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.7s',
  },
})
