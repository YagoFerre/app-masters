import { styled } from '@/app/styles/stitches.config'

export const ContentBox = styled('div', {
  display: 'flex',
  width: '100%',
  alignItems: 'center',
})

export const Line = styled('div', {
  display: 'flex',
  width: '100%',
  borderTop: 'thin solid $gray300',
})

export const OrText = styled('span', {
  color: '$gray300',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$short',
  padding: '$1',
})
