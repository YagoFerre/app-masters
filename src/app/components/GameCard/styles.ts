import { styled } from '@/app/styles/stitches.config'

import Link from 'next/link'

export const Container = styled(Link, {
  display: 'flex',
  maxWidth: '20rem',
  width: '100%',
  flexDirection: 'column',

  gap: '$2',
  padding: '$3',

  background: '$gray100',
  borderRadius: '6px',

  transition: '0.3s',
  textDecoration: 'none',
  cursor: 'pointer',

  '&:hover': {
    backgroundColor: '$gray400',
  },

  '@media only screen and (max-width: 630px)': {
    maxWidth: '15rem',
  },
})

export const InfoBox = styled('div', {
  display: 'flex',
  width: '100%',
  flex: 1,
  flexDirection: 'column',
})

export const GameTitle = styled('span', {
  color: '$blue100',
  fontSize: '$md',
  fontWeight: '$bold',
  lineHeight: '$base',
})

export const GameDescription = styled('p', {
  color: '$gray300',
  fontSize: '$sm',
  fontWeight: '$bold',
  lineHeight: '$shorter',

  textAlign: 'left',
})

export const Developer = styled('p', {
  color: '$gray200',
  fontSize: '$sm',
  fontWeight: '$bold',
})

export const ImageBox = styled('div', {
  position: 'relative',
  width: '18.563rem',
  height: '12.5rem',
  objectFit: 'cover',
  overflow: 'hidden',

  '@media only screen and (max-width: 630px)': {
    width: '13.5rem',
    height: '7.25rem',
  },
})
