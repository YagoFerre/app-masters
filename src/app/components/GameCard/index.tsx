'use client'

import Image from 'next/image'
import { GameDTO } from '@/app/dtos/GamesDTO'

import { Container, Developer, GameDescription, GameTitle, ImageBox, InfoBox } from './styles'

interface Props {
  data: GameDTO
}

export function GameCard({ data }: Props) {
  return (
    <Container href={data.game_url} target="_blank">
      <ImageBox>
        <Image src={data.thumbnail} alt="Capa do jogo" quality={100} fill style={{ borderRadius: '6px' }} />
      </ImageBox>

      <InfoBox>
        <GameTitle>{data.title}</GameTitle>
        <GameDescription>{data.short_description}</GameDescription>
      </InfoBox>
      <Developer>{data.developer}</Developer>
    </Container>
  )
}
