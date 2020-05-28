import { GET_ERRORS, CLEAR_ERRORS } from './types'

const returnErrors = (msg, status, id = null) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status, id },
  }
}

const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
}

export { clearErrors, returnErrors }
