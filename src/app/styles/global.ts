import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: '$gray500',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',
  },

  button: {
    border: 0,
    borderRadius: '8px',
    cursor: 'pointer',
    transition: '0.7s',
  },
})
