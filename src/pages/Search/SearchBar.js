import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { testAction, testAction2 } from 'redux/store/actions'
import img from '../../asset/25231.png'
import imgSearch from '../../asset/searchIcon.png'

const SearchBar = () => {
  const [state, setState] = useState({ q: '' })
  const history = useHistory()
  const handelClick = () => {
    console.log(state)
    history.push(`/${state.q}`)
  }

  return (
    <div className="App">
      {/* <div>
        <img src={imgSearch} alt="img" className="img40" />
      </div> */}
      <img src={img} alt="img" className="w-20 pt-5" />
      <div className="position-relative my-3 mx-auto col-3">
        <button className="none-btn search-icon" type="button" onClick={handelClick}>
          <img src={imgSearch} alt="img" className="img20" />
        </button>

        <form onSubmit={handelClick}>
          <input
            className="form-control pl-5  d-inline"
            style={{ paddingLeft: 30 }}
            type="text"
            value={state.q}
            onChange={e => setState({ q: e.target.value })}
            placeholder="Search"
          />
        </form>
        {/* <button type="button" className="btn btn-light " onClick={handelClick}>
          Search
        </button> */}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    data: state.Test.data,
  }
}
const mapDispatchToProps = {
  testAction,
  testAction2,
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
