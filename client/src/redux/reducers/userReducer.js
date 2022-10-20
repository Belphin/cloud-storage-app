const defaultState = {
	currentUser: {},
	isAuth: false,
};

export default function user(state = defaultState, { type, payload }) {
	switch (type) {
		default:
			return state;
	}
}
