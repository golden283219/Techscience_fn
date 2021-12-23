import { client } from './graphql/client';
import { setResult } from './resultAction';
import {
  SAVE_RESULT,
  GRADE_RESULT
} from './graphql/result.graphql';
import { RESULT_TABLE } from '../../utils/tables';

export const _saveResult = result => {
  return client.mutate({
    mutation: SAVE_RESULT,
    variables: { saveResultReq: result },
    update: cache => cache.reset()
  }).then(({ data, errors }) => {
    if (!!errors)
      return setResult()

    const { saveResult: { scs, msg } } = data

    return setResult({ scs, msg, refresh: RESULT_TABLE })
  })
}

export const _gradeResult = grade => {
  return client.mutate({
    mutation: GRADE_RESULT,
    variables: { gradeResultReq: grade },
    update: cache => cache.reset()
  }).then(({ data, errors }) => {
    if (!!errors)
      return setResult()

    const { gradeResult: { scs, msg } } = data

    return setResult({ scs, msg, refresh: RESULT_TABLE })
  })
}