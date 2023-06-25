import { styled } from '@/app/styles/stitches.config'

export const Container = styled('button', {
  padding: '$1 $3',
  backgroundColor: '$gray100',

  border: '1px solid transparent',
  borderRadius: '4px',

  color: '$blue100',
  fontSize: '$sm',
  fontWeight: '$bold',

  '&:hover': {
    backgroundColor: '$blue100',
    color: '$gray100',
    border: '1px solid $gray100',
  },

  variants: {
    isSelected: {
      true: {
        backgroundColor: '$blue100',
        color: '$gray100',
        border: '1px solid $gray100',
      },
    },
  },
})
