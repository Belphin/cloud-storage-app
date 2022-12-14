import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
	ASYNC_DELETE_FILE,
	CREATE_DIR,
	DOWNLOAD_FILE,
	GET_FILES,
	UPLOAD_FILE,
} from "../actions";
import { addFile, deleteFile, setFiles } from "../actionCreator";

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
		alert(e?.response?.data?.message);
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
		alert(e?.response?.data?.message);
	}
}

function* uploadFile({ payload }) {
	try {
		const { file, dirId } = payload;
		const formData = new FormData();
		formData.append("file", file);
		if (dirId) {
			formData.append("parent", dirId);
		}
		const response = yield call(
			axios.post,
			"http://localhost:5000/api/files/upload",
			formData,
			{
				headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
				onUploadProgress: (progressEvent) => {
					const totalLength = progressEvent.lengthComputable
						? progressEvent.total
						: progressEvent.target.getResponseHeader("content-length") ||
						  progressEvent.target.getResponseHeader(
								"x-decompressed-content-length"
						  );
					console.log("total", totalLength);
					if (totalLength) {
						let progress = Math.round(
							(progressEvent.loaded * 100) / totalLength
						);
						console.log(progress);
					}
				},
			}
		);
		yield put(addFile(response.data));
	} catch (e) {
		alert(e?.response?.data?.message);
	}
}

function* downloadFile({ payload }) {
	try {
		const response = yield call(
			fetch,
			`http://localhost:5000/api/files/download?id=${payload._id}`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}
		);
		if (response.status === 200) {
			const blob = yield response.blob();
			const downloadUrl = window.URL.createObjectURL(blob);
			const link = document.createElement("a");
			link.href = downloadUrl;
			link.download = payload.name;
			document.body.appendChild(link);
			link.click();
			link.remove();
		}
	} catch (e) {
		alert(e?.response?.data?.message);
	}
}

function* removeFile({ payload }) {
	try {
		console.log(payload);
		const response = yield call(
			axios.delete,
			`http://localhost:5000/api/files?id=${payload}`,
			{
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			}
		);
		yield put(deleteFile(payload));
		alert(response.data.message);
	} catch (e) {
		alert(e?.response?.data?.message);
	}
}

export default function* file() {
	yield takeEvery(GET_FILES, getFiles);
	yield takeEvery(CREATE_DIR, createDir);
	yield takeEvery(UPLOAD_FILE, uploadFile);
	yield takeEvery(DOWNLOAD_FILE, downloadFile);
	yield takeEvery(ASYNC_DELETE_FILE, removeFile);
}
