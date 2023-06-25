import { styled } from '@/app/styles/stitches.config'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

export const Trigger = styled(DropdownMenu.Trigger, {
  padding: '$1',
  border: 'none',
})

export const Content = styled(DropdownMenu.Content, {
  background: '$gray100',
  padding: '$3',
  borderRadius: '8px',
})

export const Item = styled(DropdownMenu.Item, {
  padding: '$1',
  outline: 0,

  a: {
    textDecoration: 'none',
    color: '$gray300',
    fontWeight: '$bold',
  },
})
