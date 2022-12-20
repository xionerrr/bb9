import { ReactNode } from 'react'

import Item from 'assets/images/Item.svg'

export interface I_Components {
  id: string
  label: string
  key: string
  rate: string
  avatar: ReactNode
}

export const components: I_Components[] = [
  { id: '1', label: 'Morrocan Chicken', key: 'text1', rate: '3', avatar: <Item /> },
  { id: '2', label: 'Couscous Pilaf', key: 'text2', rate: '3', avatar: <Item /> },
  { id: '3', label: 'Turkey Meatloaf', key: 'text3', rate: '3', avatar: <Item /> },
]
