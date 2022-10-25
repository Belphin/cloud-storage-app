import { LOGOUT_USER, SET_USER } from "../actions";

const defaultState = {
	currentUser: {},
	isAuth: false,
};

export default function user(state = defaultState, { type, payload }) {
	switch (type) {
		case SET_USER:
			return { ...state, currentUser: payload.user, isAuth: true };
		case LOGOUT_USER:
			localStorage.removeItem("token");
			return { ...state, currentUser: {}, isAuth: false };
		default:
			return state;
	}
}
