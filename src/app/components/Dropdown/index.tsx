'use client'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { List } from '@phosphor-icons/react'

import { Trigger, Content, Item } from './styles'

export function Dropdown() {
  return (
    <DropdownMenu.Root>
      <Trigger>
        <List size={24} color="#000000" />
      </Trigger>
      <DropdownMenu.Portal>
        <Content>
          <Item>
            <a href="https://www.appmasters.io/pt/blog" target="_blank" rel="noreferrer">
              Blog
            </a>
          </Item>
          <Item>
            <a href="https://www.appmasters.io/pt/servicos" target="_blank" rel="noreferrer">
              Serviços
            </a>
          </Item>
          <Item>
            <a href="https://www.appmasters.io/pt/tecnologias" target="_blank" rel="noreferrer">
              Tecnologias
            </a>
          </Item>
          <Item>
            <a href="https://www.appmasters.io/pt/trabalhe-conosco" target="_blank" rel="noreferrer">
              Trabalhe conosco
            </a>
          </Item>
        </Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
