'use client'

import { Line, OrText, ContentBox } from './styles'

export function Separator() {
  return (
    <ContentBox>
      <Line />
      <OrText>OU</OrText>
      <Line />
    </ContentBox>
  )
}
