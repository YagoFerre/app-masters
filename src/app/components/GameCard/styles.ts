import { styled } from '@/app/styles/stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: '18.563rem',

  background: '$gray500',
  border: '1px solid $gray200',
  borderRadius: '6px',

  '@media only screen and (max-width: 630px)': {
    // maxWidth: '15rem',
  },
})

export const ImageBox = styled('div', {
  position: 'relative',
  // width: '18.563rem',
  height: '12.5rem',
  objectFit: 'cover',
})

export const InfoBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '$3 $4',
  gap: '$2',
})

export const GameTitle = styled('span', {
  color: '$white',
  fontSize: '$sm',
  fontWeight: '$bold',
  lineHeight: '$base',
})

export const Developer = styled('p', {
  color: '$gray100',
  fontSize: '$xs',
  fontWeight: '$bold',
})

export const RatingStars = styled('div', {
  display: 'flex',
  gap: '$1',
})

export const RatingContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  marginTop: '$3',
})

export const FavoriteButton = styled('button', {
  display: 'flex',
  padding: '$2',

  backgroundColor: '$gray300',
  border: '1px solid $gray200',
  justifyContent: 'center',

  svg: {
    color: '$purple100',
  },

  '&:hover:not([disabled])': {
    backgroundColor: '$gray600',

    svg: {
      color: '$red100',
    },
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'default',
  },
})

export const ButtonContainer = styled('div', {
  display: 'flex',
  gap: '$5',
})

export const RateButton = styled('button', {
  display: 'flex',
  padding: '$1',
  borderRadius: '6px',
  backgroundColor: '$green100',

  alignItems: 'center',
  justifyContent: 'center',

  color: '$white',
  fontSize: '$xs',
  fontWeight: '$regular',
  lineHeight: '$shorter',
  textTransform: 'uppercase',

  '&:hover:not([disabled])': {
    backgroundColor: '$purple100',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'default',
  },
})

export const ResetButton = styled('button', {
  display: 'flex',
  gap: '$1',
  padding: '$1',

  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid $gray200',
  borderRadius: '6px',
  backgroundColor: '$gray300',

  color: '$white',
  fontSize: '$xs',
  fontWeight: '$regular',
  lineHeight: '$shorter',
  textTransform: 'uppercase',

  '&:hover:not([disabled])': {
    backgroundColor: '$gray600',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'default',
  },
})
