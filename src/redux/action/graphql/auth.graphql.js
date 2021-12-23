import { gql } from '@apollo/client';

export const SIGN_IN = gql`
  mutation SIGN_IN($signinReq: SigninReq!) {
    signin(signinReq: $signinReq) {
      scs
      msg
      token
    }
  }
`
export const SIGN_UP = gql`
  mutation SIGN_UP($signupReq: SignupReq!) {
    signup(signupReq: $signupReq) {
      scs
      msg
      token
    }
  }
`
export const CHANGE_PASSWORD = gql`
  mutation CHANGE_PASSWORD($changePasswordReq: ChangePasswordReq!) {
    changePassword(changePasswordReq: $changePasswordReq) {
      scs
      msg
    }
  }
`
export const FORGOT_PASSWORD = gql`
  mutation FORGOT_PASSWORD($forgotPasswordReq: ForgotPasswordReq!) {
    forgotPassword(forgotPasswordReq: $forgotPasswordReq) {
      scs
      msg
    }
  }
`
export const RESET_PASSWORD = gql`
  mutation RESET_PASSWORD($resetPasswordReq: ResetPasswordReq!) {
    resetPassword(resetPasswordReq: $resetPasswordReq) {
      scs
      msg
    }
  }
`