import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_DATA_ACCOUNT, getDataAccountSuccess } from '../../actions/loginAction'
import httpProvider from '../../../common/httpProvider'
import { LOGIN_URL } from '../../../common/api'

function* workerLoader() {
   const register = {
      "action": "login",
      "email": "5020077@mail.ru",
      "password": "Luky"
   }
   try {
      const { data } = yield call(httpProvider.post, LOGIN_URL, {data: register})
   
      yield put(getDataAccountSuccess(data))
   } catch (error) {
      yield put(console.log(error))
   }
}

export default function* watcherGetAccount() {
   yield takeEvery(GET_DATA_ACCOUNT, workerLoader)
}