const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const fs = require('fs');
const urlJoin = require('url-join');

const getValidation = (content) => {
    if (!content)
        return false;
    else if (isThis(content, 'undefined'))
        return false;
    else
        return true;
};

const isEmpty = (object) => {
    if (object == null) return true;
    if (object['length'] > 0) return false;
    if (object['length'] === 0) return true;
    for (let key in object)
        if (Object.prototype.hasOwnProperty.call(object, key))
            return false;
    return true;
};

const footerQuickMenu = (object) => {
    let result = '';
    result += '<div id=\"row\">';
        result += '<div id=\"col\">';
            result += '<div id=\"quick-menu\">';
                for (let i = 0; i < object['array']['length']; i++) {
                    let isHREF = '';
                    isHREF += '/' + object['pathPrefix'];
                    isHREF += '/' + (isThis(object['array'][i]['title'], 'object') ? object['array'][i]['title'][0] : object['array'][i]['title']);
                    isHREF += '/' + object['index'];
                    isHREF = getValidation(object['array'][i]['path']) ? isHREF : '#';
                    isHREF = isHREF.toLowerCase();
                    let isTitle = isThis(object['array'][i]['title'], 'string') ? object['array'][x]['title'] : object['array'][i]['title'][1];
                    let isTarget = getValidation(object['array'][i]['target']) ? ' data-bs-toggle=\"modal\"' : '';
                    let isToggle = getValidation(object['array'][i]['toggle']) ? ' data-bs-target=\"#modal-' + object['index'] + '\"' : '';
                    result += '<a href=\"' + isHREF + '\"' + isTarget + isToggle + '>';
                        result += getFirstUpperCase(isTitle);
                    result += '</a>';
                };
            result += '</div>';
        result += '</div>';
    result += '</div>';
    return result;
};

const viewListGroup = (object) => {
    let result = '';
    let = isQuickMenu = viewQuickMenu({ id : 'id-', object : object });
    for (let x = 0; x < object['array']['length']; x++) {
        result += isQuickMenu;
        result += '<div id=\"' + (x % 2 === 0 ? 'light-item' : 'dark-item') + '\">';
            if (getValidation(object['array'][x]['title']) || getValidation(object['array'][x]['description'])) {
                result += '<div id=\"header-row\">';
                    result += '<div id=\"header-col\">';
                        result += getValidation(object['array'][x]['title']) ? getLineBreak({ id : 'id-' + x, content : object['array'][x]['title'], element : [ 'h1' ], letter : '' }) : '';
                        result += getValidation(object['array'][x]['description']) ? getLineBreak({ content : object['array'][x]['description'], element : [ 'p', 'em' ], letter : '' }) : '';
                    result += '</div>';
                result += '</div>';
            }
            if (getValidation(object['array'][x]['items'])) {
                result += '<div id=\"body-row\">';
                    for (let y = 0; y < object['array'][x]['items']['length']; y++) {
                        result += '<div id=\"body-col\">';
                            result += '<div id=\"body-list-group\">';
                                result += '<a href=\"#\">';
                                    if (getValidation(object['array'][x]['items'][y]['title'])) {
                                        result += '<div id=\"body-content\">';
                                            result += getValidation(object['array'][x]['items'][y]['title'])
                                            ? getLineBreak({ content : object['array'][x]['items'][y]['title'], element : [ 'h5' ], letter : '' }) : '';
                                            result += getLineBreak({ content : getTypeNumber({ index : y }), element : [ 'small', 'b' ], letter : '' });
                                        result += '</div>';
                                    };
                                    if (getValidation(object['array'][x]['items'][y]['items'])) {
                                        result += '<ul>';
                                            for (let z = 0; z < object['array'][x]['items'][y]['items']['length']; z++) {
                                                result += '<li>';
                                                    let n = '';
                                                    n += getTypeNumber({ index : y });
                                                    n += getTypeNumber({ index : z });
                                                    result += getValidation(object['array'][x]['items'][y]['items'][z]['title']) ? getLineBreak({ index : n, content : object['array'][x]['items'][y]['items'][z]['title'], element : [ 'p', 'b' ], letter : '' }) : '';
                                                    result += getValidation(object['array'][x]['items'][y]['items'][z]['description']) ? getLineBreak({ content : object['array'][x]['items'][y]['items'][z]['description'], element : [ 'p', 'em' ], letter : '' }) : '';
                                                result += '</li>';
                                            }
                                        result += '</ul>';
                                    };
                                    // result += '<small>Donec id elit non mi porta.</small>';
                                result += '</a>';
                            result += '</div>';
                        result += '</div>';
                    }
                result += '</div>';
            };
        result += '</div>';
    }
    result += isQuickMenu;
    return result;
};

const viewQuickMenu = (object) => {
    let result = '';
    result += '<div id=\"view-quick-menu-row\">';
        result += '<div id=\"view-quick-menu-col\">';
            result += '<div id=\"view-quick-menu\">';
                for (let i = 0; i < object['object']['array']['length']; i++) {
                    result += getValidation(object['id']) ? '<a href=\"#' + object['id'] + i + '\">' : '';
                        result += getFirstUpperCase(object['object']['array'][i]['title']);
                    result += getValidation(object['id']) ? '</a>' : '';
                };
            result += '</div>';
        result += '</div>';
    result += '</div>';
    return result;
};

const bootstrapGallery = (object) => {
    let result = '';
    let = isQuickMenu = viewQuickMenu({ id : 'id-', object : object });
    for (let x = 0; x < object['array']['length']; x++) {
        result += isQuickMenu;
        result += '<div id=\"' + (x % 2 === 0 ? 'light-item' : 'dark-item') + '\">';
            if (getValidation(object['header']['title']) || getValidation(object['header']['description'])) {
                if (getValidation(object['array'][x]['title']) || getValidation(object['array'][x]['description'])) {
                    result += '<div id=\"gallery-header\">';
                        result += getValidation(object['array'][x]['title']) ? getLineBreak({ id : 'id-' + x, content : object['array'][x]['title'], element : [ 'h1' ], letter : '' }) : '';
                        result += getValidation(object['array'][x]['description']) ? getLineBreak({ content : object['array'][x]['description'], element : [ 'p', 'em' ], letter : '' }) : '';
                    result += '</div>';
                };
            };
            if (getValidation(object['array'][x]['items'])) {
                result += '<div id=\"gallery-portfolio\">';
                    for (let y = 0; y < object['array'][x]['items']['length']; y++) {
                        if (getValidation(object['array'][x]['items'][y]['image'])) {
                            result += '<div id=\"thumbnail\">';
                                if (getValidation(object['thumbnail']['image']) && getValidation(object['array'][x]['items'][y]['image'])) {
                                    result += '<div id=\"image\">';
                                        let isTitle = getValidation(object['array'][x]['items'][y]['title']) ? object['array'][x]['items'][y]['title'] : '';
                                        result += '<a href=\"' + object['array'][x]['items'][y]['image'] + '\"' + (isTitle ? ' title=\"' + isTitle + '\"' : '') + '>';
                                            result += '<img src=\"' + object['array'][x]['items'][y]['image'] + '\"' + (isTitle ? ' alt=\"' + isTitle + '\"' : '') + '/>';
                                            result += isTitle ? '<div id=\"caption\">' + isTitle + '</div>' : '';
                                        result += '</a>';
                                    result += '</div>';
                                };
                                if (getValidation(object['thumbnail']['title']) && getValidation(object['array'][x]['items'][y]['title'])) {
                                    result += '<div id=\"title\">';
                                        result += getLineBreak({ content : object['array'][x]['items'][y]['title'], element : [ 'p', 'b' ], letter : '' });
                                    result += '</div>';
                                };
                                if (getValidation(object['thumbnail']['description']) && getValidation(object['array'][x]['items'][y]['description'])) {
                                    result += '<div id=\"description\">';
                                        result += getLineBreak({ content : object['array'][x]['items'][y]['description'], element : [ 'p', 'em' ], letter : '' });
                                    result += '</div>';
                                };
                            result += '</div>';
                        };
                    };
                result += '</div>';
            };
        result += '</div>';
    };
    result += isQuickMenu;
    return result;
};

const bootstrapCarousel = (object) => {
    let result = '', isID = getValidation(object['id']) ? object['id'] : 'carousel';
    result += '<div id=\"' + isID + '\" class=\"carousel slide\" data-bs-ride=\"carousel\">';
        result += '<div class=\"carousel-indicators\">';
            for (let i = 0; i < object['array']['length']; i++) {
                result += '<button';
                result += ' type=\"button\"';
                result += ' data-bs-target=\"#' + isID + '\"';
                result += ' data-bs-slide-to=\"' + i + '\"';
                result += !i ? ' class=\"active\"' : '';
                result += !i ? ' aria-current=\"true\"' : '';
                result += ' aria-label=\"Slide ' + (i + 1) + '\"';
                result += '>';
                result += '</button>';
            }
        result += '</div>';
        result += '<div class=\"carousel-inner\">';
            for (let i = 0; i < object['array']['length']; i++) {
                result += '<div class=\"carousel-item ' + (!i ? 'active' : '') + '\">';
                    result += '<img';
                    result += ' src=\"' + object['array'][i]['image'] + '\"';
                    result += ' class=\"d-block w-100\"';
                    result += ' alt=\"' + object['array'][i]['title'] + '\"';
                    result += '>';
                    result += '<div class=\"carousel-caption d-none d-md-block\">';
                        result += getValidation(object['array'][i]['title']) ? getLineBreak({ content : object['array'][i]['title'], element : [ 'h3', 'em' ], letter : '' }) : '';
                        result += getValidation(object['array'][i]['description']) ? getLineBreak({ content : object['array'][i]['description'], element : [ 'p', 'em' ], letter : '' }) : '';
                    result += '</div>';
                result += '</div>';
            }
        result += '</div>';
        let array = [ 'prev', 'next' ];
        for (let i = 0; i < array['length']; i++) {
            result += '<button class=\"carousel-control-' + array[i] + '\" type=\"button\" data-bs-target=\"#' + isID + '\" data-bs-slide=\"' + array[i] + '\">';
                result += '<span class=\"carousel-control-' + array[i] + '-icon\" aria-hidden=\"true\"></span>';
                result += '<span class=\"visually-hidden\">' + array[i] + '</span>';
            result += '</button>';
        }
    result += '</div>';
    return result;
};

const bootstrapNavbar = (object) => {
    let result = '';
    result += getTagName({ element : object['element'], id : object['id'], position : 'header' });
        result += '<button';
        result += ' aria-controls=\"navbarSupportedContent\"';
        result += ' aria-expanded=\"false\"';
        result += ' aria-label=\"Toggle navigation\"';
        result += ' class=\"navbar-toggler\"';
        result += ' data-bs-target=\"#navbarSupportedContent\"';
        result += ' data-bs-toggle=\"collapse\"';
        result += ' type=\"button\"';
        result += '>';
            result += '<span class=\"navbar-toggler-icon\">';
            result += '</span>';
        result += '</button>';
        result += '<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">';
            result += '<ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">';
                result += getValidation(object['title']) ? '<li class=\"nav-item\">' + '<a class=\"nav-link\">' + getFirstUpperCase(object['title']) + '</a>' + '</li>' : '';
                for (let x = 0; x < object['array']['length']; x++) {
                    result += '<li class=\"nav-item ' + (getValidation(object['array'][x]['items']) ? ' dropdown' : '') + '\">';
                        let id = getLowerCase('dropDown' + getRomanNumber(x + 1));
                        result += '<a';
                        result += getValidation(object['array'][x]['items']) ? ' aria-expanded=\"false\"' : '';
                        result += getValidation(object['array'][x]['items']) ? ' class=\"nav-link dropdown-toggle\"' : ' class=\"nav-link\"';
                        result += getValidation(object['array'][x]['items']) ? ' data-bs-toggle=\"dropdown\"' : '';
                        result += ' href=\"' + getLowerCase(object['array'][x]['path']) + '\"';
                        result += getValidation(object['array'][x]['items']) ? ' id=\"' + id + '\"' : '';
                        result += getValidation(object['array'][x]['items']) ? ' role=\"button\"' : '';
                        result += '>';
                        result += getFirstUpperCase(object['array'][x]['title']);
                        result += '</a>';
                        if (getValidation(object['array'][x]['items'])) {
                            result += '<ul class=\"dropdown-menu p-3\" aria-labelledby=\"' + id + '\">';
                                for (let y = 0; y < object['array'][x]['items']['length']; y++) {
                                    result += '<li>';
                                        result += getValidation(object['array'][x]['items'][y]['title']) ? '<h6>' + getFirstUpperCase(object['array'][x]['items'][y]['title']) + ':' + '</h6>' : '';
                                        result += '<ul>';
                                            for (let z = 0; z < object['array'][x]['items'][y]['items']['length']; z++) {
                                                result += '<li>';
                                                    let href = getValidation(object['array'][x]['items'][y]['items'][z]['path']) ? object['array'][x]['items'][y]['items'][z]['path'] : '#';
                                                    result += '<a';
                                                    result += ' class=\"dropdown-item\"';
                                                    result += ' href=\"' + href + '\"';
                                                    result += '>';
                                                        result += getFirstUpperCase(object['array'][x]['items'][y]['items'][z]['title']);
                                                    result += '</a>';
                                                result += '</li>';
                                            };
                                        result += '</ul>';
                                    result += '</li>';
                                };
                            result += '</ul>';
                        };
                    result += '</li>';
                };
            result += '</ul>';
        result += '</div>';
        if (isThis(object['key'], 'undefined') || isThis(object['searchAction'], 'undefined')) { } else {
            result += '<form action=\"' + object['searchAction'] + '\" id=\"search-form\" method=\"GET\">';
                result += '<input';
                    result += ' aria-label=\"Search\"';
                    result += ' class=\"form-control\"';
                    result += ' name=\"key\"';
                    result += ' placeholder=\"' + getFirstUpperCase('Search') + '\"';
                    result += ' type=\"search\"';
                    result += ' value=\"' + object['key'] + '\"';
                result += '>';
                result += '<button type=\"submit\">' + getFirstUpperCase('Search') + '</button>';
            result += '</form>';
        };
    result += getTagName({ element : object['element'], id : object['id'], position : 'footer' });
    return result;
};

const bootstrapModal = (object) => {
    let result = '';
    let currentAction = '';
    currentAction += '/' + object['prefix'];
    currentAction += '/' + 'delete';
    currentAction += '/' + object['array'][object['index']]['id'];
    currentAction += '?_method=DELETE';
    currentAction = currentAction.trim().toLowerCase();
    result += '<div class=\"modal fade\" id=\"modal-' + object['array'][object['index']]['id'] + '\">';
        result += '<div class=\"modal-dialog\">';
            result += '<div class=\"modal-content\">';
                if (getValidation(object['title'])) {
                    result += '<div class=\"modal-header\">';
                        result += getLineBreak({ content : object['title'], element : [ 'h5' ], letter : '' });
                    result += '</div>';
                }
                if (getValidation(object['description'])) {
                    result += '<div class=\"modal-body\">';
                        result += getLineBreak({ content : object['description'], element : [ 'p', 'em' ], letter : '' });
                    result += '</div>';
                }
                result += '<div class=\"modal-footer\">';
                    result += '<form action=\"' + currentAction + '\" method=\"POST\">';
                        result += '<button type=\"submit\">';
                            result += getFirstUpperCase('yes!');
                        result += '</button>';
                    result += '</form>';
                    result += '<button type=\"button\" data-bs-dismiss=\"modal\">';
                        result += getFirstUpperCase('no.');
                    result += '</button>';
                result += '</div>';
            result += '</div>';
        result += '</div>';
    result += '</div>';   
    return result;
};

const getTypeNumber = (object) => {
    let result = getValidation(object['typeNumber']) ? object['typeNumber'] === 'roman'
    ? getRomanNumber(object['index'] + 1) : object['index'] + 1 : object['index'] + 1;
    result += '. ';
    return result;
};

const getLineBreak = (object) => {
    let is_start = '', is_end = '';
    let is_id = getValidation(object['id']) ? ' id=\"' + object['id'] + '\"' : '';
    if (isThis(object['element'], 'string')) {
        is_start = '<' + object['element'] + is_id + '>';
        is_end = '</' + object['element'] + '>';
    };
    if (isThis(object['element'], 'object')) {
        for (let i = 0; i <= object['element']['length'] - 1; i++)
            is_start += '<' + object['element'][i] + is_id + '>';
        for (let i = object['element']['length'] + 1; i >= 0; i--)
            is_end += '</' + object['element'][i] + '>';
    };
    let is_content = '';
    is_content += getValidation(object['index']) ? object['index'] : '';
    is_content += getValidation(object['element']) && getValidation(object['letter'])
    ? object['content'].split(object['letter'] + ' ').join(object['letter'] + is_end + is_start)
    : object['content'];
    let result = '';
    result += is_start;
    result += is_content;
    result += is_end;
    return result;
};

let objectCleaner = (content) => {
    let array = [];
    for (let x = 0; x < content['length']; x++) {
        let index = {};
        for (let y = 0; y < Object.getOwnPropertyNames(content[x])['length']; y++) {
            let isName = Object.getOwnPropertyNames(content[x])[y];
            let isDescriptor = Object.getOwnPropertyDescriptors(content[x]);
            isDescriptor[isName]['value']
            ? index[isName] = isDescriptor[isName]['value']
            : undefined;
        };
        if (isEmpty(index)) { } else {
            array.push(index);
        };
    };
    return array;
};

let bootstrapAccordion = (object) => {
    let result = '';
    let isTypeNumber = !isThis(object['typeNumber'], 'undefined') ? object['typeNumber'] : false;
    result += '<div class=\"accordion\" id=\"' + object['id'] + '\">';
        for (let x = 0; x < object['array']['length']; x++) {
        let isID = !isThis(object['id'], 'undefined') ? '-' + object['id'] + '-' + x : '-' + x;
        result += '<div class=\"accordion-item\">';
            result += '<h2 class=\"accordion-header\" id=\"heading' + isID + '\">';
            result += '<button'
                result += ' aria-controls=\"collapse' + isID + '\"';
                result += ' aria-expanded=\"' + (!x ? 'true' : 'false') + '\"';
                result += ' class=\"accordion-button' + (!x ? '' : ' collapsed') + '\"';
                result += ' data-bs-target=\"#collapse' + isID + '\"';
                result += ' data-bs-toggle=\"collapse\"'
                result += ' type=\"button\"';
            result += '>';
                result += getTypeNumber({ index : x, typeNumber : isTypeNumber });
                result += object['array'][x]['title'];
            result += '</button>';
            result += '</h2>';
            result += '<div'
            result += ' aria-labelledby=\"heading' + isID + '\"';
            result += ' class=\"accordion-collapse collapse' + (!x ? ' show' : '') + '\"';
            result += ' data-bs-parent=\"#' + object['id'] + '\"';
            result += ' id=\"collapse' + isID + '\"';
            result += '>';
                result += getValidation(object['array'][x]['description']) || getValidation(object['array'][x]['items']) ? '<div class=\"accordion-body\">' : '';
                    result += getValidation(object['array'][x]['description']) ? getLineBreak({ content : object['array'][x]['description'], element : 'p', letter : '' }) : '';
                    if (getValidation(object['array'][x]['items'])) {
                        result += '<ul>';
                            for (let y = 0; y < object['array'][x]['items']['length']; y++) {
                                result += '<li>';
                                    let n = '';
                                    n += getTypeNumber({ index : x, typeNumber : isTypeNumber });
                                    n += getTypeNumber({ index : y, typeNumber : isTypeNumber });
                                    result += getValidation(object['array'][x]['items'][y]['title'])
                                    ? getLineBreak({
                                        index : n,
                                        content : object['array'][x]['items'][y]['title'],
                                        element : [ 'p' ],
                                        letter : ''
                                    }) : '';
                                    result += getValidation(object['array'][x]['items'][y]['description']) ? lineBreak({ content : object['array'][x]['items'][y]['description'], element : 'p', letter : '.' }) : '';
                                    if (getValidation(object['array'][x]['items'][y]['items'])) {
                                        result += '<ul>';
                                            for (let z = 0; z < object['array'][x]['items'][y]['items']['length']; z++) {
                                                result += '<li>';
                                                    let n = '';
                                                    n += getTypeNumber({ index : x, typeNumber : isTypeNumber });
                                                    n += getTypeNumber({ index : y, typeNumber : isTypeNumber });
                                                    n += getTypeNumber({ index : z, typeNumber : isTypeNumber });
                                                    result += getValidation(object['array'][x]['items'][y]['items'][z])
                                                    ? getLineBreak({
                                                        index : n,
                                                        content : object['array'][x]['items'][y]['items'][z],
                                                        element : [ 'p' ],
                                                        letter : ''
                                                    }) : '';
                                                result += '</li>';
                                            };
                                        result += '</ul>';
                                    };
                                result += '</li>';
                            };
                        result += '</ul>';
                    };
                result += getValidation(object['array'][x]['description']) || getValidation(object['array'][x]['items']) ? '</div>' : '';
            result += '</div>';
        result += '</div>';
        }
    result += '</div>';
    return result;
};

const getLowerCase = (content) => {
    return String(content).trim().toLowerCase();
};

const getTagName = (object) => {
    let isElement = getValidation(object['element']) ? getLowerCase(object['element']) : '';
    let isPosition = getValidation(object['position']) ? getLowerCase(object['position']) : '';
    let isID = getValidation(object['id']) ? ' id=\"' + getLowerCase(object['id']) + '\"' : '';
    let result = '';
    if (isElement && isPosition) {
        if (isPosition === 'header') { result += '<' + isElement + isID + '>';
        } else if (isPosition === 'footer') { result += '</' + isElement + '>';
        } else { result += ''; }
    } else { result += ''; }
    return result;
};

const jsonFileReader = (array) => {
    return isThere(array) ? JSON.parse(fs.readFileSync(urlJoin(array), { encoding : 'utf-8' })) : [];
};

const getPathPrefix = (content) => {
    return {
        pathPrefix : getValidation(content) ? String(content).trim().split('-').join('/').toLowerCase() : '',
        isPathPrefix : getValidation(content) ? String(content).trim().split('-').join('/').toLowerCase() : '',
    }
};

const getPageTitle = (object) => {
    let result = '';
    result += getValidation(object['prefix']) ? object['prefix'] : '';
    result += getValidation(object['suffix']) ? ' ' + object['suffix'] : '';
    return {
        isPageTitle : result.trim().split('-').join(' ').toLowerCase(),
    };
};

const getRandomNumber = (object) => {
    return Math.floor(Math.random() * (Math.floor(object['maximum']) - Math.ceil(object['minimum']))) + Math.ceil(object['minimum']);
};

const isTheLast = (string, letter) => {
    return string.substr(string['length'] - 1, string['length']) === letter;
};

const getCurrency = (content) => {
    return (content).toLocaleString('pt-br', {
        style : 'currency',
        currency : 'USD',
    });
};

const isThis = (string, type) => {
    return typeof string === type;
};

const getDOCNumber = (array) => {
    let num = '', result = '';
    for (let x = 0; x < array['length']; x++) {    
        for (let y = 0; y < array[x]; y++) num += '9';
        result += ('' + Math.floor(Math.random() * Number(num))).padStart(Number(num['length']), '0');
        result += x == array['length'] - 2 ? '-' : '';
        result += x <= array['length'] - 3 ? '.' : '';
        num = '';
    }
    return result;
};

const getRequest = (array) => {
    return require(urlJoin([ '..', ...array ]));
};

const getPublicList = () => {
    const getRecordList = (content) => {
        const result = [];
        const contentFilePath = [ 'database', 'option.js' ];
        for (let i = 0; i < getRequest(contentFilePath)[content]['length']; i++) {
            result.push({
                first : getRequest(contentFilePath)[content][i],
                last : getRequest(contentFilePath)['last'][Math.floor(Math.random() * getRequest(contentFilePath)['last']['length'])],
                gender : content,
            });
        };
        return result;
    };
    return [        
        ...getRecordList('female'),
        ...getRecordList('male'),
    ];
};

const getForeignKey = (table) => {
    return {
        ...table !== 'category' ? {
            fk_category : getRandomNumber({
                minimum : 1,
                maximum : 9,
            }),
        } : {
        },
        fk_public : getRandomNumber({
            minimum : 1,
            maximum : getPublicList()['length'],
        }),
    };
};

const getUserSession = (content) => {
    return {
        isUserSession : !isEmpty(content) ? content : undefined,
    };
};

const isThere = (array) => {
    return fs.existsSync(urlJoin(array));
};

const addJsDatabase = (object) => {
    const contentFilePath = [ ...object['require'], object['title'] + '.js' ];
    const contentFile = isThere(contentFilePath) ? getRequest(contentFilePath) : [];
    object['attachment'] ? contentFile.push(object['attachment']) : undefined;
    fs.writeFileSync(urlJoin(contentFilePath), 'const ' + object['title'] + ' = ');
    fs.appendFileSync(urlJoin(contentFilePath), JSON.stringify(contentFile));
    fs.appendFileSync(urlJoin(contentFilePath), ';');
    fs.appendFileSync(urlJoin(contentFilePath), 'module.exports = ' + object['title'] + ';');
};

const addJsonDatabase = (object) => {
    const contentFilePath = [ ...object['require'], object['title'] + '.json' ];
    const contentFile = isThere(contentFilePath) ? JSON.parse(fs.readFileSync(urlJoin(contentFilePath), { encoding : 'utf-8' })) : [];
    object['attachment'] ? contentFile.push(object['attachment']) : undefined;
    fs.writeFileSync(urlJoin(contentFilePath), JSON.stringify(contentFile));
};

const saveJsDatabase = (object) => {
    const contentFilePath = [ ...object['require'], object['title'] + '.js' ];
    fs.writeFileSync(urlJoin(contentFilePath), 'const ' + object['title'] + ' = ');
    fs.appendFileSync(urlJoin(contentFilePath), JSON.stringify(object['content']));
    fs.appendFileSync(urlJoin(contentFilePath), ';');
    fs.appendFileSync(urlJoin(contentFilePath), 'module.exports = ' + object['title'] + ';');
};

const getLoremIpsum = (object) => {
    const contentFilePath = [ 'database', 'option.js' ];
    return {
        title : isThere(contentFilePath) ? getRequest(contentFilePath)['lorem']['title'] : '',
        description : isThere(contentFilePath) ? getRequest(contentFilePath)['lorem']['description'] : '',
    };
};

const getRandomIndex = (object) => {
    const result = [];
    const contentFilePath = [ 'database', 'option.js' ];
    for (let i = 0; i < getRequest(contentFilePath)[object['array']]['length']; i++)
        result.push(getRequest(contentFilePath)[object['array']][i]['option']);
    return result[Math.floor(Math.random() * result['length'])];
};

const getRomanNumber = (content) => {
    let result = '';
    let division = 0;
    let rest = content;
    let arabic = [ 1000, 500, 100, 50, 10 ];
    let romans = [ 'm', 'd', 'c', 'l', 'x' ];
    let dozen = [ 'i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix' ];
    for (let i = 0; i < arabic['length']; i++) {
        division = parseInt(rest / arabic[i]);
        rest = content % arabic[i];
        if (division > 0) {
            for (let x = 0; x < division; x++) {
                result = result + romans[i];
            };
        };
        if (rest < 10) {
            result = result + dozen[rest - 1];
            break;
        };
    };
    return result;
};

const getCNPJNumber = (array) => {
    let num = '', result = '';
    for (let x = 0; x < array['length']; x++) {    
        for (let y = 0; y < array[x]; y++) num += '9';
        result += x == 3 ? '0001' : ('' + Math.floor(Math.random() * Number(num))).padStart(Number(num['length']), '0');
        result += x == array['length'] - 2 ? '-' : '';
        result += x == array['length'] - 3 ? '/' : '';
        result += x <= array['length'] - 4 ? '.' : '';
        num = '';
    }
    return result;
};

const getCPFNumber = () => {
    let getDOCDigit = (num1, num2, num3, num4) => {
        let num = num1.split('').concat(num2.split(''), num3.split('')), x = 0;    
        if (num4 !== undefined) num[9] = num4;
        for (let i = (num4 ? 11 : 10), j = 0; i >= 2; i--, j++) x += parseInt(num[j]) * i;
        return (y = x % 11) < 2 ? 0 : 11 - (y = x % 11);
    };
    const num1 = getDOCNumber([3]), num2 = getDOCNumber([3]), num3 = getDOCNumber([3]), dig = getDOCDigit(num1, num2, num3);
    return `${ num1 }.${ num2 }.${ num3 }-${ dig }${ getDOCDigit(num1, num2, num3, dig) }`;
};

const getRandomDate = (object) => {
    object['start'] = new Date(object['start']).getTime();
    object['end'] = new Date(object['end']).getTime();
    return object['start'] > object['end'] ? new Date(getRandomNumber({
        minimum : object['end'],
        maximum : object['start'],
    })) : new Date(getRandomNumber({
        minimum : object['start'],
        maximum : object['end'],
    }));
};

const getPhoneNumber = (array) => {
    let num = '', result = '(';
    for (let x = 0; x < array['length']; x++) {    
        for (let y = 0; y < array[x]; y++) num += '9';
        result += x == 1 ? '9' : ('' + Math.floor(Math.random() * Number(num))).padStart(Number(num['length']), '0');
        result += x == array['length'] - 2 ? '-' : '';
        result += x == array['length'] - 3 ? ' ' : '';
        result += x <= array['length'] - 4 ? ') ' : '';
        num = '';
    }
    return result;
};

const getHash = (content) => {
    return bcrypt.hashSync(String(content), 10);
};

const isEqual = (object) => {
    return bcrypt.compareSync(object['front'], object['back']);
};

const getJsPagination = (object) => {
    const listPage = [];
    const offset = Number(object['offset']), limit = object['limit'], array = object['array'];
    const gap = limit * (offset - 1);
    for (let i = gap; i < (gap + limit <= array['length'] ? gap + limit : array['length']); i++)
        listPage.push(array[i]);
    return {
        fullPage : Math.round(array['length'] / limit),
        listPage : listPage,
        nextPage : offset < Math.round(array['length'] / limit) ? offset + 1 : Math.round(array['length'] / limit),
        prevPage : offset <= 1 ? 1 : offset - 1,
    };
};

const getModelPagination = (object) => {
    const fullPage = Math.round(object['count'] / object['amount']);
    return {
        fullPage : fullPage <= 1 ? undefined : fullPage,
        nextPage : Number(object['offset']) < fullPage ? Number(object['offset']) + 1 : fullPage,
        prevPage : Number(object['offset']) <= 1 ? 1 : Number(object['offset']) - 1,
    };
};

const getFormHeader = (object) => {
    return {
        isFormAttribute : {
            ...object['prefix'] && object['suffix'] ? {
                action : getURLPath({
                    prefix : object['prefix'],
                    suffix : object['suffix'],
                }),
            } : {
            },
            ...object['enctype'] ? {
                enctype : object['enctype'],
            } : {
            },
            ...object['method'] ? {
                method : object['method'],
            } : {
            },
        },
    };
};

const getModelParams = (object) => {
    return {
        ...object['model'] && object['alias'] ? {
            include : {
                model : object['model'],
                as : object['alias'],
                required : true,
            },
        } : {
        },
        ...object['limit'] ? {
            limit : object['limit'],
        } : {
        },
        ...object['offset'] ? {
            offset : object['offset'],
        } : {
        },
        ...object['column'] ? {
            order : [
                [object['column'], 'ASC'],
            ],
        } : {
        },
        ...object['column'] && object['param'] ? {
            where : {
                [object['column']] : object['param'],
            },
        } : {
        },
    };
};

const getModelSearchParams = (object) => {
    const result = [];
    if (!object['array'] || !object['key']) { } else {
        for (let i = 0; i < object['array']['length']; i++)
            result.push({
                [object['array'][i]] : {
                    [Op.like] : `%${ object['key'] }%`,
                },
            });
    }
    return {
        ...result ? {
            where : {
                [Op.or] : [
                    ...result,
                ],
            },
        } : { },
    };
};

const getInputType = () => {
    return {
        isInputType : getRequest([ 'database', 'option.js' ])['inputType'],
    };
};

const getSearchAction = (object) => {
    return {
        isSearchAction : getURLPath({
            prefix : object['prefix'],
            suffix : object['suffix'],
        }),
    };
};


const getFormElement = (object) => {
    return {
        isFormElement : getRequest([ 'database', 'element.js' ])[object['element']][object['type']],
    };
};

const getFirstUpperCase = (content) => {
    let result = '';
    result += String(content).charAt(0).toUpperCase();
    result += String(content).slice(1);
    return result;
};

const toClean = (result) => {
    let array = [
        ['&nbsp;', ' '],
        [' ', '-'],
        [',', ''],
        ['_', '_'],
        ['-', ''],
        ['!', ''],
        ['?', ''],
        ['.', ''],
        ['', ''],
        ['(', ''],
        ['(', ''],
        [')', ''],
        [')', ''],
        ['@', ''],
        ['*', ''],
        ['/', ''],
        ['&', ''],
        ['#', ''],
        ['%', ''],
        ['©', ''],
        ['®', ''],
        ['+', ''],
        ['=', ''],
        ['|', ''],
        ['$', ''],
        ['Á', 'a'],
        ['á', 'a'],
        ['À', 'a'],
        ['à', 'a'],
        ['Â', 'a'],
        ['â', 'a'],
        ['Å', 'a'],
        ['å', 'a'],
        ['Ä', 'a'],
        ['ä', 'a'],
        ['Ã', 'a'],
        ['ã', 'a'],
        ['Æ', 'ae'],
        ['æ', 'ae'],
        ['Ç', 'c'],
        ['ç', 'c'],
        ['Ð', 'd'],
        ['ð', 'd'],
        ['É', 'e'],
        ['é', 'e'],
        ['È', 'e'],
        ['è', 'e'],
        ['Ê', 'e'],
        ['ê', 'e'],
        ['Ë', 'e'],
        ['ë', 'e'],
        ['Í', 'i'],
        ['í', 'i'],
        ['Ì', 'i'],
        ['ì', 'i'],
        ['Î', 'i'],
        ['î', 'i'],
        ['Ï', 'i'],
        ['ï', 'i'],
        ['Ñ', 'n'],
        ['ñ', 'n'],
        ['Ó', 'o'],
        ['ó', 'o'],
        ['Ò', 'o'],
        ['ò', 'o'],
        ['ô', 'o'],
        ['Ô', 'o'],
        ['Ö', 'o'],
        ['ö', 'o'],
        ['Õ', 'o'],
        ['õ', 'o'],
        ['Ø', 'o'],
        ['ø', 'o'],
        ['ß', 'b'],
        ['Ú', 'u'],
        ['ú', 'u'],
        ['Ù', 'u'],
        ['ù', 'u'],
        ['Û', 'u'],
        ['û', 'u'],
        ['Ü', 'u'],
        ['ü', 'u'],
        ['Ý', 'y'],
        ['ý', 'y'],
        ['Þ', 'p'],
        ['þ', 'p'],
    ];
    for (let i = 0; i < array['length']; i++)
        result = result.split(array[i][0]).join(array[i][1]);
    return result.trim();
};

const getPlural = (content) => {
    if (isTheLast(content, 'y')) content = content.substr(0, content['length'] - 1) + 'ies';
    else if (isTheLast(content, 's')) content += 'es';
    else content += 's';
    return content.trim().toLowerCase();
};

const getBTNTitle = (content) => {
    return {
        isBTNTitle : String(content).trim(),
    };
};

const getURLPath = (object) => {
    let result = '';
    result += object['prefix'] ? '/' + object['prefix'].split('-').join('/') : '';
    result += object['suffix'] ? '/' + object['suffix'] : '';
    return result.trim().toLowerCase();
};

const objectCreator = (array) => {
    const result = [];
    result.push({
        id : 0,
        option : '',
    });
    for (let i = 0; i < array['length']; i++)
        result.push({
            id : i + 1,
            option : array[i],
        });
    return result;
};

const arrayCreator = (object) => {
    const result = [];
    const letter = jsonFileReader([
        ...object['path'],
        'letter.json',
    ]);
    for (let i = 0; i < letter['length']; i++) {
        if (isThere([ ...object['path'], object['name'], letter[i] + '.json' ]))
            result.push(...jsonFileReader([
                ...object['path'],
                object['name'],
                letter[i] + '.json'
            ]));
    }
    return result;
};

const getSalaryRange = (object) => {
    const result = [];
    result.push({
        id : 0,
        minimum : '',
        maximum : '',
        option : '',
    });
    for (let i = 1; i < object['end']; i++) {
        let minimum = object['gap'] * (i + 0);
        let maximum = object['gap'] * (i + 1) - 0.01;
        result.push({
            id : i,
            minimum : minimum,
            maximum : maximum,
            option : 'from ' + getCurrency(minimum) + ' to ' + getCurrency(maximum),
        });
    }
    return result;
};

let getDateFormat = (content) => {
    const day = new Date(content).getDate().toString().padStart(2, '0'),
    month = (new Date(content).getMonth() + 1).toString().padStart(2, '0'),
    year = new Date(content).getFullYear();
    return day + '/' + month + '/' + year;
};

const getJsDatabase = (object) => {
    const contentFilePath = [ ...object['require'], object['title'] + '.js' ];
    return isThere(contentFilePath) ? getRequest(contentFilePath) : [];
};

const getGJSMFile = (object) => {
    return {
        isGJSMFile
        : isThere([ 'public', 'javascripts', object['content'] + '.js' ])
        ? '<script type=\"module\" src=\"/javascripts/' + object['content'] + '.js\"></script>'
        : '',
    };
};

const getPJSMFile = (object) => {
    return {
        isPJSMFile
        : isThere([ 'public', 'javascripts', object['content'] + '.js' ])
        ? '<script type=\"module\" src=\"/javascripts/' + object['content'] + '.js\"></script>'
        : '',
    };
};

const getGCSSFile = (object) => {
    return {
        isGCSSFile
        : isThere([ 'public', 'stylesheets', object['content'] + '.css' ])
        ? '<link rel=\'stylesheet\' href=\'/stylesheets/' + object['content'] + '.css\'/>'
        : '',
    };
};
const getPCSSFile = (object) => {
    return {
        isPCSSFile
        : isThere([ 'public', 'stylesheets', object['content'] + '.css' ])
        ? '<link rel=\'stylesheet\' href=\'/stylesheets/' + object['content'] + '.css\'/>'
        : '',
    };
};

const getJSONFile = (object) => {
    const getVariableName = (content) => {
        let array = [];
        for (let i = 0; i < content.split('-')['length']; i++)
            array.push(content.split('-')[i]);
        let result = '';
        result += 'is';
        for (let i = 0; i < array['length']; i++)
            result += getFirstUpperCase(array[i]);
        return result;
    }
    return {
        [getVariableName(object['content'])]
        : jsonFileReader([ 'database', 'json', object['content'] + '.json' ]),
    };
};

let variables = () => {
    return {
        ...getGCSSFile({ content : 'style' }),
        ...getGJSMFile({ content : 'script' }),
        ...getJSONFile({ content : 'accordion' }),
        ...getJSONFile({ content : 'carousel' }),
        ...getJSONFile({ content : 'gallery' }),
        ...getJSONFile({ content : 'footer-quick-menu' }),
        ...getJSONFile({ content : 'navbar' }),
        ...getJSONFile({ content : 'regulation' }),
        ...getJSONFile({ content : 'convenience' }),
    };
};

let bootstraps = () => {
    return {
        bootstrapAccordion,
        bootstrapCarousel,
        bootstrapGallery,
        bootstrapModal,
        bootstrapNavbar,
    };
};

let views = () => {
    return {
        viewListGroup,
    };
};

const packages = () => {
    return {
        getCurrency,
        getDateFormat,
        getFirstUpperCase,
        getRomanNumber,
        getValidation,
        isEmpty,
        isThis,
        toClean,
        footerQuickMenu,
        ...bootstraps(),
        ...variables(),
        ...views(),
    };
};

module.exports = {
    packages,
    ...packages(),
    addJsDatabase,
    addJsonDatabase,
    arrayCreator,
    getBTNTitle,
    getCNPJNumber,
    getCPFNumber,
    getDOCNumber,
    getForeignKey,
    getFormElement,
    getFormHeader,
    getHash,
    getInputType,
    getJsDatabase,
    
    getPJSMFile,
    getPCSSFile,

    getJsPagination,
    getLoremIpsum,
    getModelPagination,
    getModelParams,
    getModelSearchParams,
    getPageTitle,
    getPathPrefix,
    getPhoneNumber,
    getPlural,
    getPublicList,
    getRandomDate,
    getRandomIndex,
    getRandomNumber,
    getSalaryRange,
    getSearchAction,
    getURLPath,
    getUserSession,
    isEqual,
    isTheLast,
    isThere,
    jsonFileReader,
    objectCreator,
    saveJsDatabase,
    urlJoin,
};