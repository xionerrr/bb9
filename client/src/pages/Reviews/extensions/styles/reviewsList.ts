import { motion } from 'framer-motion'
import styled from 'styled-components'

import { E_ReviewButton } from '../models'

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  width: 100%;
  max-width: 525px;
  margin: 0 auto;
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`

export const Review = styled(motion.div)`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  padding: 16px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #87898c;

  background: #fff;
  border: 1.5px solid #bec1c4;
  border-radius: 8px;

  &:hover {
    border-color: #949494;
  }
`

export const ActionsBox = styled.div`
  display: flex;
  gap: 6px;
`

export const Typography = styled.div``

export const Rate = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
  width: 100%;

  svg {
    width: 15px;
    height: 15px;
  }
`

interface I_ButtonProps {
  $type: E_ReviewButton
}

export const Button = styled.button<I_ButtonProps>`
  cursor: pointer;

  min-width: 54px;
  min-height: 32px;
  padding: 0 6px;

  font-size: 12px;
  color: #fff;

  background-color: #0a6629;
  border: 0;
  border-radius: 8px;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: #49af6b;
  }
`

export const Attachment = styled(motion.div)``

export const AttachmentMain = styled(motion.div)``
