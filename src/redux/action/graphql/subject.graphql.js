import { gql } from '@apollo/client';

export const GET_SUBJECTS = gql`
  query GET_SUBJECTS($paginateReq: PaginateReq!) {
    subjects(paginateReq: $paginateReq) {
      totalCount
      subjects {
        id
        name
      }
    }
  }
`
export const GET_SUBJECTS_TO_SELECT = gql`
  query GET_SUBJECTS_TO_SELECT($paginateReq: PaginateReq!) {
    subjects(paginateReq: $paginateReq) {
      subjects {
        id
        name
      }
    }
  }
`
export const CREATE_SUBJECT = gql`
  mutation CREATE_SUBJECT($createSubjectReq: CreateSubjectReq!) {
    createSubject(createSubjectReq: $createSubjectReq) {
      scs
      msg
    }
  }
`
export const EDIT_SUBJECT = gql`
  mutation EDIT_SUBJECT($editSubjectReq: EditSubjectReq!) {
    editSubject(editSubjectReq: $editSubjectReq) {
      scs
      msg
    }
  }
`
export const DELETE_SUBJECT = gql`
  mutation DELETE_SUBJECT($id: Int!) {
    deleteSubject(id: $id) {
      scs
      msg
    }
  }
`