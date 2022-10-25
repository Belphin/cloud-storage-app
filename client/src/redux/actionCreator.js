import {
	LOGOUT_USER,
	SET_LOGIN,
	SET_AUTHORIZATION,
	SET_REGISTR,
	SET_USER,
} from "./actions";

export const setRegistr = (form) => ({ type: SET_REGISTR, payload: form });
export const setLogin = (form) => ({
	type: SET_LOGIN,
	payload: form,
});
export const setAuthorization = () => ({ type: SET_AUTHORIZATION });

export const setUser = (data) => ({ type: SET_USER, payload: data });
export const logoutUser = () => ({ type: LOGOUT_USER });
