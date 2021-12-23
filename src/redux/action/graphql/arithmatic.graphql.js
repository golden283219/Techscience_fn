import { gql } from '@apollo/client';

export const GET_ARITHMATICS= gql`
    query GET_ARITHMATICS($paginateReq: PaginateReq!) {
        arithmatics(paginateReq: $paginateReq) {
            totalCount
            arithmatics {
                id
                category,
                quesText,
                ans
            }
        }
    }
`
export const GET_ARITHMATIC_SELECT = gql`
    query GET_ARITHMATIC_TO_SELECT($paginateReq: PaginateReq!) {
        arithmatics(paginateReq: $paginateReq) {
            arithmatics {
                id
                category,
                quesText,
                ans
            }
        }
    }
`
export const CREATE_ARITHMATIC = gql`
    mutation CREATE_ARITHMATIC($createArithmaticReq: CreateArithmaticReq!) {
        createArithmatic(createArithmaticReq: $createArithmaticReq) {
            scs
            msg
        }
    }
`
export const EDIT_ARITHMATIC = gql`
    mutation EDIT_ARITHMATIC($editArithmaticReq: EditArithmaticReq!) {
        editArithmatic(editArithmaticReq: $editArithmaticReq) {
            scs
            msg
        }
    }
`
export const DELETE_ARITHMATIC = gql`
    mutation DELETE_ARITHMATIC($id: Int!) {
        deleteArithmatic(id: $id) {
            scs
            msg
        }
    }
`