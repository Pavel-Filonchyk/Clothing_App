import { takeEvery, put, call, select } from 'redux-saga/effects'
import { DELETE_ACCOUNT, sendRegisterSuccess } from '../../actions/loginAction'
import httpProvider from '../../../common/httpProvider'
import { EDIT_PROFILE } from '../../../common/api'

function* workerLoader() {
   const deleteAccount = yield select(state => state.loginReducer.deleteAccount)
   console.log(deleteAccount)
   try {
      const { data } = yield call(httpProvider.post, EDIT_PROFILE, {data: deleteAccount})
      yield put(sendRegisterSuccess(data))
   } catch (error) {
      yield put(console.log(error))
   }
}

export default function* watcherDeleteAccount() {
  yield takeEvery(DELETE_ACCOUNT, workerLoader)
}