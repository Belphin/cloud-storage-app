import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { SET_AUTHORIZATION, SET_REGISTR } from "../actions";
import { setUser } from "../actionCreator";

function* authorization({ payload }) {
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
		yield put(setUser(response.data.user));
		localStorage.setItem("token", response.data.token);
	} catch (e) {
		alert(e.response.data.message);
	}
}

function* registration({ payload }) {
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

export default function* auth() {
	yield takeEvery(SET_REGISTR, registration);
	yield takeEvery(SET_AUTHORIZATION, authorization);
}
