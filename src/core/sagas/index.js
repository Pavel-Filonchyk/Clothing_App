import { all } from 'redux-saga/effects'

import watcherGetCatalog from './getCatalogSaga'
import watcherLogin from './accountSagas/loginSaga'
import watcherDeleteAccount from './accountSagas/deleteAccountSaga'
import watcherChangeCurrency from './accountSagas/changeCurrencySaga'
import watcherGetAccount from './accountSagas/getAccountSaga'
import watcherChangeAccount from './accountSagas/changeAccountSaga'

export default function* rootSaga() {
    yield all([
        watcherGetCatalog(),
        watcherLogin(),
        watcherDeleteAccount(),
        watcherChangeCurrency(),
        watcherGetAccount(),
        watcherChangeAccount()
    ])
}