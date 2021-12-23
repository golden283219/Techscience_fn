import { dispatch } from '../store';
import {
  SET_RESULT
} from './type';

export const setResult = payload => {
  if (!payload)
    dispatch({ type: SET_RESULT, payload: { scs: false, msg: 'Whoops! Something went wrong.' } })
  else
    dispatch({ type: SET_RESULT, payload })

  return dispatch({ type: SET_RESULT, payload: undefined })
}