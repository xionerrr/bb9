import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 36px;
`

export const Field = styled.div`
  position: relative;
`

export const Label = styled.div`
  user-select: none;

  position: absolute;
  top: -6.5px;
  left: 12px;

  padding: 0 6px;

  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: #252728;

  background-color: #fff;
`

export const TextField = styled.input`
  display: flex;
  align-items: center;

  width: 100%;
  height: 48px;
  padding: 0 16px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #87898c;

  background: #fff;
  border: 1.5px solid #bec1c4;
  border-radius: 8px;

  &:focus {
    border: 2px solid #bec1c4;
  }
`

export const Action = styled.div`
  position: relative;
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Checkbox = styled.input.attrs({
  id: 'confirm',
  type: 'checkbox',
})`
  min-width: 16px;
  max-width: 16px;
  min-height: 16px;
  max-height: 16px;

  background: #fff;
  border: 1.5px solid #bec1c4;
  border-radius: 4px;
`

export const Typography = styled.label.attrs({
  htmlFor: 'confirm',
})`
  user-select: none;

  display: flex;
  gap: 3px;
  align-items: center;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #87898c;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

interface I_ButtonProps {
  disabled: boolean | undefined
}

export const Button = styled.button<I_ButtonProps>`
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  width: 100%;
  height: 100%;
  min-height: 48px;

  color: #fff;

  background-color: ${({ disabled }) => (disabled ? '#87898c !important' : '#0a6629')};
  border: 0;
  border-radius: 8px;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: #49af6b;
  }
`

export const CustomLink = styled(Link)`
  cursor: pointer;

  display: flex;
  align-items: center;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #49af6b;
  text-decoration: underline;
`

export const Point = styled.div`
  pointer-events: none;

  position: absolute;
  top: 0;
  right: 12px;
  transform: translate(-50%, 50%);

  color: red;
`

export const PrivacyPoint = styled.div`
  pointer-events: none;

  position: absolute;
  top: 12px;
  left: 0;
  transform: translate(-0%, 50%);

  font-size: 10px;
  color: red;
`
