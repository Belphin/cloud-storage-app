import { SET_CURRENT_DIR, SET_FILES } from "../actions";

const defaultState = {
	files: [],
	currentDir: null,
};

export default function file(state = defaultState, { type, payload }) {
	switch (type) {
		case SET_FILES:
			return { ...state, files: payload };
		case SET_CURRENT_DIR:
			return { ...state, currentDir: payload };
		default:
			return state;
	}
}
