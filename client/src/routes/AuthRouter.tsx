import { useLazyQuery } from '@apollo/client'
import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { GET_INFO } from 'apollo'
import { Loader } from 'components'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { AuthLayout, MainLayout } from 'layouts'
import { NotFound } from 'pages'
import { setAuthorized } from 'store/auth'
import { LocalStorage } from 'utils'

export const AuthRouter = () => {
  const dispatch = useStoreDispatch()
  const isAuth = useStoreSelector((state) => state.auth.isAuth)

  const [getMyInfo, { data, loading }] = useLazyQuery(GET_INFO)

  const token = LocalStorage.getAuthToken()

  useLayoutEffect(() => {
    if (token) getMyInfo()
  }, [])

  useLayoutEffect(() => {
    if (token && data)
      dispatch(
        setAuthorized({
          isAuth: true,
          userInfo: data,
        }),
      )
  }, [data])

  if (loading) return <Loader />

  if (token && isAuth)
    return (
      <MainLayout>
        <NotFound />
      </MainLayout>
    )

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  )
}
