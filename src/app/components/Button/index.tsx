'use client'

import { ComponentProps } from 'react'
import { Container } from './styles'

interface Props extends ComponentProps<typeof Container> {
  title: string
}

export function Button({ title, ...rest }: Props) {
  return <Container {...rest}>{title}</Container>
}
