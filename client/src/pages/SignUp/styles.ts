import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;
  min-height: 100vh;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  min-width: 325px;
  padding: 32px;

  border: 1.5px solid #bec1c4;
  border-radius: 8px;
`

export const FieldBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
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
`

export const ErrorTypography = styled.div`
  font-size: 12px;
  color: red;
`

interface I_ButtonProps {
  disabled: boolean
}

export const Button = styled.button<I_ButtonProps>`
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};

  width: 100%;
  height: 100%;
  min-height: 48px;

  color: #fff;

  background-color: ${({ disabled }) => (disabled ? '#87898c !important' : '#b6c016')};
  border: 0;
  border-radius: 8px;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: #d5de4f;
  }
`

export const CustomLink = styled(Link)`
  font-size: 15px;
  color: #000;

  &:hover {
    color: #777;
    text-decoration: underline;
  }
`
