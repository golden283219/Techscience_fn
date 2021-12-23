import { gql } from '@apollo/client';

export const GET_MISSING_LETTERS = gql`
    query GET_MISSINGLETTERS($paginateReq: PaginateReq!) {
        missingLetters(paginateReq: $paginateReq) {
            totalCount
            missingLetters {
                id
                quesText,
		            ans
            }
        }
    }
`
export const GET_MISSING_SELECT = gql`
    query GET_MISSINGLETTERS_TO_SELECT($paginateReq: PaginateReq!) {
        missingLetters(paginateReq: $paginateReq) {
            missingLetters {
                id
                quesText,
		            ans
            }
        }
    }
`
export const CREATE_MISSING = gql`
    mutation CREATE_MISSING($createMissingReq: CreateMissingReq!) {
        createMissing(createMissingReq: $createMissingReq) {
            scs
            msg
        }
    }
`
export const EDIT_MISSING = gql`
    mutation EDIT_MISSING($editMissingReq: EditMissingReq!) {
        editMissing(editMissingReq: $editMissingReq) {
            scs
            msg
        }
    }
`
export const DELETE_MISSING = gql`
    mutation DELETE_MISSING($id: Int!) {
        deleteMissing(id: $id) {
            scs
            msg
        }
    }
`