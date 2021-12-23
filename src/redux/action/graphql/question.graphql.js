import { gql } from '@apollo/client';

export const GET_QUESTIONS = gql`
  query GET_QUESTIONS($paginateReq: PaginateReq!) {
    questions(paginateReq: $paginateReq) {
      totalCount
      questions {
        id
        name
        type
        free
        image
        choices {
          id
        }
      }
    }
  }
`
export const CREATE_QUESTION = gql`
  mutation CREATE_QUESTION($createQuestionReq: MutateQuestionReq!) {
    createQuestion(createQuestionReq: $createQuestionReq) {
      scs
      msg,
      question {
        id
      }
    }
  }
`
export const CREATE_QUESTIONS = gql`
  mutation CREATE_QUESTIONS($createQuestionsReq: CreateQuestionsReq!) {
    createQuestions(createQuestionsReq: $createQuestionsReq) {
      scs
      msg
    }
  }
`
export const EDIT_QUESTION = gql`
  mutation EDIT_QUESTION($editQuestionReq: MutateQuestionReq!) {
    editQuestion(editQuestionReq: $editQuestionReq) {
      scs
      msg
    }
  }
`
export const DELETE_QUESTION = gql`
  mutation DELETE_QUESTION($id: Int!) {
    deleteQuestion(id: $id) {
      scs
      msg
    }
  }
`