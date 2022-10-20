import { all } from "redux-saga/effects";

export default function* rootSaga() {
	console.log(1);
	yield all([]);
}
