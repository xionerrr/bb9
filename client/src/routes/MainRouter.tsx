import { useLazyQuery } from '@apollo/client'
import { useLayoutEffect } from 'react'
import { Outlet } from 'react-router-dom'

import { GET_INFO } from 'apollo'
import { Loader } from 'components'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { MainLayout } from 'layouts'
import { setAuthorized } from 'store/auth'
import { LocalStorage } from 'utils'

export const MainRouter = () => {
  const dispatch = useStoreDispatch()

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

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
