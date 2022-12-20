import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 625px;
  margin: 0 auto;
`

export const Label = styled.div`
  font-size: 28px;
  font-weight: 600;
`

export const ActionsBox = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`

export const Form = styled.form`
  position: relative;
  display: flex;
  gap: 6px;
  width: 100%;
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
    border-color: #949494;
  }
`

export const Submit = styled.button`
  pointer-events: none;

  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-85%, 57.5%);

  background-color: transparent;
  border: 0;
`

export const Button = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
`
