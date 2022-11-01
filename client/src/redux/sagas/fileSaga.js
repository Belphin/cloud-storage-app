import { call, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { GET_FILES } from "../actions";

function* getFiles({ payload }) {
	try {
		const response = yield call(
			axios.get,
			`http://localhost:5000/api/files${
				payload.dirId ? "?parent=" + payload.dirId : ""
			}`,
			{ headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
		);
		console.log(response.data);
	} catch (e) {
		alert(e.response.data.message);
	}
}

export default function* file() {
	yield takeEvery(GET_FILES, getFiles);
}
