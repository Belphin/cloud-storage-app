import {
	ADD_FILE,
	SET_CURRENT_DIR,
	SET_FILES,
	SET_POPUP_DISPLAY,
} from "../actions";

const defaultState = {
	files: [],
	currentDir: null,
	popupDisplay: "none",
};

export default function file(state = defaultState, { type, payload }) {
	switch (type) {
		case SET_FILES:
			return { ...state, files: payload };
		case SET_CURRENT_DIR:
			return { ...state, currentDir: payload };
		case ADD_FILE:
			return { ...state, files: [...state.files, payload] };
		case SET_POPUP_DISPLAY:
			return { ...state, popupDisplay: payload };
		default:
			return state;
	}
}
