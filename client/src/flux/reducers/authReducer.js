import {
	USER_LOADED,
	USER_LOADING,
	AUTH_ERROR,
	LOGIN_SUCCESS,
	LOGIN_FAIL,
	LOGOUT_SUCCESS,
	REGISTER_SUCCESS,
	REGISTER_FAIL,
} from '../actions/types'

const initialState = {
	token: localStorage.getItem('token'),
	isAuthenticated: null,
	isLoaded: false,
	user: null,
}

export default function (state = initialState, action) {
	switch (action.type) {
		case USER_LOADING:
			return {
				...state,
				isLoading: true,
			}
		case USER_LOADED:
			return {
				...state,
				isAuthenticated: true,
				isLoaded: false,
				user: action.payload,
			}
		default:
			return state
	}
}
