import { takeEvery, put, call, select } from 'redux-saga/effects'
import { SEND_REGISTER, sendRegisterSuccess } from '../actions/loginAction'
import httpProvider from '../../common/httpProvider'
import { LOGIN_URL } from '../../common/api'

function* workerLoader() {
    const register = yield select(state => state.loginReducer.register)
  
    try {
        const { data } = yield call(httpProvider.post, LOGIN_URL, {data: register})
        
        yield put(sendRegisterSuccess(data))
      } catch (error) {
        yield put(console.log(error))
      }
  }

export default function* watcherLogin() {
  yield takeEvery(SEND_REGISTER, workerLoader)
}