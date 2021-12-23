import { gql } from '@apollo/client';

export const GET_SPEECHES = gql`
  query GET_SPEECHES($paginateReq: PaginateReq!) {
    speeches(paginateReq: $paginateReq) {
      totalCount
      speeches {
        id
        name
      }
    }
  }
`
export const GET_SPEECH_SELECT = gql`
  query GET_SPEECHES_TO_SELECT($paginateReq: PaginateReq!) {
    speeches(paginateReq: $paginateReq) {
      speeches {
        id
        name
      }
    }
  }
`
export const CREATE_SPEECH = gql`
  mutation CREATE_SPEECH($createSpeechReq: CreateSpeechReq!) {
    createSpeech(createSpeechReq: $createSpeechReq) {
      scs
      msg
    }
  }
`
export const EDIT_SPEECH = gql`
  mutation EDIT_SPEECH($editSpeechReq: EditSpeechReq!) {
    editSpeech(editSpeechReq: $editSpeechReq) {
      scs
      msg
    }
  }
`
export const DELETE_SPEECH = gql`
  mutation DELETE_SPEECH($id: Int!) {
    deleteSpeech(id: $id) {
      scs
      msg
    }
  }
`