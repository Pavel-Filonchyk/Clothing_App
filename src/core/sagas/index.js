import { all } from 'redux-saga/effects'

import watcherGetCatalog from './getCatalogSaga'
import watcherLogin from './loginSaga'

export default function* rootSaga() {
    yield all([
        watcherGetCatalog(),
        watcherLogin()
    ])
}