import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Inner = styled.div`
  position: fixed;
  z-index: 99;

  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 48px;
  padding: 0 12px;

  background-color: #f8f9f9;
  box-shadow: 0 0 6px 1px #e4e4e4;
`

export const Label = styled.div`
  font-size: 21px;
  font-weight: 600;
`

export const LinksWrapper = styled.nav`
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  gap: 12px;
  align-items: center;

  width: 100%;
  height: 100%;
`

interface I_LinkFieldProps {
  $isActive: boolean
}

export const LinkField = styled(Link)<I_LinkFieldProps>`
  height: 100%;
  padding: 9px 18px;

  font-size: 15px;
  font-weight: 400;
  color: ${({ $isActive }) => ($isActive ? '#fff' : '#6c7278')};

  background-color: ${({ $isActive }) => ($isActive ? '#0a6629' : 'transparent')};

  &:hover {
    color: ${({ $isActive }) => ($isActive ? '#fff' : '#000')};
    background-color: ${({ $isActive }) => ($isActive ? '#49af6b' : '#E3E6E8')};
  }
`

export const Button = styled.button`
  cursor: pointer;
  background-color: #fafafa;
  border: 0;
`
