import { styled } from './styles/stitches.config'

export const Container = styled('main', {
  display: 'flex',
  maxWidth: '70rem',
  width: '100%',

  padding: '$1',
  margin: '0 auto',

  '@media only screen and (max-width: 768px)': {
    maxWidth: '48rem',
  },
})

export const Content = styled('div', {
  display: 'flex',
  width: '100%',

  marginTop: '$10',

  justifyContent: 'center',
  alignItems: 'center',
})

export const Box = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '40.313rem',
  width: '100%',
  gap: '$5',

  '@media only screen and (max-width: 640px)': {
    padding: '$3',
  },
})

export const Title = styled('h1', {
  color: '$gray100',
  fontSize: '3rem',
  fontWeight: '$bold',
  lineHeight: '$shorter',
})

export const Subtitle = styled('p', {
  color: '#F2F5FF',
  fontSize: '$lg',
  fontWeight: '$regular',
  lineHeight: '$base',

  marginTop: '$4',
})

export const Button = styled('button', {
  padding: '$4',
  backgroundColor: '$gray100',
  border: '1px solid transparent',

  color: '$blue100',
  fontSize: '$md',
  fontWeight: '$bold',

  marginTop: '$6',

  '&:hover': {
    backgroundColor: '$blue100',
    color: '$gray100',
    border: '1px solid $gray100',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'not-allowed',
  },
})

export const ImageBox = styled('div', {
  '@media only screen and (max-width: 768px)': {
    display: 'none',
  },
})
