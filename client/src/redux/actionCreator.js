import {
	LOGOUT_USER,
	SET_LOGIN,
	SET_AUTHORIZATION,
	SET_REGISTR,
	SET_USER,
	SET_FILES,
	SET_CURRENT_DIR,
	GET_FILES,
	CREATE_DIR,
	ADD_FILE,
	SET_POPUP_DISPLAY,
	PUSH_TO_STACK,
	POP_FROM_STACK,
} from "./actions";

// user
export const setRegistr = (form) => ({ type: SET_REGISTR, payload: form });
export const setLogin = (form) => ({
	type: SET_LOGIN,
	payload: form,
});
export const setAuthorization = () => ({ type: SET_AUTHORIZATION });

export const setUser = (data) => ({ type: SET_USER, payload: data });
export const logoutUser = () => ({ type: LOGOUT_USER });

// file
export const getFiles = (currentDir) => ({
	type: GET_FILES,
	payload: currentDir,
});
export const createDir = (currentDir, name) => ({
	type: CREATE_DIR,
	payload: { dirId: currentDir, name },
});

export const setFiles = (files) => ({ type: SET_FILES, payload: files });
export const setCurrentDir = (dir) => ({ type: SET_CURRENT_DIR, payload: dir });
export const addFile = (file) => ({ type: ADD_FILE, payload: file });

export const pushToStack = (dir) => ({ type: PUSH_TO_STACK, payload: dir });

//popup
export const setPopupDisplay = (display) => ({
	type: SET_POPUP_DISPLAY,
	payload: display,
});
