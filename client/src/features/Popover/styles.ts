import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Inner = styled(motion.div)`
  position: fixed;
  z-index: 9998;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;

  width: 100%;
  height: 100%;

  box-shadow: 8px 0 15px -3px rgb(0 0 0 / 10%);

  & > div {
    z-index: 9999;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`
