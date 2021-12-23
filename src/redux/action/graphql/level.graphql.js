import { gql } from '@apollo/client';

export const GET_LEVELS = gql`
  query GET_LEVELS($paginateReq: PaginateReq!) {
    levels(paginateReq: $paginateReq) {
      totalCount
      levels {
        id
        name
      }
    }
  }
`
export const GET_LEVELS_TO_SELECT = gql`
  query GET_LEVELS_TO_SELECT($paginateReq: PaginateReq!) {
    levels(paginateReq: $paginateReq) {
      levels {
        id
        name
      }
    }
  }
`
export const CREATE_LEVEL = gql`
  mutation CREATE_LEVEL($createLevelReq: CreateLevelReq!) {
    createLevel(createLevelReq: $createLevelReq) {
      scs
      msg
    }
  }
`
export const EDIT_LEVEL = gql`
  mutation EDIT_LEVEL($editLevelReq: EditLevelReq!) {
    editLevel(editLevelReq: $editLevelReq) {
      scs
      msg
    }
  }
`
export const DELETE_LEVEL = gql`
  mutation DELETE_LEVEL($id: Int!) {
    deleteLevel(id: $id) {
      scs
      msg
    }
  }
`