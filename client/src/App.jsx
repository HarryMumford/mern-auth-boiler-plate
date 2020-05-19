import React, { Component } from 'react'
import axios from 'axios'
import { Provider } from 'react-redux'
import store from './store'
import { loadUser } from './flux/actions/authActions'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/AppNavbar'

function App() {
  return (
    <Provider store={store}>
      <AppNavbar />
      <>Hello World</>
    </Provider>
  )
}

export default App
