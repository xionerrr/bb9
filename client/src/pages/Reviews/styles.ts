import styled from 'styled-components'

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: center;

  width: 100%;
  padding: 24px;
`

export const More = styled.button`
  cursor: pointer;

  padding: 2px 12px;

  font-size: 11px;
  font-weight: 400;
  color: #fff;

  background-color: #f48225;
  border: 0;
  border-radius: 9999px;

  &:hover {
    background-color: #f4ae75;
    border-radius: 9999px;
  }
`
