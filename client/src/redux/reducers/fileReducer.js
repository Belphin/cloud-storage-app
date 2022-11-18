import {
	ADD_FILE,
	DELETE_FILE,
	PUSH_TO_STACK,
	SET_CURRENT_DIR,
	SET_FILES,
	SET_POPUP_DISPLAY,
} from "../actions";

const defaultState = {
	files: [],
	currentDir: null,
	popupDisplay: "none",
	diskStack: [],
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
		case PUSH_TO_STACK:
			return { ...state, diskStack: [...state.diskStack, payload] };
		case DELETE_FILE:
			return {
				...state,
				files: [...state.files.filter((file) => file._id != payload)],
			};
		default:
			return state;
	}
}
