const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const fs = require('fs');
const urlJoin = require('url-join');

const isTheLast = (string, letter) => {
    return string.substr(string['length'] - 1, string['length']) === letter;
};

const getFirstUpperCase = capitalize = (content) => {
    let result = '';
    result += String(content).charAt(0).toUpperCase();
    result += String(content).slice(1);
    return result;
};

const getLowerCase = (content) => {
    return String(content).trim().toLowerCase();
};

const getPlural = plural = (content) => {
    if (isTheLast(content, 'y')) content = content.substr(0, content['length'] - 1) + 'ies';
    else if (isTheLast(content, 's')) content += 'es';
    else content += 's';
    return content.trim().toLowerCase();
};

const isThere = (array) => {
    return fs.existsSync(urlJoin(array));
};

const jsonFileReader = (array) => {
    return isThere(array) ? JSON.parse(fs.readFileSync(urlJoin(array), { encoding : 'utf-8' })) : [];
};

const variableName = (object) => {
    let array = [];
    for (let i = 0; i < object['content'].split('-')['length']; i++)
        array.push(object['content'].split('-')[i]);
    let result = '';
    result += getValidation(object['prefix']) ? object['prefix'] : '';
    for (let i = 0; i < array['length']; i++)
        result += !i ? getValidation(object['prefix']) ? getFirstUpperCase(array[i]) : getLowerCase(array[i]) : getFirstUpperCase(array[i]);
    return result;
};

const getJSONFile = (object) => {
    return {
        [variableName({ prefix : 'is', content : object['content'], })] : jsonFileReader([ 'database', object['content'] + '.json' ]),
    };
};

module.exports = {
    capitalize,
    getFirstUpperCase,
    getJSONFile,
    getPlural,
    plural,
    jsonFileReader,
};