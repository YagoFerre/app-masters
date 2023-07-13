import { styled } from '@/app/styles/stitches.config'

export const Container = styled('button', {
  padding: '$3',
  backgroundColor: '$green100',
  width: '100%',

  color: '$white',
  fontSize: '$xs',
  fontWeight: '$bold',
  lineHeight: '$base',
  textTransform: 'uppercase',

  '&:hover:not([disabled])': {
    backgroundColor: '$purple100',
  },

  '&:disabled': {
    opacity: 0.7,
    cursor: 'default',
  },

  variants: {
    outline: {
      true: {
        backgroundColor: '$gray300',
        border: '1px solid $gray200',

        '&:hover:not([disabled])': {
          backgroundColor: '$gray600',
        },
      },
    },
  },
})
