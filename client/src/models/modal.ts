export enum E_Modal {
  test = 'test',
}

export type T_ModalBody = {
  type: E_Modal | null
  data: any
}

export interface I_Modal extends T_ModalBody {
  isOpen: boolean
}
