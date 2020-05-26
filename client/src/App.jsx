import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/app-navbar'
import { loadUser } from './flux/actions/auth-actions'
import store from './store'

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser())
  }

  render() {
    return (
      <>
        <AppNavbar />
        <>Hello World</>
      </>
    )
  }
}

export default App
