import { styled } from './styles/stitches.config'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  padding: '$1 0 $5',
  margin: '0 auto',
})

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',

  padding: '$3 $1',
  borderBottom: '1px solid $gray200',
})

export const SearchFilterContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  maxWidth: '30rem',

  backgroundColor: '$gray300',
  border: '1px solid $gray200',
  borderRadius: '6px',

  padding: '$2',

  select: {
    flex: 1,
    backgroundColor: 'transparent',
    border: 'none',
    borderRadius: '6px',

    padding: '0 $4',

    color: '$gray100',
    fontSize: '$sm',
    fontWeight: '$regular',

    cursor: 'pointer',
    appearance: 'none',

    '&:focus': {
      outline: 0,
    },

    option: {
      color: '$black',
    },
  },

  button: {
    display: 'flex',

    background: 'transparent',

    padding: '$1 $3',

    borderLeft: '1px solid $gray200',
    borderRadius: 0,
  },

  '@media screen and (max-width: 719px)': {
    maxWidth: '25rem',
  },

  '@media screen and (max-width: 639px)': {
    maxWidth: '20rem',
  },

  '@media screen and (max-width: 440px)': {
    maxWidth: '15rem',

    select: {
      maxWidth: '6rem',
      fontSize: '$xs',
    },

    button: {
      overflow: 'hidden',
    },
  },
})

export const Input = styled('input', {
  width: '50%',
  backgroundColor: 'transparent',
  border: 'none',

  padding: '$1',

  color: '$gray100',
  fontSize: '$sm',
  fontWeight: '$regular',

  borderRight: '1px solid $gray200',

  '&::placeholder': {
    color: '$gray100',
  },

  '&:focus': {
    outline: 0,
  },

  '@media screen and (max-width: 719px)': {
    width: '40%',
  },

  '@media screen and (max-width: 440px)': {
    width: '35%',
    fontSize: '$xs',
  },
})

export const FavoriteButton = styled('button', {
  display: 'flex',
  maxWidth: '9rem',
  width: '100%',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '$1',
  padding: '$2',

  backgroundColor: '$gray300',
  border: '1px solid $gray200',

  color: '$white',
  fontSize: '$xs',
  fontWeight: '$bold',
  lineHeight: '$base',
  textTransform: 'uppercase',

  '&:hover:not([disabled])': {
    backgroundColor: '$gray600',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'default',
  },

  '@media screen and (max-width: 600px)': {
    fontSize: '0.625rem',
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

  '@media screen and (max-width: 600px)': {
    gridTemplateColumns: '1fr',
  },

  '@media screen and (max-width: 425px)': {
    gridTemplateColumns: '1fr',
  },
})

export const NotFound = styled('div', {
  display: 'flex',
  flex: 1,
  padding: '$2',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '30vh',
  gap: '$2',

  '@media screen and (max-width: 431px)': {
    flexDirection: 'column',
  },
})

export const NotFoundText = styled('p', {
  color: '$gray100',
  fontSize: '$md',
  fontWeight: '$regular',
  lineHeight: '$base',

  '@media screen and (max-width: 431px)': {
    textAlign: 'center',
  },
})

export const ButtonHeaderContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  '@media screen and (max-width: 600px)': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$2',
  },
})

export const MostRatedButton = styled('button', {
  display: 'flex',
  maxWidth: '9rem',
  width: '100%',
  alignItems: 'flex-start',
  justifyContent: 'center',
  gap: '$1',
  padding: '$2',

  backgroundColor: '$gray300',
  border: '1px solid $gray200',

  color: '$white',
  fontSize: '$xs',
  fontWeight: '$bold',
  lineHeight: '$base',
  textTransform: 'uppercase',

  '&:hover:not([disabled])': {
    backgroundColor: '$gray600',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'default',
  },

  '@media screen and (max-width: 600px)': {
    fontSize: '0.625rem',
  },
})
