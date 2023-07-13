import { styled } from '@/app/styles/stitches.config'

export const Box = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$2',
})

export const Label = styled('label', {
  color: '$gray100',
  fontSize: '$sm',
  fontWeight: '$bold',

  '&:after': {
    content: '*',
    color: 'red',
  },
})

export const InputText = styled('input', {
  display: 'flex',
  width: '100%',
  padding: '$3 $4',

  backgroundColor: '$gray300',

  color: '$white',
  fontSize: '$sm',
  fontWeight: '$regular',

  borderRadius: '6px',
  border: '1px solid $gray200',

  '&::placeholder': {
    color: '$gray100',
  },

  '&:focus': {
    outline: 0,
    transition: '0.5s ease',
    borderColor: '$purple100',
  },
})

export const ErrorMessage = styled('p', {
  color: 'red',
  fontSize: '$xs',
  fontWeight: '$bold',
  lineHeight: '$short',
})
