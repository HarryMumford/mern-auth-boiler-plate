import React, { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import AppNavbar from './components/app-navbar'
import { loadUser } from './flux/actions/auth-actions'
import store from './store'

function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  })

  return (
    <>
      <AppNavbar />
    </>
  )
}

export default App
