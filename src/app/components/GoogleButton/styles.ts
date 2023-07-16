import { styled } from '@/app/styles/stitches.config'

export const Container = styled('button', {
  display: 'flex',
  width: '100%',

  backgroundColor: '$gray100',

  padding: '$2',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',

  color: '$black',
  fontSize: '$md',
  fontWeight: '$regular',

  border: '1px solid transparent',

  '&:hover:not([disabled])': {
    backgroundColor: '$gray400',
    border: '1px solid $gray600',
    color: '$white',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'default',
  },

  '@media screen and (max-width: 280px)': {
    fontSize: '$sm',
    padding: '$1',
  },
})
