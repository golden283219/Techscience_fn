import { gql } from '@apollo/client';

export const GET_ACCOUNTS = gql`
  query GET_ACCOUNTS($paginateReq: PaginateReq!) {
    accounts(paginateReq: $paginateReq) {
      totalCount
      accounts {
        id
        name
        user {
          fullname
        }
      }
    }
  }
`
export const GET_ACCOUNTS_TO_SELECT = gql`
  query GET_ACCOUNTS_TO_SELECT($paginateReq: PaginateReq!) {
    accounts(paginateReq: $paginateReq) {
      accounts {
        id
        name
      }
    }
  }
`
export const GET_ACCOUNT = gql`
  query GET_ACCOUNT($id: Int!) {
    accountById(id: $id) {
      id
      name
      user {
        fullname
      }
    }
  }
`
export const CREATE_ACCOUNT = gql`
  mutation CREATE_ACCOUNT($createAccountReq: CreateAccountReq!) {
    createAccount(createAccountReq: $createAccountReq) {
      scs
      msg
    }
  }
`
export const EDIT_ACCOUNT = gql`
  mutation EDIT_ACCOUNT($editAccountReq: EditAccountReq!) {
    editAccount(editAccountReq: $editAccountReq) {
      scs
      msg
    }
  }
`
export const EDIT_ACCOUNT_IMAGE = gql`
  mutation EDIT_ACCOUNT_IMAGE($editAccountImageReq: EditAccountImageReq!) {
    editAccountImage(editAccountImageReq: $editAccountImageReq) {
      scs
      msg
    }
  }
`
export const DELETE_ACCOUNT = gql`
  mutation DELETE_ACCOUNT($id: Int!) {
    deleteAccount(id: $id) {
      scs
      msg
    }
  }
`