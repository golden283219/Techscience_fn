import { SET_RESULT } from '../action/type';

const initialState = {
  result: undefined,
  refresh: undefined
}

const resultReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_RESULT:
      if(!payload)
        return { ...state, result: undefined, refresh: undefined }

      return { ...state, result: { scs: payload.scs, msg: payload.msg }, refresh: payload.refresh }

    default:
      return state;
  }
}

export default resultReducer