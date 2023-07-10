import { styled } from '@/app/styles/stitches.config'

export const Container = styled('button', {
  display: 'flex',
  width: '100%',

  backgroundColor: '$gray400',

  padding: '$2',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$2',

  color: '$black',
  fontSize: '$md',
  fontWeight: '500',

  border: '1px solid transparent',

  '&:hover:not([disabled])': {
    backgroundColor: '$gray100',
    border: '1px solid $gray400',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'default',
  },
})
