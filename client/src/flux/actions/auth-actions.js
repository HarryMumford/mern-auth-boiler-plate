import axios from 'axios'
import { returnErrors } from './error-actions'

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types'

// Register User
const register = ({ name, email, password }) => (dispatch) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  // Request body
  const body = JSON.stringify({ name, email, password })

  axios
    .post('/api/auth/register', body, config)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(
          err.response.data.msg,
          err.response.status,
          'REGISTER_FAIL'
        )
      )
      dispatch({
        type: REGISTER_FAIL,
      })
    })
}

// Setup config/headers and token
const tokenConfig = (getState) => {
  // Get token from local storage
  const { token } = getState().auth

  // Headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  }

  if (token) {
    config.headers['x-auth-token'] = token
  }

  return config
}

// Check token & load user
const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING })

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then((res) =>
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(returnErrors(err.response.data.msg, err.response.status))
      dispatch({
        type: AUTH_ERROR,
      })
    })
}

// Login user
const login = ({ email, password }) => (dispatch) => {
  console.log('logging in...')
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  // Request body
  const body = JSON.stringify({ email, password })

  axios
    .post('/api/auth', body, config)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data.msg, err.response.status, 'LOGIN_FAIL')
      )
      dispatch({
        type: LOGIN_FAIL,
      })
    })
}

// Logout user
const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  }
}

export { loadUser, tokenConfig, register, logout, login }
