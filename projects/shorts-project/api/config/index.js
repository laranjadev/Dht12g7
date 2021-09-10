const {
    jsonFileReader
} = require('../utils');
module.exports = {
    ...jsonFileReader([ 'config', 'index.json' ])['development'],
};