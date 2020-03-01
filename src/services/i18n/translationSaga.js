import { put } from 'redux-saga/effects';
import languagesData from 'services/i18n/languages.json';
import { LANG } from 'src/appConstants';

export function* initTranslationSaga() {
    yield put({
        type: '@@i18n/LOAD_TRANSLATIONS',
        translations: languagesData
    });
    yield put({ type: '@@i18n/SET_LOCALE', locale: LANG });
}
