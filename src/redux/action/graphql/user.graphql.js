import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GET_USERS($paginateReq: PaginateReq!) {
    users(paginateReq: $paginateReq) {
      totalCount
      users {
        id
        firstname
        lastname
        fullname
        email
        username
        approved
        lockedOut
        updatedAt
        account {
          id
          name
        }
        membership {
          id
          name
        }
        role {
          id
          name
        }
      }
    }
  }
`
export const GET_USERS_TO_SELECT = gql`
  query GET_USERS($paginateReq: PaginateReq!) {
    users(paginateReq: $paginateReq) {
      users {
        id
        fullname
      }
    }
  }
`
export const GET_USER = gql`
  query GET_USER($id: Int!) {
    userById(id: $id) {
      id
      name
      user {
        fullname
      }
    }
  }
`
export const CREATE_USER = gql`
  mutation CREATE_USER($createUserReq: CreateUserReq!) {
    createUser(createUserReq: $createUserReq) {
      scs
      msg
    }
  }
`
export const EDIT_USER = gql`
  mutation EDIT_USER($editUserReq: EditUserReq!) {
    editUser(editUserReq: $editUserReq) {
      scs
      msg
    }
  }
`
export const DELETE_USER = gql`
  mutation DELETE_USER($id: Int!) {
    deleteUser(id: $id) {
      scs
      msg
    }
  }
`