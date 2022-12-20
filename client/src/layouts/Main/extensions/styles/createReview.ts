import styled from 'styled-components'

export const CreateReviewBox = styled.div`
  position: fixed;
  right: 24px;
  bottom: 24px;
`

export const Button = styled.button`
  cursor: pointer;

  min-width: 64px;
  min-height: 48px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #87898c;

  background: #fff;
  border: 1.5px solid #bec1c4;
  border-radius: 8px;
  box-shadow: 0 0 9px 0 #e2dddd;

  &:hover {
    border-color: #949494;
  }
`
