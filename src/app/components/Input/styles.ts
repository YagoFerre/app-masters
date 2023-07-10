import { styled } from '@/app/styles/stitches.config'

export const Box = styled('div', {
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$2',
})

export const Label = styled('label', {
  color: '$black',
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
  padding: '$4',

  color: '$black',
  fontSize: '$sm',
  fontWeight: '$regular',

  borderRadius: '0.75rem',
  border: '1px solid $gray400',

  '&:focus': {
    outline: 0,
    borderColor: '$blue100',
  },
})

export const ErrorMessage = styled('p', {
  color: 'red',
  fontSize: '$xs',
  fontWeight: '$bold',
  lineHeight: '$short',
})
