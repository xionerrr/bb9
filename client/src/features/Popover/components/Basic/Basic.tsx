import { useMutation } from '@apollo/client'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './styles'

import { CREATE_LOG, GET_REVIEWS } from 'apollo'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { T_Review } from 'models/reviews'
import { E_Routes } from 'models/routes'
import { closePopover } from 'store/ui'
import { FullScreen, ToastifyRoot } from 'utils'

export const Basic = () => {
  const [fullScreen, setFullScreen] = useState<boolean>(FullScreen.getValue())

  const dispatch = useStoreDispatch()

  const navigate = useNavigate()

  const [writeFile, { loading: isLogLoading, error: isLogCreateWithError }] = useMutation<T_Review>(
    CREATE_LOG,
    {
      refetchQueries: () => [
        {
          query: GET_REVIEWS,
          variables: {
            title: '',
            limit: '10',
            page: 'none',
          },
        },
      ],
    },
  )

  const handleClose = () => {
    dispatch(closePopover())
  }

  const handleNavigateToCreate = () => {
    navigate(E_Routes.createReview)
    handleClose()
  }

  const handleCreateLog = () => {
    writeFile({
      variables: {
        text1: 'Good!',
        text2: 'Awesome!',
        text3: 'No bad!',
        description: '',
        nickname: 'johndoe',
        summary: 'Lorem ipsum dolor sit amet, consectetur',
      },
    })
    handleClose()
  }

  const handleFullScreen = () => {
    FullScreen.toggle()
    setFullScreen((prev) => !prev)
  }

  useEffect(() => {
    if (isLogCreateWithError) ToastifyRoot.error('Log create error')
  }, [isLogCreateWithError])

  return (
    <S.Inner
      transition={{ duration: 0.2 }}
      initial={{ x: 96, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 96, opacity: 0 }}
    >
      <S.ButtonField onClick={handleNavigateToCreate}>Create review</S.ButtonField>
      <S.ButtonField disabled={isLogLoading} onClick={handleCreateLog}>
        Create log
      </S.ButtonField>
      <S.ButtonField onClick={handleFullScreen}>
        {fullScreen ? 'Exit full screen' : 'Open full screen'}
      </S.ButtonField>
    </S.Inner>
  )
}
