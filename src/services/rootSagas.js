import { fork } from 'redux-saga/effects';

import { initTranslationSaga } from 'services/i18n/translationSaga';

export default function* rootSaga() {
    yield fork(initTranslationSaga);
}
