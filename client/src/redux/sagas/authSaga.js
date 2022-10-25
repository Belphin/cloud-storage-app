import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { SET_LOGIN, SET_REGISTR, SET_AUTHORIZATION } from "../actions";
import { setUser } from "../actionCreator";

function* login({ payload }) {
	const { email, password } = payload;
	try {
		const response = yield call(
			axios.post,
			"http://localhost:5000/api/auth/login",
			{
				email,
				password,
			}
		);
		localStorage.setItem("token", response.data.token);
		yield put(setUser(response.data.user));
	} catch (e) {
		alert(e.response.data.message);
	}
}

function* registr({ payload }) {
	const { email, password } = payload;
	try {
		const response = yield call(
			axios.post,
			"http://localhost:5000/api/auth/registration",
			{
				email,
				password,
			}
		);
		alert(response.data.message);
	} catch (e) {
		alert(e.response.data.message);
	}
}

function* authorization() {
	try {
		const response = yield call(
			axios.get,
			"http://localhost:5000/api/auth/auth",
			{
				headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
			}
		);
		yield put(setUser(response.data.user));
	} catch (e) {
		localStorage.removeItem("token");
	}
}

export default function* auth() {
	yield takeLatest(SET_REGISTR, registr);
	yield takeLatest(SET_LOGIN, login);
	yield takeLatest(SET_AUTHORIZATION, authorization);
}
