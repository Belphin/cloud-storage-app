import { call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { SET_REGISTR } from "../actions";

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

export default function* user() {
	yield takeEvery(SET_REGISTR, registration);
}
