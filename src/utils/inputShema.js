import * as yup from 'yup'

export const signInSchema = yup.object().shape({
  username: yup.string().required(),
  password: yup.string().required()
})

export const signUpSchema = yup.object().shape({
  firstname: yup.string().max(20, 'Are you an alien?').required(),
  lastname: yup.string().max(20, 'Are you an alien?').required(),
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string()
    .min(8)
    .required(),
})

export const editUserSchema = yup.object().shape({
  firstname: yup.string().max(20, 'Are you an alien?').required(),
  lastname: yup.string().max(20, 'Are you an alien?').required(),
  username: yup.string().required(),
  email: yup.string().email().required()
})

export const changePasswordSchema = yup.object().shape({
  password: yup.string().required(),
  newPassword: yup.string()
    .min(8)
    .required(),
})

export const simpleSchema = yup.object().shape({
  id: yup.string(),
  name: yup.string().required()
})