import { takeEvery, put, call, select } from 'redux-saga/effects'
import { CHANGE_ACCOUNT, changeAccountSuccess } from '../../actions/loginAction'
import httpProvider from '../../../common/httpProvider'
import { EDIT_PROFILE } from '../../../common/api'

function* workerLoader() {
   const dataAccount = yield select(state => state.loginReducer.dataAccount)

   try {
      const { data } = yield call(httpProvider.post, EDIT_PROFILE, {data: dataAccount})
      yield put(changeAccountSuccess(data))
   } catch (error) {
      yield put(console.log(error))
   }
}

export default function* watcherChangeAccount() {
  yield takeEvery(CHANGE_ACCOUNT, workerLoader)
}