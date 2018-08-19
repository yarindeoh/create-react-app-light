import languagesData from './languages.json';
import merge from 'lodash/merge.js';
import setPath from 'lodash/set.js';

let languagesObj = {};
let language = null;
let key = null;
for (language in languagesData) {
    let langData = {};
    for (key in languagesData[language]) {
        setPath(langData, key, languagesData[language][key]);
    }
    languagesObj[language] = langData;
}
console.log(JSON.stringify(languagesObj));
export default merge({}, languagesObj);
