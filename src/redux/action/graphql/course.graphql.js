import { gql } from '@apollo/client';

export const GET_COURSES = gql`
  query GET_COURSES($paginateReq: PaginateReq!) {
    courses(paginateReq: $paginateReq) {
      totalCount
      courses {
        id
        name
        subject {
          name
        }
      }
    }
  }
`
export const GET_COURSES_TO_SELECT = gql`
  query GET_COURSES_TO_SELECT($paginateReq: PaginateReq!) {
    courses(paginateReq: $paginateReq) {
      courses {
        id
        name
      }
    }
  }
`
export const CREATE_COURSE = gql`
  mutation CREATE_COURSE($createCourseReq: CreateCourseReq!) {
    createCourse(createCourseReq: $createCourseReq) {
      scs
      msg
    }
  }
`
export const EDIT_COURSE = gql`
  mutation EDIT_COURSE($editCourseReq: EditCourseReq!) {
    editCourse(editCourseReq: $editCourseReq) {
      scs
      msg
    }
  }
`
export const DELETE_COURSE = gql`
  mutation DELETE_COURSE($id: Int!) {
    deleteCourse(id: $id) {
      scs
      msg
    }
  }
`