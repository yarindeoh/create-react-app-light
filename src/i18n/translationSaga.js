import { put } from 'redux-saga/effects';
import { loadTranslations, setLocale } from 'react-redux-i18n';

import translationsObject from 'src/i18n/I18n';
import { LANG } from 'src/services/appConstants';

export function* initTranslationSaga() {
    yield put(loadTranslations(translationsObject));
    yield put(setLocale(LANG));
}
