const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const fs = require('fs');
const urlJoin = require('url-join');

const bootstrapNavbar = (object) => {
    let result = '';
    result += getElement({ element : object['element'], id : object['id'], position : 'header' });
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
                    result += '<li class=\"nav-item ' + (getValidation(object['array'][x]['menu']) ? ' dropdown' : '') + '\">';
                        let id = getLowerCase('dropDown' + getRomanNumber(x + 1));
                        result += '<a';
                        result += getValidation(object['array'][x]['menu']) ? ' aria-expanded=\"false\"' : '';
                        result += getValidation(object['array'][x]['menu']) ? ' class=\"nav-link dropdown-toggle\"' : ' class=\"nav-link\"';
                        result += getValidation(object['array'][x]['menu']) ? ' data-bs-toggle=\"dropdown\"' : '';
                        result += ' href=\"' + getLowerCase(object['array'][x]['path']) + '\"';
                        result += getValidation(object['array'][x]['menu']) ? ' id=\"' + id + '\"' : '';
                        result += getValidation(object['array'][x]['menu']) ? ' role=\"button\"' : '';
                        result += '>';
                        result += getFirstUpperCase(object['array'][x]['title']);
                        result += '</a>';
                        if (getValidation(object['array'][x]['menu'])) {
                            result += '<ul class=\"dropdown-menu p-3\" aria-labelledby=\"' + id + '\">';
                                for (let y = 0; y < object['array'][x]['menu']['length']; y++) {
                                    result += '<li>';
                                        result += getValidation(object['array'][x]['menu'][y]['title']) ? '<h6>' + getFirstUpperCase(object['array'][x]['menu'][y]['title']) + ':' + '</h6>' : '';
                                        result += '<ul>';
                                            for (let z = 0; z < object['array'][x]['menu'][y]['content']['length']; z++) {
                                                result += '<li>';
                                                    let href = getValidation(object['array'][x]['menu'][y]['content'][z]['path']) ? object['array'][x]['menu'][y]['content'][z]['path'] : '#';
                                                    result += '<a';
                                                    result += ' class=\"dropdown-item\"';
                                                    result += ' href=\"' + href + '\"';
                                                    result += '>';
                                                        result += getFirstUpperCase(object['array'][x]['menu'][y]['content'][z]['title']);
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
    result += getElement({ element : object['element'], id : object['id'], position : 'footer' });
    return result;
};

const bootstrapModal = (object) => {
    let currentAction = '/';
    currentAction += object['prefix'];
    currentAction += '/delete/';
    currentAction += object['array'][object['index']]['id'];
    currentAction += '?_method=DELETE';
    currentAction = currentAction.trim().toLowerCase();
    let result = '';
    result += '<div class=\"modal fade\" id=\"modal-' + object['array'][object['index']]['id'] + '\">';
        result += '<div class=\"modal-dialog\">';
            result += '<div class=\"modal-content\">';
                result += object['title'] ? '<div class=\"modal-header\">' + '<h6>' + object['title'] + '</h6>' + '</div>' : '';
                result += object['description'] ? '<div class=\"modal-body\">' + object['description'] + '</div>' : '';
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
    let result = getValidation(object['typeNumber']) ? object['typeNumber'] === 'roman' ? getRomanNumber(object['index'] + 1) : object['index'] + 1 : object['index'] + 1;
    result += '. ';
    return result;
};

const getLineBreak = (object) => {
    const letter = getValidation(object['letter']) ? object['letter'] + ' ' : '';
    const element = getValidation(object['element']) ? '</' + object['element'] + '><' + object['element'] + '>' : '';
    return object['content'].split(letter).join(letter + element);
};

let bootstrapAccordion = (object) => {
    let result = '';
    let isTypeNumber = !isThis(object['typeNumber'], 'undefined') ? object['typeNumber'] : false;
    let isLineBreak = !isThis(object['lineBreak'], 'undefined') ? object['lineBreak'] : false;
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
                if (isThis(object['array'][x]['description'], 'string')) {
                    result += '<div class=\"accordion-body\">';
                        result += '<p>';
                            result += isLineBreak ? getLineBreak({ content : object['array'][x]['description'], element : 'p', letter : '.' }) : object['array'][x]['description'];
                        result += '</p>';
                    result += '</div>';
                } else if (isThis(object['array'][x]['description'], 'object')) {
                    result += '<div class=\"accordion-body\">';
                        result += '<ul>';
                            for (let y = 0; y < object['array'][x]['description']['length']; y++) {
                                result += '<li>';
                                    result += '<p>';
                                        result += getTypeNumber({ index : x, typeNumber : isTypeNumber });
                                        result += getTypeNumber({ index : y, typeNumber : isTypeNumber });
                                        result += isLineBreak ? getLineBreak({ content : object['array'][x]['description'][y]['title'], element : 'p', letter : '.' }) : object['array'][x]['description'][y]['title'];
                                    result += '</p>';
                                    if (isThis(object['array'][x]['description'][y]['description'], 'string')) {
                                        result += '<p>';
                                            result += lineBreak({ content : object['array'][x]['description'][y]['description'], element : 'p', letter : '.' });
                                        result += '</p>';
                                    } else if (isThis(object['array'][x]['description'][y]['description'], 'object')) {
                                        result += '<ul>';
                                        for (let z = 0; z < object['array'][x]['description'][y]['description']['length']; z++) {
                                            result += '<li>';
                                                result += '<p>';
                                                    result += getTypeNumber({ index : x, typeNumber : isTypeNumber });
                                                    result += getTypeNumber({ index : y, typeNumber : isTypeNumber });
                                                    result += getTypeNumber({ index : z, typeNumber : isTypeNumber });
                                                    result += isLineBreak ? getLineBreak({ content : object['array'][x]['description'][y]['description'][z], element : 'p', letter : '.' }) : object['array'][x]['description'][y]['description'][z];
                                                result += '</p>';
                                            result += '</li>';
                                        }
                                        result += '</ul>';
                                    } else {
                                        result += '';
                                    }
                                result += '</li>';
                            }
                        result += '</ul>';
                    result += '</div>';
                } else {
                    result += '';
                }
            result += '</div>';
        result += '</div>';
        }
    result += '</div>';
    return result;
};

const getLowerCase = (content) => {
    return String(content).trim().toLowerCase();
};

const getElement = getElementTag = (object) => {
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

const jsonFileReader = (array) => {
    return isThere(array) ? JSON.parse(fs.readFileSync(urlJoin(array), { encoding : 'utf-8' })) : [];
};

const isEmpty = (object) => {
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    if (object == null) return true;
    if (object['length'] > 0) return false;
    if (object['length'] === 0) return true;
    for (var key in object) if (hasOwnProperty.call(object, key)) return false;
    return true;
};

const getPathPrefix = (content) => {
    return {
        pathPrefix : getValidation(content) ? String(content).trim().split('-').join('/').toLowerCase() : '',
    }
};

const getPageTitle = (object) => {
    let result = '';
    result += getValidation(object['prefix']) ? object['prefix'] : '';
    result += getValidation(object['suffix']) ? ' ' + object['suffix'] : '';
    return {
        pageTitle : result.trim().split('-').join(' ').toLowerCase(),
    }
};

const getRandomNumber = (object) => {
    return Math.floor(Math.random() * (Math.floor(object['maximum']) - Math.ceil(object['minimum']))) + Math.ceil(object['minimum']);
};

const getValidation = (content) => {
    if (!content) return false;
    else if (isThis(content, 'undefined')) return false;
    else return true;
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

// const isThis = (object) => {
//     return typeof object['content'] === object['type'];
// };

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

const getPublicList = () => {
    const getRecordList = (content) => {
        const result = [];
        const contentFilePath = [
            '..',
            'database',
            'option.js'
        ];
        for (let i = 0; i < require(urlJoin(contentFilePath))[content]['length']; i++) {
            result.push({
                first : require(urlJoin(contentFilePath))[content][i],
                last : require(urlJoin(contentFilePath))['last'][Math.floor(Math.random() * require(urlJoin(contentFilePath))['last']['length'])],
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
        userSession : !isEmpty(content) ? content : undefined,
    };
};

const isThere = (array) => {
    return fs.existsSync(urlJoin(array));
};

const addJsDatabase = (object) => {
    const contentFilePath = [
        ...object['require'],
        object['title'] + '.js',
    ];
    const contentFile = isThere(contentFilePath) ? require(urlJoin([
        '..',
        ...contentFilePath,
    ])) : [];
    object['attachment'] ? contentFile.push(object['attachment']) : undefined;
    fs.writeFileSync(urlJoin(contentFilePath), 'const ' + object['title'] + ' = ');
    fs.appendFileSync(urlJoin(contentFilePath), JSON.stringify(contentFile));
    fs.appendFileSync(urlJoin(contentFilePath), ';');
    fs.appendFileSync(urlJoin(contentFilePath), 'module.exports = ' + object['title'] + ';');
};

const addJsonDatabase = (object) => {
    const contentFilePath = [
        ...object['require'],
        object['title'] + '.json',
    ];
    const contentFile = isThere(contentFilePath) ? JSON.parse(fs.readFileSync(urlJoin(contentFilePath), { encoding : 'utf-8' })) : [];
    object['attachment'] ? contentFile.push(object['attachment']) : undefined;
    fs.writeFileSync(urlJoin(contentFilePath), JSON.stringify(contentFile));
};

const saveJsDatabase = (object) => {
    const contentFilePath = [
        ...object['require'],
        object['title'] + '.js',
    ];
    fs.writeFileSync(urlJoin(contentFilePath), 'const ' + object['title'] + ' = ');
    fs.appendFileSync(urlJoin(contentFilePath), JSON.stringify(object['content']));
    fs.appendFileSync(urlJoin(contentFilePath), ';');
    fs.appendFileSync(urlJoin(contentFilePath), 'module.exports = ' + object['title'] + ';');
};

const getLoremIpsum = (object) => {
    const contentFilePath = [
        'database',
        'option.js',
    ];
    return {
        title : isThere(contentFilePath) ? require(urlJoin([
            '..',
            ...contentFilePath,
        ]))['lorem']['title'] : '',
        description : isThere(contentFilePath) ? require(urlJoin([
            '..',
            ...contentFilePath,
        ]))['lorem']['description'] : '',
    };
};

const getRandomIndex = (object) => {
    const result = [];
    const contentFilePath = [ '..', 'database', 'option.js' ];
    for (let i = 0; i < require(urlJoin(contentFilePath))[object['array']]['length']; i++)
        result.push(require(urlJoin(contentFilePath))[object['array']][i]['option']);
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
        formAttribute : {
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
    const contentFilePath = [
        '..',
        'database',
        'option.js',
    ];
    return {
        inputType : require(urlJoin(contentFilePath))['inputType'],
    };
};

const getSearchAction = (object) => {
    return {
        searchAction : getURLPath({
            prefix : object['prefix'],
            suffix : object['suffix'],
        }),
    };
};

const getFormElement = (object) => {
    const contentFilePath = [
        '..',
        'database',
        'element.js',
    ];
    return {
        formElement : require(urlJoin(contentFilePath))[object['element']][object['type']],
    };
};

const getFirstUpperCase = (string) => {
    let result = '';
    result += String(string).charAt(0).toUpperCase();
    result += String(string).slice(1);
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

const getPlural = (result) => {
    if (isTheLast(result, 'y')) result = result.substr(0, result['length'] - 1) + 'ies';
    else if (isTheLast(result, 's')) result += 'es';
    else result += 's';
    return result.trim().toLowerCase();
};

const getbtnTitle = (result) => {
    return {
        btnTitle : String(result).trim(),
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

let getDateFormat = (string) => {
    const day = new Date(string).getDate().toString().padStart(2, '0'),
    month = (new Date(string).getMonth() + 1).toString().padStart(2, '0'),
    year = new Date(string).getFullYear();
    return day + '/' + month + '/' + year;
};

const getJsDatabase = (object) => {
    const contentFilePath = [
        ...object['require'],
        object['title'] + '.js',
    ];
    const result = isThere(contentFilePath) ? require(urlJoin([
        '..',
        ...contentFilePath,
    ])) : [];
    return result;
};

const getJSFileModule = (object) => {
    const contentFilePath = [
        'public',
        'javascripts',
        object['content'] + '.js',
    ];
    return {
        [object['variable']] : isThere(contentFilePath)
        ? '<script type=\"module\" src=\"/javascripts/' + object['content'] + '.js\"></script>'
        : '',
    };
};

const getCSSFile = (object) => {
    const contentFilePath = [
        'public',
        'stylesheets',
        object['content'] + '.css',
    ];
    return {
        [object['variable']] : isThere(contentFilePath)
        ? '<link rel=\'stylesheet\' href=\'/stylesheets/' + object['content'] + '.css\'/>'
        : '',
    };
};

let variables = () => {
    return {
        isNavbar : jsonFileReader([ 'database', 'json', 'navbar.json' ]),
        isFooterMenu : jsonFileReader([ 'database', 'json', 'footer-menu.json' ]),
        isRegulation : jsonFileReader([ 'database', 'json', 'regulation.json' ]),
        isAccordion : jsonFileReader([ 'database', 'json', 'accordion.json' ]),
        ...getCSSFile({ content : 'style', variable : 'isGlobalCSSFile' }),
        ...getJSFileModule({ content : 'script', variable : 'isGlobalJSFile' }),
    };
};

let bootstrap = () => {
    return {
        bootstrapAccordion,
        bootstrapModal,
        bootstrapNavbar,
    };
};

const package = () => {
    return {
        getCurrency,
        getDateFormat,
        getFirstUpperCase,
        getRomanNumber,
        getValidation,
        isEmpty,
        isThis,
        toClean,
        ...variables(),
        ...bootstrap(),
    };
};

module.exports = {
    package,
    ...package(),
    addJsDatabase,
    addJsonDatabase,
    arrayCreator,
    getbtnTitle,
    getCNPJNumber,
    getCPFNumber,
    getDOCNumber,
    getForeignKey,
    getFormElement,
    getFormHeader,
    getHash,
    getInputType,
    getJsDatabase,
    getJSFileModule,
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