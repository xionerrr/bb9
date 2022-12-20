import { Navigate, Outlet } from 'react-router-dom'

import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Routes } from 'models/routes'
import { LocalStorage } from 'utils/helpers/localStorage'

export const ProtectedRoute = () => {
  const { isAuth } = useStoreSelector((state) => ({
    isAuth: state.auth.isAuth,
  }))

  const token = LocalStorage.getAuthToken()

  if (!isAuth && !token) {
    return <Navigate to={E_Routes.auth} />
  }

  return <Outlet />
}
