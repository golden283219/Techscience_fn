import { gql } from '@apollo/client';

export const GET_ROLES = gql`
  query GET_ROLES($paginateReq: PaginateReq!) {
    roles(paginateReq: $paginateReq) {
      totalCount
      roles {
        id
        name
      }
    }
  }
`
export const GET_ROLES_TO_SELECT = gql`
  query GET_ROLES_TO_SELECT($paginateReq: PaginateReq!) {
    roles(paginateReq: $paginateReq) {
      roles {
        id
        name
      }
    }
  }
`
export const CREATE_ROLE = gql`
  mutation CREATE_ROLE($createRoleReq: CreateRoleReq!) {
    createRole(createRoleReq: $createRoleReq) {
      scs
      msg
    }
  }
`
export const EDIT_ROLE = gql`
  mutation EDIT_ROLE($editRoleReq: EditRoleReq!) {
    editRole(editRoleReq: $editRoleReq) {
      scs
      msg
    }
  }
`
export const DELETE_ROLE = gql`
  mutation DELETE_ROLE($id: Int!) {
    deleteRole(id: $id) {
      scs
      msg
    }
  }
`