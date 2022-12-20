import { toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import { E_Toastify } from 'models/toastify'

export const ToastifyRoot = {
  [E_Toastify.success]: (text: string) => {
    return toast.success(text, {
      position: toast.POSITION.TOP_CENTER,
    })
  },
  [E_Toastify.error]: (text: string) => {
    return toast.error(text, {
      position: toast.POSITION.TOP_CENTER,
    })
  },
}
