import styled from 'styled-components'

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  color: #252728;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
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

export const Component = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Content = styled.div`
  display: flex;
  flex-shrink: 0;
  gap: 18px;
  align-items: center;

  width: 100%;
  max-width: 256px;
`

export const Avatar = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 72px;
  max-height: 72px;

  svg {
    max-height: 72px;
  }
`

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`

export const Label = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
  line-height: 14px;
  color: #252728;
`

export const Rate = styled.div`
  display: flex;
  gap: 9px;

  svg {
    width: 18px;
    height: 18px;
  }
`

export const Actions = styled.div`
  position: relative;
  width: 100%;
`

export const Point = styled.div`
  pointer-events: none;

  position: absolute;
  top: 0;
  right: 12px;
  transform: translate(-50%, 50%);

  color: red;
`
