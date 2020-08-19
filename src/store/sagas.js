import { put, call, all, spawn } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* plugin11_get__listWorker(action) {
  try {
    const result = yield call(apiService.plugin11_get__list, action)
    yield put(actions.plugin11_get__listSucceeded(result))
  } catch (err) {
    yield put(actions.plugin11_get__listFailed(err))
  }
}
function* plugin11_get__listWatcher() {
  yield takeEvery(types.PLUGIN11_GET__LIST, plugin11_get__listWorker)
}
export default function* rootSaga() {
  const sagas = [plugin11_get__listWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
