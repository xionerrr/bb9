import { CreateReview } from './extensions'
import { T_MainLayoutProps } from './models'
import * as S from './styles'

import { Header } from 'features'

export const MainLayout = ({ children }: T_MainLayoutProps) => {
  return (
    <S.Inner>
      <Header />
      <S.Main>
        <S.Wrapper>{children}</S.Wrapper>
        <CreateReview />
      </S.Main>
    </S.Inner>
  )
}
