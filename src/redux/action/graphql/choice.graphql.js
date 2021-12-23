import { gql } from '@apollo/client';

export const GET_CHOICES = gql`
  query GET_CHOICES($paginateReq: PaginateReq!) {
    choices(paginateReq: $paginateReq) {
      totalCount
      choices {
        id
        name
        correct
        comment
      }
    }
  }
`
export const CREATE_CHOICE = gql`
  mutation CREATE_CHOICE($createChoiceReq: MutateChoiceReq!) {
    createChoice(createChoiceReq: $createChoiceReq) {
      scs
      msg
    }
  }
`
export const EDIT_CHOICE = gql`
  mutation EDIT_CHOICE($editChoiceReq: MutateChoiceReq!) {
    editChoice(editChoiceReq: $editChoiceReq) {
      scs
      msg
    }
  }
`
export const DELETE_CHOICE = gql`
  mutation DELETE_CHOICE($id: Int!) {
    deleteChoice(id: $id) {
      scs
      msg
    }
  }
`