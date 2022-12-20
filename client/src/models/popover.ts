export enum E_Popover {
  basic = 'basic',
}

export type T_PopoverBody = {
  type: E_Popover | null
  data: any
}

export interface I_Popover extends T_PopoverBody {
  isOpen: boolean
}
