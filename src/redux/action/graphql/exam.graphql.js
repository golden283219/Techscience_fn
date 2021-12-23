import { gql } from '@apollo/client';

export const GET_EXAMS = gql`
  query GET_EXAMS($paginateReq: PaginateReq!) {
    exams(paginateReq: $paginateReq) {
      totalCount
      exams {
        id
        name
        type
        genre
        updatedAt
        subject {
          name
        }
        course {
          name
        }
        level {
          name
        }
        students {
          id
        }
      }
    }
  }
`
export const GET_EXAM_FOR_TEST = gql`
  query GET_EXAM_FOR_TEST($paginateReq: PaginateReq!) {
    exams(paginateReq: $paginateReq) {
      exams {
        questions {
          id
          name
          type
          image
          choices {
            id
            name
            correct
            comment
          }
        }
      }
    }
  }
`
export const GET_EXAMS_TO_SELECT = gql`
  query GET_EXAMS_TO_SELECT($paginateReq: PaginateReq!) {
    exams(paginateReq: $paginateReq) {
      exams {
        id
        name
      }
    }
  }
`
export const CREATE_EXAM = gql`
  mutation CREATE_EXAM($createExamReq: CreateExamReq!) {
    createExam(createExamReq: $createExamReq) {
      scs
      msg
    }
  }
`
export const EDIT_EXAM = gql`
  mutation EDIT_EXAM($editExamReq: EditExamReq!) {
    editExam(editExamReq: $editExamReq) {
      scs
      msg
    }
  }
`
export const DELETE_EXAM = gql`
  mutation DELETE_EXAM($id: Int!) {
    deleteExam(id: $id) {
      scs
      msg
    }
  }
`
export const REQUEST_EXAM = gql`
  mutation REQUEST_EXAM($id: Int!) {
    requestExam(id: $id) {
      scs
      msg
    }
  }
`
export const ASSIGN_EXAM = gql`
  mutation ASSIGN_EXAM($assignExamReq: AssignExamReq!) {
    assignExam(assignExamReq: $assignExamReq) {
      scs
      msg
    }
  }
`