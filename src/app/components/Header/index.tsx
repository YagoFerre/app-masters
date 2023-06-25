'use client'

import Image from 'next/image'

import logo from '@/app/assets/logo.png'
import { Dropdown } from '../Dropdown'

import { Container, Content, DropdownBox, InfoContainer, LogoTitle } from './styles'

export function Header() {
  return (
    <Container>
      <Content>
        <Image src={logo} alt="Logo app masters" quality={100} width={70} priority />
        <LogoTitle>App Masters Game</LogoTitle>

        <InfoContainer>
          <a href="https://www.appmasters.io/pt/blog" target="_blank" rel="noreferrer">
            Blog
          </a>

          <a href="https://www.appmasters.io/pt/servicos" target="_blank" rel="noreferrer">
            Serviços
          </a>

          <a href="https://www.appmasters.io/pt/tecnologias" target="_blank" rel="noreferrer">
            Tecnologias
          </a>

          <a href="https://www.appmasters.io/pt/trabalhe-conosco" target="_blank" rel="noreferrer">
            Trabalhe conosco
          </a>
        </InfoContainer>

        <DropdownBox>
          <Dropdown />
        </DropdownBox>
      </Content>
    </Container>
  )
}
