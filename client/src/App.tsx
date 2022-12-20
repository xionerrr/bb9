import { ToastContainer } from 'react-toastify'

import * as S from './styles/app'
import { GlobalStyles } from './styles/global'

import { Popover } from 'features'
import { useFeaturesOverflow } from 'hooks/useFeaturesOverflow'
import { AppRoutes } from 'routes'

export const App = () => {
  useFeaturesOverflow()

  return (
    <S.App>
      <GlobalStyles />
      <AppRoutes />
      <Popover />
      <ToastContainer hideProgressBar autoClose={2000} />
    </S.App>
  )
}
