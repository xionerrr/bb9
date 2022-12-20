import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { E_Routes } from 'models/routes'
import { closePopover } from 'store/ui'
import { FullScreen } from 'utils'

export const Basic = () => {
  const [fullScreen, setFullScreen] = useState<boolean>(FullScreen.getValue())

  const dispatch = useStoreDispatch()

  const navigate = useNavigate()

  const handleClose = () => {
    dispatch(closePopover())
  }

  const handleNavigateToCreate = () => {
    navigate(E_Routes.createReview)
    handleClose()
  }

  const handleFullScreen = () => {
    FullScreen.toggle()
    setFullScreen((prev) => !prev)
  }

  return (
    <S.Inner
      transition={{ duration: 0.2 }}
      initial={{ x: 96, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 96, opacity: 0 }}
    >
      <S.ButtonField onClick={handleNavigateToCreate}>Create review</S.ButtonField>
      <S.ButtonField onClick={handleFullScreen}>
        {fullScreen ? 'Exit full screen' : 'Open full screen'}
      </S.ButtonField>
    </S.Inner>
  )
}
