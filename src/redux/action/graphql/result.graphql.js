import { gql } from '@apollo/client';

export const GET_PENDINGS = gql`
  query GET_PENDINGS($paginateReq: PaginateReq!) {
    results(paginateReq: $paginateReq) {
      pendings {
        totalCount
        results {
          id
          totalQuestion
          attempedQuestion
          tookAt
          exam {
            name
          }
          user {
            fullname
          }
        }
      }
    }
  }
`
export const GET_ASSINGEDS = gql`
  query GET_ASSINGEDS($paginateReq: PaginateReq!) {
    results(paginateReq: $paginateReq) {
      assigneds {
        totalCount
        results {
          id
          assignedAt
          exam {
            id
            name
          }
          user {
            fullname
          }
        }
      }
    }
  }
`
export const GET_REQUESTEDS = gql`
  query GET_REQUESTEDS($paginateReq: PaginateReq!) {
    results(paginateReq: $paginateReq) {
      requesteds {
        totalCount
        results {
          id
          requestedAt
          exam {
            name
          }
          user {
            fullname
          }
        }
      }
    }
  }
`
export const GET_GRADEDS = gql`
  query GET_GRADEDS($paginateReq: PaginateReq!) {
    results(paginateReq: $paginateReq) {
      gradeds {
        totalCount
        results {
          id
          totalQuestion
          attempedQuestion
          assignedAt
          tookAt
          grade
          exam {
            name
          }
          user {
            fullname
          }
          answers {
            id
            grade
            answer
            comment
            question {
              name
              type
            }
          }
        }
      }
    }
  }
`
export const GET_ANSWERS = gql`
  query GET_ANSWERS($paginateReq: PaginateReq!) {
    getAnswers(paginateReq: $paginateReq) {
      totalCount
      answers {
        id
      }
    }
  }
`
export const GET_ANSWERS_TO_GRADE = gql`
  query GET_ANSWERS_TO_GRADE($paginateReq: PaginateReq!) {
    answers(paginateReq: $paginateReq) {
      answers {
        id
        answer
        question {
          name
        }
      }
    }
  }
`
export const ACCEPT_RESULT = gql`
  mutation ACCEPT_RESULT($id: Int!) {
    acceptResult(id: $id) {
      scs
      msg
    }
  }
`
export const SAVE_RESULT = gql`
  mutation SAVE_RESULT($saveResultReq: SaveResultReq!) {
    saveResult(saveResultReq: $saveResultReq) {
      scs
      msg
    }
  }
`
export const GRADE_RESULT = gql`
  mutation GRADE_RESULT($gradeResultReq: GradeResultReq!) {
    gradeResult(gradeResultReq: $gradeResultReq) {
      scs
      msg
    }
  }
`