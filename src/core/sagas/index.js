import { all } from 'redux-saga/effects'

import watcherGetCatalog from './getCatalogSaga'

export default function* rootSaga() {
    yield all([
        watcherGetCatalog(),
    ])
}