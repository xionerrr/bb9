import { useEffect } from 'react'

import { useStoreSelector } from './useStoreSelector'

export const useFeaturesOverflow = () => {
  const isSidebarOpen = useStoreSelector((state) => state.UI.popover.isOpen)

  useEffect(() => {
    const body = document.querySelector('body')
    if (body)
      if (isSidebarOpen) {
        body.style.overflow = 'hidden'
      } else {
        body.style.overflow = 'hidden'
      }
  }, [isSidebarOpen])

  return null
}
