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

  padding: '$10 0',

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

export const Title = styled('p', {
  color: '#F2F5FF',
  fontSize: '$xl',
  fontWeight: '$regular',
  lineHeight: '$base',
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

export const ImageBox = styled('div', {
  '@media only screen and (max-width: 768px)': {
    display: 'none',
  },
})

export const ButtonVisitor = styled('button', {
  padding: '$2',
  backgroundColor: '$gray100',
  border: '1px solid $blue100',

  width: '100%',

  color: '$blue100',
  fontSize: '$md',
  fontWeight: '$regular',

  '&:hover:not([disabled])': {
    backgroundColor: '$blue100',
    color: '$gray100',
    border: '1px solid transparent',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'default',
  },
})

export const Form = styled('form', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  padding: '$8',

  backgroundColor: '$white',

  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: '$6',

  borderRadius: '1rem',
})

export const BoxSignIn = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
})

export const SignInText = styled('p', {
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

export const CreateAccount = styled('p', {
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

export const ButtonBox = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '$2',
})
