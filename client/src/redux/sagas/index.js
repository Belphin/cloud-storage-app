import { all } from "redux-saga/effects";
import auth from "./authSaga";
import file from "./fileSaga";

export default function* rootSaga() {
	yield all([auth(), file()]);
}
