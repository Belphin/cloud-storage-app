import { SET_USER } from "../actions";

const defaultState = {
	currentUser: {},
	isAuth: false,
};

export default function user(state = defaultState, { type, payload }) {
	switch (type) {
		case SET_USER:
			return { ...state, currentUser: payload.user, isAuth: true };
		default:
			return state;
	}
}
