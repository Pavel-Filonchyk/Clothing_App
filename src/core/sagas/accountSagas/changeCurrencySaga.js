import { takeEvery, put, call, select } from 'redux-saga/effects'
import { CHANGE_CURRENCY, changeCurrencySuccess } from '../../actions/loginAction'
import httpProvider from '../../../common/httpProvider'
import { EDIT_PROFILE } from '../../../common/api'

function* workerLoader() {
   const currency = yield select(state => state.loginReducer.currency)

   const changeCurrency = {
      "action": "settings_change_valuta",
      "valuta": currency,
      "client_id": "351026"
   }
  
   try {
      const { data } = yield call(httpProvider.post, EDIT_PROFILE, {data: changeCurrency})
      yield put(changeCurrencySuccess(data))
   } catch (error) {
      yield put(console.log(error))
   }
}

export default function* watcherChangeCurrency() {
  yield takeEvery(CHANGE_CURRENCY, workerLoader)
}