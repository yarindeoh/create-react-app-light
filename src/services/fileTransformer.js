/**
 * Processing custom files for jest
 * @type {module:path}
 */
const path = require('path');

module.exports = {
    process(src, filename) {
        return (
            'module.exports = ' + JSON.stringify(path.basename(filename)) + ';'
        );
    }
};
