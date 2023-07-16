'use client'

import Image from 'next/image'
import googleLogo from '../../../assets/google.svg'

import { Container } from './styles'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<typeof Container> {}

export function GoogleButton({ ...rest }: Props) {
  return (
    <Container {...rest}>
      <Image src={googleLogo} alt="Google Logo" quality={100} />
      Google
    </Container>
  )
}
