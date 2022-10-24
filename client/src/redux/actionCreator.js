import { SET_AUTHORIZATION, SET_REGISTR, SET_USER } from "./actions";

export const setRegistr = (form) => ({ type: SET_REGISTR, payload: form });
export const setAuthorization = (form) => ({
	type: SET_AUTHORIZATION,
	payload: form,
});

export const setUser = (data) => ({ type: SET_USER, payload: data });
