const fs = require('fs');
const urlJoin = require('url-join');


const isThere = (array) => {
    return fs.existsSync(urlJoin(array));
};


const getFirstUpperCase = (content) => {
    let result = '';
    result += String(content).charAt(0).toUpperCase();
    result += String(content).slice(1);
    return result;
};

const jsonFileReader = (array) => {
    return isThere(array) ? JSON.parse(fs.readFileSync(urlJoin(array), { encoding : 'utf-8' })) : [];
};

const getLowerCase = (content) => {
    return String(content).trim().toLowerCase();
};

const getRomanNumber = (content) => {
    let r = '';
    let division = 0;
    let rest = content;
    let arabic = [1000, 500, 100, 50, 10];
    let romans = ['M', 'D', 'C', 'L', 'X'];
    let dozen = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    for (let i = 0; i < arabic['length']; i++) {
        division = parseInt(rest / arabic[i]);
        rest = content % arabic[i];
        if (division > 0) {
            for (let x = 0; x < division; x++) {
                r = r + romans[i];
            };
        };
        if (rest < 10) {
            r = r + dozen[rest - 1];
            break;
        };
    };
    return r;
};

const isEmpty = (object) => {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    if (object == null) return true;
    if (object['length'] > 0) return false;
    if (object['length'] === 0) return true;
    for (var key in object) if (hasOwnProperty.call(object, key)) return false;
    return true;
};

const getValidation = (content) => {
    if (!content) return false;
    else if (isThis(content, 'undefined')) return false;
    else return true;
};

const isThis = (object) => {
    if (getValidation(object['content']) && getValidation(object['type']))
        return typeof object['content'] === object['type'];
    else
        return false;
};

const getHTMLTag = (object) => {
    let result = '';
    if (getValidation(object['element']) && getValidation(object['content'])) {
        if (isThis({ content : object['element'], type : 'string' })) {
            result += '<' + getLowerCase(object['element']) + '>';
            result += object['content'];
            result += '</' + getLowerCase(object['element']) + '>';
        } else if (isThis({ content : object['element'], type : 'object' })) {
            for (let i = 0; i < object['element']['length']; i++)
                result += '<' + getLowerCase(object['element'][i]) + '>';
            result += object['content'];
            for (let i = object['element']['length']; i > 0; i--) 
                result += '</' + getLowerCase(object['element'][i]) + '>';
        };
    };
    return result;
};

const getElement = (object) => {
    let result = '';
    if (getValidation(object['element']) && getValidation(object['position']))
        if (object['position'] === 'header') {
            result += '<';
            result += getLowerCase(object['element']);
            result += getValidation(object['id']) ? ' id=\"' + object['id'] + '\"' : '';
            result += '>';
        } else if (object['position'] === 'footer') {
            result += '</' + getLowerCase(object['element']) + '>';
        } else {
            result += '';
        }
    else
        result += '';
    return result;
};

const getFormatPhoneNumber = (number) => {
    let result = '';
    result += '+55 ';
    result += '(';
    result += number.substr(0, 2);
    result += ') ';
    result += number.substr(2, 1);
    result += ' ';
    result += number.substr(3, 4);
    result += '-';
    result += number.substr(7, 4);
    return result;
};

const getFormat = (object) => {
    let result = '';
    if (object['type'] === 'whatsapp') {
        let content = '';
        content += '<a href=\"http://wa.me/';
        content += object['content'];
        content += '?text=';
        let message = 'Eu%20tenho%20interesse%20no%20seu%20carro%20à%20venda';
        content += message;
        content += '\" target=\"_blank\" rel=\"noopener noreferrer\">';
        content += getFormatPhoneNumber(object['content']);
        content += '</a>';
        result += getHTMLTag({
            element : object['element'],
            content : content,
        });
    } else if (object['type'] === 'phone') {
        let content = '';
        content += '<a href=\"tel:+55';
        content += object['content'];
        content += '\">';
        content += getFormatPhoneNumber(object['content']);
        content += '</a>';
        result += getHTMLTag({
            element : object['element'],
            content : content,
        });
    } else if (object['type'] === 'email') {
        let content = '';
        content += '<a href=\"mailto:' + getLowerCase(object['content']) + '\">';
        content += getLowerCase(object['content']);
        content += '</a>';
        result += getHTMLTag({
            element : object['element'],
            content : content,
        });
    } else if (object['type'] === 'text') {
            let tags = '';
            if (isThis({ content : object['element'], type : 'string' })) {
                tags += '</' + getLowerCase(object['element']) + '>';
                tags += '<' + getLowerCase(object['element']) + '>';
            } else if (isThis({ content : object['element'], type : 'object' })) {
                for (let i = object['element']['length']; i > 0; i--)
                    tags += '</' + getLowerCase(object['element'][i]) + '>';
                for (let i = 0; i < object['element']['length']; i++)
                    tags += '<' + getLowerCase(object['element'][i]) + '>';
            } else {
                tags += '';
            };
            let content = '';
            if (getValidation(object['content'])) {
                for (let i = 0; i < object['content'].split(object['letter'])['length']; i++) {
                    content += object['content'].split(object['letter'])[i];
                    content += i < object['content'].split(object['letter'])['length'] - 1 ? object['letter'] + tags : '';
                };
            } else {
                content += '';
            };
            result += getHTMLTag({
                element : object['element'],
                content : content,
            });
    }
    return result;
};




// const getScriptModule = (content) => {
//     const contentFilePath = [
//         'public',
//         'javascripts',
//     ];
//     return {
//         scriptModule : isThere([ ...contentFilePath, content + '.js' ])
//         ? '<script type=\"module\" src=\"/javascripts/' + content + '.js\"></script>' : '',
//     };
// };



let variables = () => {
    return {
        isNavbar : jsonFileReader([ 'database', 'json', 'navbar.json' ]),
        // isFooterMenu : jsonFileReader([ 'database', 'json', 'footer-menu.json' ]),
        // isAccordion : isAccordion,
    };
};

let bootstrap = () => {
    return {
        // bootstrapAccordion,
        // bootstrapModal,
        // bootstrapNavbar,
    };
};


const getPackage = () => {
    return {
        getFirstUpperCase,
        getLowerCase,
        getRomanNumber,
        isEmpty,
        getValidation,
        isThis,
        getHTMLTag,
        getElement,
        getFormat,
        ...variables(),
        ...bootstrap(),
    };
};

module.exports = {
    getPackage,
    ...getPackage(),
};