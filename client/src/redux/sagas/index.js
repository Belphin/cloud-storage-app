import auth from "./authSaga";

export default function* rootSaga() {
	yield auth();
}
