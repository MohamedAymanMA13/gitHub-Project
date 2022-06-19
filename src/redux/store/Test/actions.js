import { TEST, GET_ALL_REPO } from 'redux/store/actionTypes'
import axios from 'axios'
import Search from 'pages/Search/SearchBar'

export const testAction = () => {
  return dispatch => {
    dispatch({ type: TEST, payload: ['test1', 'test2'] })
  }
}
export const testAction2 = params => {
  return dispatch => {
    axios
      .get(`https://api.github.com/search/repositories`, {
        params,
      })
      .then(res => {
        console.log(res)
        dispatch({
          type: GET_ALL_REPO,
          payload: res.data.items,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
}
