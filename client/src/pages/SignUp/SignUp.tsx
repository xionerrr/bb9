import { useMutation } from '@apollo/client'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import { T_SignUp, T_SignUpFormData } from './models'
import * as S from './styles'

import { SIGN_UP } from 'apollo'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { I_AuthData } from 'models/auth'
import { E_Routes } from 'models/routes'
import { setAuthorized } from 'store/auth'
import { LocalStorage, ToastifyRoot } from 'utils'

export const SignUp = () => {
  const dispatch = useStoreDispatch()

  const navigate = useNavigate()

  const [signIn, { called, loading, error }] = useMutation<{ signUp: I_AuthData }>(SIGN_UP, {
    onCompleted: (response) => {
      const { access_token, refresh_token, ...rest } = response.signUp.data
      LocalStorage.setAuthToken(response.signUp.data.access_token)
      dispatch(
        setAuthorized({
          isAuth: true,
          userInfo: rest,
        }),
      )
      navigate(E_Routes.home)
    },
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T_SignUpFormData>({
    defaultValues: { email: '', password: '' },
  })

  const handleSignIn = (data: T_SignUp) => {
    signIn({
      variables: {
        ...data,
      },
    })
  }

  useEffect(() => {
    if (called && error) ToastifyRoot.error('Incorrect data or account already exists')
  }, [error, called])

  return (
    <S.Inner>
      <S.Form onSubmit={handleSubmit(handleSignIn)}>
        <S.FieldBox>
          <S.TextField placeholder='Email' {...register('email', { required: true })} />
          {errors.email && <S.ErrorTypography>Email is required</S.ErrorTypography>}
        </S.FieldBox>
        <S.FieldBox>
          <S.TextField
            placeholder='Password'
            type='password'
            {...register('password', { required: true })}
          />
          {errors.password && <S.ErrorTypography>Password is required</S.ErrorTypography>}
        </S.FieldBox>
        <S.Button disabled={loading} type='submit'>
          Sign up
        </S.Button>
      </S.Form>
      <S.CustomLink to={E_Routes.signIn}>Already have an account?</S.CustomLink>
    </S.Inner>
  )
}
