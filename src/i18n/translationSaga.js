import { put } from 'redux-saga/effects';
import languagesData from './languages.json';
import { LANG } from 'src/services/appConstants';

export function* initTranslationSaga() {
    // yield put({ type: 'loadTranslation', translations: translationsObject });
    yield put({ type: 'loadTranslation', translations: languagesData });
    yield put({ type: 'setLocal', locale: LANG });
}
