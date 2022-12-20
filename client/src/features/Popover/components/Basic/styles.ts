import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Inner = styled(motion.div)`
  position: absolute;
  right: 90px;
  bottom: 82px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  min-width: 64px;
  min-height: 48px;
  padding: 16px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #87898c;

  background: #fff;
  border: 1.5px solid #bec1c4;
  border-radius: 8px;
  box-shadow: 0 0 9px 0 #e2dddd;
`

export const ButtonField = styled.button`
  cursor: pointer;

  min-width: 64px;
  min-height: 48px;
  padding: 0 24px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #87898c;

  background: #fff;
  border: 1.5px solid #bec1c4;
  border-radius: 8px;
`
