import user from "./userSaga";

export default function* rootSaga() {
	yield user();
}
