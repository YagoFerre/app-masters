import { styled } from './styles/stitches.config'

export const Container = styled('div', {
  flex: 1,

  '@media only screen and (max-width: 768px)': {
    maxWidth: '48rem',
  },
})

export const Form = styled('form', {
  position: 'absolute',
  right: 0,
  left: 0,
  top: 0,
  bottom: 0,

  width: '25rem',
  height: '37.5rem',

  display: 'flex',
  flexDirection: 'column',
  padding: '3rem',
  margin: 'auto',

  backgroundColor: '$gray500',
  border: '1px solid $gray600',

  justifyContent: 'center',
  alignItems: 'center',
  gap: '$4',

  borderRadius: '6px',
})

export const BoxLogo = styled('div', {
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
})

export const LogoText = styled('p', {
  color: '$white',
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

  marginTop: '$1',

  color: '$gray100',
  fontSize: '$sm',
  fontWeight: '$regular',
  justifyContent: 'center',

  a: {
    marginLeft: '$1',
    textDecoration: 'none',
    color: '$purple100',
    fontSize: '$sm',
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
