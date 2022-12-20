import { useLocation, useNavigate } from 'react-router-dom'

import { headerLinks } from './data'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { E_Routes } from 'models/routes'
import { setUnauthorized } from 'store/auth'
import { LocalStorage } from 'utils'

export const Header = () => {
  const dispatch = useStoreDispatch()

  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    LocalStorage.deleteAuthToken()
    dispatch(setUnauthorized())
    navigate(E_Routes.auth)
  }

  return (
    <S.Inner>
      <S.LinksWrapper>
        {headerLinks.map((link) => {
          return (
            <S.LinkField
              key={link.id}
              to={link.path}
              $isActive={location.pathname.includes(link.path)}
            >
              {link.label}
            </S.LinkField>
          )
        })}
      </S.LinksWrapper>
      <S.Button onClick={handleLogout}>Logout</S.Button>
    </S.Inner>
  )
}
