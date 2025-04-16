import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_CATALOG, getCatalogSuccess } from '../actions/getCatalogAction'
import httpProvider from '../../common/httpProvider'
import { GET_CATALOG_URL } from '../../common/api'

function* workerLoader() {
  try {
    const { data } = yield call(httpProvider.get, GET_CATALOG_URL)
  
    yield put(getCatalogSuccess(data))
  } catch (error) {
    yield put(console.log(error))
  }
}

export default function* watcherGetCatalog() {
  yield takeEvery(GET_CATALOG, workerLoader)
}
  