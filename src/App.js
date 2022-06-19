import React, { useEffect } from 'react'
import Repo from 'pages/Repo/Repo'
import Search from 'pages/Search/SearchBar'
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import './i18n'
import { Router, Switch, Route } from 'react-router-dom'
import history from 'redux/_helpers/history'
import { connect } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css'

require('dotenv').config()

function App(props) {
  return (
    <div>
      <Router history={history}>
        <Route exact path="/" component={Search} />
        <Route exact path="/:name" component={Repo} />
      </Router>
    </div>
  )
}
const mapStateToProps = state => {}

const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(App)
