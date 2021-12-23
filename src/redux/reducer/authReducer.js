import { SET_ROLE, SET_TOKEN } from '../action/type';

const initialState = {
  role: undefined,
  token: undefined
}

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ROLE:
      return { ...state, role: payload }

    case SET_TOKEN:
      return { ...state, token: payload }

    default:
      return state;
  }
}

export default authReducer