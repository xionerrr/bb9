import * as S from './styles/createReview'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { E_Popover } from 'models/popover'
import { openPopover } from 'store/ui'

export const CreateReview = () => {
  const dispatch = useStoreDispatch()
  const popover = useStoreSelector((state) => state.UI.popover)

  const handleCreateReview = () => {
    dispatch(openPopover({ type: E_Popover.basic, data: null }))
  }

  return (
    <S.CreateReviewBox>
      <S.Button onClick={handleCreateReview}>
        {popover.isOpen && popover.type === E_Popover.basic ? 'Close' : 'More'}
      </S.Button>
    </S.CreateReviewBox>
  )
}
