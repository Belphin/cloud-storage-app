import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { CREATE_DIR, GET_FILES } from "../actions";
import { addFile, setFiles } from "../actionCreator";

function* getFiles({ payload }) {
	try {
		const response = yield call(
			axios.get,
			`http://localhost:5000/api/files${
				payload.dirId ? "?parent=" + payload.dirId : ""
			}`,
			{ headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
		);
		yield put(setFiles(response.data));
	} catch (e) {
		alert(e.response.data.message);
	}
}

function* createDir({ payload }) {
	try {
		const { dirId, name } = payload;
		const response = yield call(
			axios.post,
			"http://localhost:5000/api/files",
			{ name, parent: dirId, type: "dir" },
			{ headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
		);
		console.log(response.data);
		yield put(addFile(response.data));
	} catch (e) {
		alert(e.response.data.message);
	}
}

export default function* file() {
	yield takeEvery(GET_FILES, getFiles);
	yield takeEvery(CREATE_DIR, createDir);
}
