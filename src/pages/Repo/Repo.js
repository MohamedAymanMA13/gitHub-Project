import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { testAction, testAction2 } from 'redux/store/actions'
import { useTranslation } from 'react-i18next'
import ReactPaginate from 'react-paginate'
import { useHistory, useParams } from 'react-router-dom'
import imgForks from '../../asset/1154303-200.png'
import imgStars from '../../asset/stars.jpg'

// ii18n
function Repo(props) {
  const { name } = useParams()
  const [state, setState] = useState({ q: name, sort: undefined, order: undefined, page: 1 })
  useEffect(() => {
    props.testAction2(state)
  }, [state])

  const { t } = useTranslation() // ti18n
  const handleOnChange = event => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }
  const restData = () => {
    setState({ ...state, sort: '', order: 'desc', page: 1 })
  }

  return (
    <div>
      <div>
        <select
          className="form-select m-2 w-20 d-inline "
          name="sort"
          id="sort"
          value={state.sort}
          onChange={handleOnChange}>
          <option value="">Best Match</option>
          <option value="stars">stars</option>
          <option value="forks">forks</option>
        </select>
        <select
          className="form-select w-20 d-inline m-2"
          name="order"
          id="order"
          value={state.order}
          onChange={e => setState({ ...state, [e.target.name]: e.target.value })}>
          <option value="desc">desc</option>
          <option value="asc">asc</option>
        </select>
        <button className=" none-btn" type="button" onClick={restData}>
          reset
        </button>
      </div>
      <div className="row p-3">
        {props.data?.map((x, i) => {
          return (
            <div key={`${i + 1}data`} className="p-2 col-3">
              <div className="card shadow-sm p-3  bg-white rounded ">
                <div className="card-deck   ">
                  <div className="card-body card-height">
                    <h5 className="card-title">{x.name}</h5>
                    <p className="card-text">{x.description}</p>
                  </div>

                  <div>
                    <span className="p-3">
                      <img src={imgStars} alt="img" className="img20" /> {x.stargazers_count}
                    </span>

                    <span className="p-4">
                      <img src={imgForks} alt="img" className="img20" /> {x.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="commentBox text-justify text-center">
        <ReactPaginate
          previousLabel="previous"
          nextLabel="next"
          breakLabel="..."
          pageCount={34}
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={e => {
            setState({ ...state, page: e.selected + 1 })
          }}
          containerClassName="pagination"
          breakClassName="mx-1 page-number"
          breakLinkClassName="mx-1 page-number "
          pageClassName="mx-1 page-number "
          activeClassName="mx-1 page-number active"
          activeLinkClassName="mx-1 page-number active"
          nextClassName="mx-1 page-number "
          previousClassName="mx-4 page-number "
          pageLinkClassName="mx-1 page-number "
        />
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
export default connect(mapStateToProps, mapDispatchToProps)(Repo)
