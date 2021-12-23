import { gql } from '@apollo/client';

export const GET_MEMBERSHIPS = gql`
  query GET_MEMBERSHIPS($paginateReq: PaginateReq!) {
    memberships(paginateReq: $paginateReq) {
      totalCount
      memberships {
        id
        name
      }
    }
  }
`
export const GET_MEMBERSHIPS_TO_SELECT = gql`
  query GET_MEMBERSHIPS_TO_SELECT($paginateReq: PaginateReq!) {
    memberships(paginateReq: $paginateReq) {
      memberships {
        id
        name
      }
    }
  }
`
export const CREATE_MEMBERSHIP = gql`
  mutation CREATE_MEMBERSHIP($createMembershipReq: CreateMembershipReq!) {
    createMembership(createMembershipReq: $createMembershipReq) {
      scs
      msg
    }
  }
`
export const EDIT_MEMBERSHIP = gql`
  mutation EDIT_MEMBERSHIP($editMembershipReq: EditMembershipReq!) {
    editMembership(editMembershipReq: $editMembershipReq) {
      scs
      msg
    }
  }
`
export const DELETE_MEMBERSHIP = gql`
  mutation DELETE_MEMBERSHIP($id: Int!) {
    deleteMembership(id: $id) {
      scs
      msg
    }
  }
`