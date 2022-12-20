import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { popover } from './data'
import { I_InitialState } from './models'

import { T_PopoverBody } from 'models/popover'

const initialState: I_InitialState = {
  popover,
}

export const UISlice = createSlice({
  initialState,
  name: 'UI',
  reducers: {
    openPopover: (state, action: PayloadAction<T_PopoverBody>) => {
      state.popover.isOpen = true
      state.popover.type = action.payload.type
      state.popover.data = action.payload.data
    },
    closePopover: (state) => {
      state.popover = popover
    },
  },
})

export const { openPopover, closePopover } = UISlice.actions
