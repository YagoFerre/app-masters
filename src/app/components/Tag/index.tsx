'use client'

import { ComponentProps } from 'react'

import { Container } from './styles'

interface Props extends ComponentProps<typeof Container> {
  title: string
  isSelected?: boolean
}

export function Tag({ title, isSelected, ...rest }: Props) {
  return (
    <Container isSelected={isSelected} {...rest}>
      {title}
    </Container>
  )
}
