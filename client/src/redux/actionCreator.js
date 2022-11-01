import {
	LOGOUT_USER,
	SET_LOGIN,
	SET_AUTHORIZATION,
	SET_REGISTR,
	SET_USER,
	SET_FILES,
	SET_CURRENT_DIR,
	GET_FILES,
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

export const setFiles = (files) => ({ type: SET_FILES, payload: files });
export const setCurrentDir = (dir) => ({ type: SET_CURRENT_DIR, payload: dir });
