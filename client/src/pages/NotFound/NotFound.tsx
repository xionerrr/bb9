import { useLocation, useNavigate } from 'react-router-dom'

import * as S from './styles'

import { E_Routes } from 'models/routes'

export const NotFound = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleBack = () => {
    navigate(E_Routes.home)
  }

  return (
    <S.Inner>
      <S.Head>
        <S.Subtitle>Path: {location.pathname.split('/')[1]}</S.Subtitle>
        <S.Title> Not Found</S.Title>
      </S.Head>
      <S.Button onClick={handleBack}>Back to home page</S.Button>
    </S.Inner>
  )
}
