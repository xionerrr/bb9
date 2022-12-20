import styled from 'styled-components'

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  align-items: center;
  justify-content: center;

  min-width: 100%;
  min-height: 100vh;
`

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Subtitle = styled.div`
  font-size: 28px;
  font-weight: 400;
`

export const Title = styled.div`
  font-size: 48px;
  font-weight: 500;
`

export const Button = styled.button`
  cursor: pointer;

  padding: 6px 18px;

  background-color: #fbf3d5;
  border: 0;
  border-radius: 9999px;
`
