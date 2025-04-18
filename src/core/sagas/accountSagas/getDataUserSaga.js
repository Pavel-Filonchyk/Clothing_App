import { takeEvery, put, call, select } from 'redux-saga/effects'
import { GET_DATA_ACCOUNT, getDataAccountSuccess } from '../../actions/loginAction'
import httpProvider from '../../../common/httpProvider'
import { LOGIN_URL } from '../../../common/api'

function* workerLoader() {
   const auth = yield select(state => state.loginReducer.auth)
   console.log(auth)
   try {
      const { data } = yield call(httpProvider.post, LOGIN_URL, {data: auth})
   
      yield put(getDataAccountSuccess(data))
   } catch (error) {
      console.log(error)
   }
}

export default function* watcherGetDataUser() {
   yield takeEvery(GET_DATA_ACCOUNT, workerLoader)
}