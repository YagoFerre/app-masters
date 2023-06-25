import { styled } from '@/app/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  padding: '$5 0',

  background: '$gray100',
})

export const Content = styled('div', {
  display: 'flex',
  gap: '$5',
  alignItems: 'center',

  '@media screen and (max-width: 1024px)': {
    padding: '$1',
  },
})

export const LogoTitle = styled('h1', {
  color: '$gray300',
  fontWeight: '$bold',
  fontSize: '$2xl',
})

export const DropdownBox = styled('div', {
  display: 'none',
  marginLeft: '3rem',

  '@media screen and (max-width: 1024px)': {
    display: 'block',
  },
})

export const InfoContainer = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  outline: 0,
  marginLeft: '10rem',

  a: {
    textDecoration: 'none',
    color: '$gray300',
    fontWeight: '$bold',
  },

  '@media screen and (max-width: 1024px)': {
    display: 'none',
  },
})
