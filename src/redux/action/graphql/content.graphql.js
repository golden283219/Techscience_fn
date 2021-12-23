import { gql } from '@apollo/client';

export const GET_CONTENTS = gql`
    query GET_SPEECHES($paginateReq: PaginateReq!) {
        contents(paginateReq: $paginateReq) {
            totalCount
            contents {
                id
                speechId
                text
            }
        }
    }
`
export const GET_CONTENT_SELECT = gql`
    query GET_CONTENTS_TO_SELECT($paginateReq: PaginateReq!) {
        contents(paginateReq: $paginateReq) {
            contents {
                id
                text
            }
        }
    }
`
export const CREATE_CONTENT = gql`
    mutation CREATE_CONTENT($createContentReq: CreateContentReq!) {
        createContent(createContentReq: $createContentReq) {
            scs
            msg
        }
    }
`
export const EDIT_CONTENT = gql`
    mutation EDIT_CONTENT($editContentReq: EditContentReq!) {
        editContent(editContentReq: $editContentReq) {
            scs
            msg
        }
    }
`
export const DELETE_CONTENT = gql`
    mutation DELETE_CONTENT($id: Int!) {
        deleteContent(id: $id) {
            scs
            msg
        }
    }
`