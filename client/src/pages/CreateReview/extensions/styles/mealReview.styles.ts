import styled from 'styled-components'

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 142px;
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  color: #252728;
`

export const Components = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 16px;
  align-items: center;

  max-width: 256px;
  padding: 12px;

  background: #fff;
  border: 1px solid #e1e3e6;
  border-radius: 8px;

  @media (max-width: 650px) {
    width: 100%;
    max-width: 100%;
  }
`

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  max-width: 228px;
  max-height: 172px;

  svg {
    max-height: 172px;
  }
`

export const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #252728;
`

export const Rate = styled.div`
  display: flex;
  gap: 9px;
  width: 100%;

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 650px) {
    width: auto;
    margin: 0 auto;
  }
`

export const RateTypography = styled.div`
  display: flex;
  align-items: center;

  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #744500;
`

export const Action = styled.div`
  position: relative;
  width: 100%;
`

export const TextArea = styled.textarea`
  resize: none;

  width: 100%;
  height: 100%;
  padding: 16px;

  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #87898c;

  background: #fff;
  border: 1.5px solid #bec1c4;
  border-radius: 8px;

  @media (max-width: 650px) {
    min-height: 325px;
  }
`

export const Point = styled.div`
  pointer-events: none;

  position: absolute;
  top: 0;
  right: 12px;
  transform: translate(-50%, 50%);

  color: red;
`
