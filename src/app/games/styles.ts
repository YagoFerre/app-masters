import { styled } from '../styles/stitches.config'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '70rem',

  padding: '$1 0 $5',
  margin: '0 auto',
})

export const Genres = styled('section', {
  display: 'flex',
  width: '100%',

  padding: '$4 0',
  gap: '$3',

  justifyContent: 'center',

  '@media screen and (max-width: 630px)': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    maxWidth: '10rem',
    margin: '0 auto',
  },

  '@media screen and (max-width: 425px) and (max-width: 375px)': {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr ',
    maxWidth: '10rem',
    margin: '0 auto',
  },
})

export const GamesContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',

  gap: '$3',
  margin: '$6 auto 0',

  '@media screen and (max-width: 820px)': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@media screen and (max-width: 425px)': {
    gridTemplateColumns: '1fr',
  },
})

export const Input = styled('input', {
  width: '100%',
  maxWidth: '20rem',
  padding: '$3',
  backgroundColor: 'transparent',
  border: '1px solid $blue100',
  borderRadius: '6px',

  margin: '$3 0 0 4.3rem',

  color: '$gray100',
  fontSize: '$sm',
  fontWeight: '$regular',

  '&::placeholder': {
    color: '$gray100',
  },

  '&:focus': {
    outline: 0,
    borderColor: '$gray100',
  },

  '&:not(input:focus)': {
    borderColor: '$gray100',
  },

  '@media screen and (max-width: 425px)': {
    margin: '$3 0 0 2rem',
  },

  '@media screen and (max-width: 375px)': {
    maxWidth: '15rem',
    margin: '0 auto',
  },
})
