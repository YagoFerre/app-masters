'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import Image from 'next/image'
import backgroundImage from '@/app/assets/background.png'

import { Box, Button, Container, Content, ImageBox, Subtitle, Title } from './styles'

export default function Home() {
  const [isNavigating, setIsNavigating] = useState(false)
  const router = useRouter()

  async function handleNavigate() {
    setIsNavigating(true)
    await router.push('/games')

    setIsNavigating(false)
  }

  return (
    <Container>
      <Content>
        <Box>
          <Title>
            Bem vindo ao App Games! <br /> seu site com os jogos exclusivos
          </Title>
          <Subtitle>
            Nós preparamos os melhores jogos e exclusivos para você ter uma melhor experiência, vá para o catálogo
            clicando no botão abaixo.
          </Subtitle>

          <Button onClick={handleNavigate} disabled={isNavigating}>
            Começar
          </Button>
        </Box>

        <ImageBox>
          <Image
            src={backgroundImage}
            alt="Background da home"
            quality={100}
            width={600}
            style={{ borderBottomRightRadius: '500px' }}
          />
        </ImageBox>
      </Content>
    </Container>
  )
}
