import { styled } from '../styles/stitches.config'

export const Container = styled('div', {
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

  padding: '$10',
  gap: '$5',

  justifyContent: 'center',
  alignItems: 'center',
})

export const ImageBox = styled('div', {
  '@media only screen and (max-width: 768px)': {
    display: 'none',
  },
})

export const Title = styled('h3', {
  color: '$gray100',
  fontSize: '$2xl',
  fontWeight: '$bold',
})

export const FormBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '40.313rem',
  width: '100%',

  '@media only screen and (max-width: 640px)': {
    padding: '$3',
  },
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '40.313rem',

  margin: '$8 auto',
  padding: '$8',

  backgroundColor: '$white',

  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '$6',

  borderRadius: '1rem',
})

export const SignUpBox = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
})

export const SignUpText = styled('p', {
  color: '$gray300',
  fontSize: '$lg',
  fontWeight: '$regular',
  lineHeight: '$short',
})

export const InputBox = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '$4',
})

export const Button = styled('button', {
  padding: '$2',
  backgroundColor: '$blue100',
  border: '1px solid transparent',

  width: '100%',

  color: '$white',
  fontSize: '$md',
  fontWeight: '$regular',

  '&:hover:not([disabled])': {
    backgroundColor: '$gray100',
    color: '$blue100',
    border: '1px solid $blue100',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'default',
  },
})

export const SignInText = styled('p', {
  display: 'flex',
  width: '100%',
  color: '$black',
  fontWeight: '$regular',
  justifyContent: 'center',

  a: {
    marginLeft: '$1',
    textDecoration: 'none',
    color: '$blue100',
    fontWeight: '$bold',
  },
})
