import { GET_ALL_REPO } from 'redux/store/actionTypes'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_REPO:
      return {
        ...state,
        data: action.payload,
      }

    default:
      return { ...state }
  }
}

export default reducer
