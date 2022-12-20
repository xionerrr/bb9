import { AnimatePresence } from 'framer-motion'

import { PopoverComponents } from './components/popovers'
import * as S from './styles'

import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { closePopover } from 'store/ui'

export const Popover = () => {
  const dispatch = useStoreDispatch()
  const popover = useStoreSelector((state) => state.UI.popover)

  const handleClose = () => {
    dispatch(closePopover())
  }

  const PopoverWindow =
    popover.type && popover.isOpen ? PopoverComponents[popover.type] : () => <></>

  return (
    <AnimatePresence>
      {popover.isOpen && (
        <S.Inner>
          <S.Overlay onClick={handleClose} />
          <PopoverWindow />
        </S.Inner>
      )}
    </AnimatePresence>
  )
}
