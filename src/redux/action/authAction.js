import { decode } from 'jsonwebtoken';
import { dispatch } from '../store';
import { client } from './graphql/client';
import { setResult } from './resultAction';
import { SET_ROLE, SET_TOKEN } from './type';
import {
  SIGN_IN,
  SIGN_UP,
  CHANGE_PASSWORD,
  FORGOT_PASSWORD,
  RESET_PASSWORD,
} from './graphql/auth.graphql';

export const _signIn = data => {
  return client.mutate({
    mutation: SIGN_IN,
    variables: {
      signinReq: data
    },
    update: cache => cache.reset()
  }).then(({ data, error }) => {
    if (!!error)
      return setResult()

    const { signin: { scs, msg, token } } = data
    if (!scs)
      return setResult({ scs, msg })

    const { roleId } = decode(token)
    dispatch({ type: SET_ROLE, payload: roleId })
    dispatch({ type: SET_TOKEN, payload: token })
    localStorage.setItem('token', token)
    return setResult({ scs, msg })
  })
}

export const _signUp = data => {
  return client.mutate({
    mutation: SIGN_UP,
    variables: {
      signupReq: data
    },
    update: cache => cache.reset()
  }).then(({ data, error }) => {
    if (!!error)
      return setResult()

    const { signup: { scs, msg, token } } = data
    if (!scs)
      return setResult({ scs, msg })

    const { roleId } = decode(token)
    dispatch({ type: SET_ROLE, payload: roleId })
    dispatch({ type: SET_TOKEN, payload: token })
    localStorage.setItem('token', token)
    return setResult({ scs, msg })
  })
}

export const _changePassword = changePasswordReq => {
  return client.mutate({
    mutation: CHANGE_PASSWORD,
    variables: { changePasswordReq }
  }).then(({ data, errors }) => {
    if (!!errors)
      return setResult()

    const { changePassword: { scs, msg } } = data
    if (!scs)
      return setResult({ scs, msg })

    return setResult({ scs, msg })
  })
}

export const _forgotPassword = forgotPasswordReq => {
  return client.mutate({
    mutation: FORGOT_PASSWORD,
    variables: { forgotPasswordReq }
  }).then(({ data, errors }) => {
    if (!!errors)
      return setResult()

    const { forgotPassword: { scs, msg } } = data
    if (!scs)
      return setResult({ scs, msg })

    return setResult({ scs, msg })
  })
}

export const _resetPassword = resetPasswordReq => {
  return client.mutate({
    mutation: RESET_PASSWORD,
    variables: { resetPasswordReq }
  }).then(({ data, errors }) => {
    if (!!errors)
      return setResult()

    const { resetPassword: { scs, msg } } = data

    if (!scs)
      return setResult({ scs, msg })

    return { scs, msg, setResult }
  })
}

export const _singOut = () => {
  localStorage.removeItem('token')
  return dispatch({ type: SET_ROLE, payload: undefined })
}