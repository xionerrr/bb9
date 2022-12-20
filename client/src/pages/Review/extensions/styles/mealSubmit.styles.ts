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
