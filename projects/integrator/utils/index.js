const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const fs = require('fs');
const urlJoin = require('url-join');

const isEmpty = (object) => {
    if (object == null) return true;
    if (object['length'] > 0) return false;
    if (object['length'] === 0) return true;
    for (let key in object)
        if (Object.prototype.hasOwnProperty.call(object, key))
            return false;
    return true;
};

const getValidation = (content) => {
    if (!content)
        return false;
    else if (isThis(content, 'undefined'))
        return false;
    else if (isThis(content, 'object') && isEmpty(content))
        return false;
    else
        return true;
};

const footerQuickMenu = (object) => {
    let result = '';
    result += '<div id=\"quick-view\">';
        result += '<div id=\"row\">';
            result += '<div id=\"col\">';
                result += '<div id=\"menu\">';
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
    result += '</div>';
    return result;
};

const viewListGroup = (object) => {
    let result = '';
    let isQuickView = quickView({ object : object });
    for (let x = 0; x < object['array']['length']; x++) {
        result += isQuickView;
        result += '<div id=\"' + (x % 2 === 0 ? 'first-item' : 'second-item') + '\">';
            result += getHeader({
                index : x,
                title : object['array'][x]['title'],
                description : object['array'][x]['description'],
                image : object['array'][x]['image'],
            });
            if (getValidation(object['array'][x]['items'])) {
                result += '<div id=\"body\">';
                    result += '<div id=\"row\">';
                        for (let y = 0; y < object['array'][x]['items']['length']; y++) {
                            result += '<div id=\"col\">';
                                result += '<div id=\"list-group\">';
                                    result += '<a href=\"#\">';
                                        result += textSetup({
                                            content : object['array'][x]['items'][y]['title'],
                                            element : [ 'h5' ],
                                        });
                                        result += getWrapped({
                                            tag : 'img',
                                            alt : object['array'][x]['items'][y]['title'],
                                            src : object['array'][x]['items'][y]['image'],
                                            position : {
                                                start : true,
                                            }
                                        });
                                        result += textSetup({
                                            content : object['array'][x]['items'][y]['description'],
                                            element : [ 'p', 'em' ],
                                        });
                                        if (getValidation(object['array'][x]['items'][y]['items'])) {
                                            result += '<ul>';
                                                for (let z = 0; z < object['array'][x]['items'][y]['items']['length']; z++) {
                                                    result += '<li>';
                                                        result += '<div class=\"row\">';
                                                            if (getValidation(object['array'][x]['items'][y]['items'][z]['image'])) {
                                                                result += '<div';
                                                                result += ' class=\"col-4 p-3\"';
                                                                result += ' style=\"background-image: url(' + object['array'][x]['items'][y]['items'][z]['image'] + ');\">';
                                                                result += '</div>';
                                                            };
                                                            result += '<div class=\"col-8 p-3\">';
                                                                let n = '';
                                                                n += getTypeNumber({ index : y });
                                                                n += getTypeNumber({ index : z });
                                                                result += textSetup({
                                                                    index : n,
                                                                    content : object['array'][x]['items'][y]['items'][z]['title'],
                                                                    element : [ 'p', 'b' ],
                                                                });
                                                                result += textSetup({
                                                                    content : object['array'][x]['items'][y]['items'][z]['description'],
                                                                    element : [ 'p', 'em' ],
                                                                });
                                                                result += textSetup({
                                                                    content : object['array'][x]['items'][y]['items'][z]['value'],
                                                                    element : [ 'p', 'b' ],
                                                                    suffix : ' km.',
                                                                });
                                                            result += '</div>';
                                                        result += '</div>';

                                                    result += '</li>';
                                                }
                                            result += '</ul>';
                                        };
                                    result += '</a>';
                                result += '</div>';
                            result += '</div>';
                        }
                    result += '</div>';
                result += '</div>';
            };
        result += '</div>';
    }
    result += isQuickView;
    return result;
};

const quickView = (object) => {
    let result = '';
    let isID = '#id-';
    result += '<div id=\"quick-view\">';
        result += '<div id=\"row\">';
            result += '<div id=\"col\">';
                result += '<div id=\"menu\">';
                    for (let i = 0; i < object['object']['array']['length']; i++) {
                        result += '<a href=\"' + isID + i + '\">';
                            result += getFirstUpperCase(object['object']['array'][i]['title']);
                        result += '</a>';
                    };
                result += '</div>';
            result += '</div>';
        result += '</div>';
    result += '</div>';
    return result;
};


const getHeader = (object) => {
    let result = '';
    if (getValidation(object['title']) || getValidation(object['description'])) {
        result += '<div id=\"header\">';
            result += '<div id=\"row\">';
                if (getValidation(object['image'])) {
                    result += '<div id=\"header-image\" style=\"background-image: url(' + object['image'] + ');\">';
                    result += '</div>';
                };
                result += getValidation(object['image']) ? '<div id=\"header-content\">' : '';
                    result += textSetup({
                        id : 'id' + '-' + object['index'],
                        content : object['title'],
                        element : [ 'h1' ],
                    });
                    result += textSetup({
                        content : object['description'],
                        element : [ 'p', 'em' ],
                    });
                result += getValidation(object['image']) ? '</div>' : '';
            result += '</div>';
        result += '</div>';
    };
    return result;
}

const bootstrapGallery = (object) => {
    let result = '';
    let = isQuickView = quickView({ object : object });
    for (let x = 0; x < object['array']['length']; x++) {
        result += isQuickView;
        result += '<div id=\"' + (x % 2 === 0 ? 'first-item' : 'second-item') + '\">';
            result += getHeader({
                index : x,
                title : object['array'][x]['title'],
                description : object['array'][x]['description'],
            });
            if (getValidation(object['array'][x]['items'])) {
                result += '<div id=\"body\">';
                    result += '<div id=\"row\">';
                        for (let y = 0; y < object['array'][x]['items']['length']; y++) {
                            if (getValidation(object['array'][x]['items'][y]['image'])) {
                                result += '<div id=\"col\">';
                                    if (getValidation(object['array'][x]['items'][y]['image'])) {
                                        result += '<div id=\"image\">';
                                            let isTitle = getValidation(object['array'][x]['items'][y]['title']) ? object['array'][x]['items'][y]['title'] : '';
                                            result += '<a href=\"' + object['array'][x]['items'][y]['image'] + '\"' + (isTitle ? ' title=\"' + isTitle + '\"' : '') + '>';
                                                result += '<img src=\"' + object['array'][x]['items'][y]['image'] + '\"' + (isTitle ? ' alt=\"' + isTitle + '\"' : '') + '/>';
                                                result += isTitle ? '<div id=\"caption\">' + isTitle + '</div>' : '';
                                            result += '</a>';
                                        result += '</div>';
                                    };
                                    result += textSetup({
                                        content : object['array'][x]['items'][y]['title'],
                                        element : [ 'p', 'b' ],
                                        wrap : {
                                            id : 'title',
                                            tag : 'div',
                                        }
                                    });
                                    result += textSetup({
                                        content : object['array'][x]['items'][y]['description'],
                                        element : [ 'p', 'em' ],
                                        wrap : {
                                            id : 'description',
                                            tag : 'div',
                                        }
                                    });
                                result += '</div>';
                            };
                        };
                    result += '</div>';
                result += '</div>';
            };
        result += '</div>';
    };
    result += isQuickView;
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
                    result += getValidation(object['array'][i]['title']) ? ' alt=\"' + object['array'][i]['title'] + '\"' : '';
                    result += '>';
                    result += '<div class=\"carousel-caption d-none d-md-block\">';

                        result += getValidation(object['array'][i]['title']) ? textSetupIII({
                            element : {
                                tag : [ 'h3', 'em' ],
                            },
                            content : {
                                text : object['array'][i]['title'],
                            },
                        }) : '';

                        // result += getValidation(object['array'][i]['title'])
                        // ? textSetup({
                        //     content : object['array'][i]['title'],
                        //     element : [ 'h3', 'em' ],
                        // }) : '';

                        // result += getValidation(object['array'][i]['description']) ? textSetupIII({
                        //     element : {
                        //         tag : [ 'p', 'em' ],
                        //     },
                        //     content : {
                        //         text : object['array'][i]['description'],
                        //     },
                        // }) : '';

                        // result += getValidation(object['array'][i]['description'])
                        // ? textSetup({
                        //     content : object['array'][i]['description'],
                        //     element : [ 'p', 'em' ],
                        // }) : '';

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
                                                    let isHref = getValidation(object['array'][x]['items'][y]['items'][z]['path']) ? object['array'][x]['items'][y]['items'][z]['path'] : '#';
                                                    result += '<a';
                                                    result += ' class=\"dropdown-item\"';
                                                    result += ' href=\"' + isHref + '\"';
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
    result += '<div class=\"modal fade\" id=\"modal-' + object['array'][object['index']]['id'] + '\">';
        result += '<div class=\"modal-dialog\">';
            result += '<div class=\"modal-content\">';
                if (getValidation(object['title'])) {
                    result += '<div class=\"modal-header\">';
                        result += textSetup({
                            content : object['title'],
                            element : [ 'h5' ]
                        });
                    result += '</div>';
                }
                if (getValidation(object['description'])) {
                    result += '<div class=\"modal-body\">';
                        result += textSetup({
                            content : object['description'],
                            element : [ 'p', 'em' ]
                        });
                    result += '</div>';
                }
                result += '<div class=\"modal-footer\">';
                    let currentAction = '';
                    currentAction += '/' + object['prefix'];
                    currentAction += '/' + 'delete';
                    currentAction += '/' + object['array'][object['index']]['id'];
                    currentAction += '?_method=DELETE';
                    currentAction = currentAction.trim().toLowerCase();
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
    let result = '';
    result += getValidation(object['typeNumber'])
    ? object['typeNumber'] === 'roman' ? getRomanNumber(object['index'] + 1) : object['index'] + 1
    : object['index'] + 1;
    result += '. ';
    return result;
};

const getWrapped = (object) => {
    let result = '';
    if (getValidation(object['tag'])) {
        if (getValidation(object['position']['start'])) {
            result += '<';
            result += getTrim(object['tag']);
            result += getValidation(object['alt']) ? ' alt=\"' + getTrim(object['alt']) + '\"' : '';
            result += getValidation(object['href']) ? ' href=\"' + getTrim(object['href']) + '\"' : '';
            result += getValidation(object['id']) ? ' id=\"' + getTrim(object['id']) + '\"' : '';
            result += getValidation(object['src']) ? ' src=\"' + getTrim(object['src']) + '\"' : '';
            result += '>';
        };
    };
    if (getValidation(object['tag'])) {
        if (getValidation(object['position']['end'])) {
            result += '</' + getTrim(object['tag']) + '>';
        };
    };
    return result;
};

const textSetupIII = (object) => {
    const getElementStart = (object) => {
        let result = '';
        if (getValidation(object['tag'])) {
            result += '<';
            result += getTrim(object['tag']);
            result += getValidation(object['alt']) ? ' alt=\"' + getTrim(object['alt']) + '\"' : '';
            if (getValidation(object['class'])) {
                if (isThis(object['class'], 'string')) {
                    result += ' class=\"';
                    result += getTrim(object['class']);
                    result += '\"';
                };
                if (isThis(object['class'], 'object')) {
                    result += ' class=\"';
                    for (let i = 0; i < object['class']['length']; i++) {
                        result += !i ? '' : ' ';
                        result += getTrim(object['class'][i]);
                    }
                    result += '\"';
                };
            };
            result += getValidation(object['href']) ? ' href=\"' + getTrim(object['href']) + '\"' : '';
            result += getValidation(object['id']) ? ' id=\"' + getTrim(object['id']) + '\"' : '';
            result += getValidation(object['name']) ? ' name=\"' + getTrim(object['name']) + '\"' : '';
            result += getValidation(object['src']) ? ' src=\"' + getTrim(object['src']) + '\"' : '';
            result += getValidation(object['title']) ? ' title=\"' + getTrim(object['title']) + '\"' : '';
            result += '>';
        }
        return result;
    };
    const getElementEnd = (object) => {
        let result = '';
        result += getValidation(object['tag']) ? '</' + getTrim(object['tag']) + '>' : '';
        return result;
    };
    let elementStart = '', elementEnd = '';
    if (getValidation(object['element'])) {
        if (isThis(object['element']['tag'], 'string')) {
            elementStart += getElementStart({
                alt : object['element']['alt'],
                class : object['element']['class'],
                href : object['element']['href'],
                id : object['element']['id'],
                name : object['element']['name'],
                src : object['element']['src'],
                tag : object['element']['tag'],
                title : object['element']['title'],
            });
            elementEnd += getElementEnd({
                tag : object['element']['tag'],
            });
        };
        if (isThis(object['element']['tag'], 'object')) {
            for (let i = 0; i < object['element']['tag']['length']; i++) {
                elementStart += getElementStart({
                    alt : !i ? object['element']['alt'] : '',
                    class : !i ? object['element']['class'] : '',
                    href : !i ? object['element']['href'] : '',
                    id : !i ? object['element']['id'] : '',
                    name : !i ? object['element']['name'] : '',
                    src : !i ? object['element']['src'] : '',
                    tag : object['element']['tag'][i],
                    title : !i ? object['element']['title'] : '',
                });
            };
            for (let i = object['element']['tag']['length']; i > 0; i--) {
                elementEnd += getElementEnd({
                    tag : object['element']['tag'][i],
                });
            };
        };
    };




    let result = '';
    result += getValidation(object['wrap']) && getValidation(object['wrap']['element']) ? getElementStart({
        alt : object['wrap']['element']['alt'],
        class : object['wrap']['element']['class'],
        href : object['wrap']['element']['href'],
        id : object['wrap']['element']['id'],
        name : object['wrap']['element']['name'],
        src : object['wrap']['element']['src'],
        tag : object['wrap']['element']['tag'],
        title : object['wrap']['element']['title'],
    }) : '';


    result += elementStart;
    result += getValidation(object['has']) && getValidation(object['has']['before']) ? object['has']['before'] : '';
    result += getValidation(object['has']) && getValidation(object['has']['index']) ? object['has']['index'] : '';


    result += getValidation(object['content']['text']) && getValidation(object['content']['spacer'])
    ? object['content']['text'].split(object['content']['spacer']).join(object['content']['spacer'] + elementEnd + elementStart)
    : object['content']['text'];

    result += getValidation(object['has']) && getValidation(object['has']['after']) ? object['has']['after'] : '';
    result += elementEnd;
    result += getValidation(object['wrap']) && getValidation(object['wrap']['element']) ? getElementEnd({
        tag : object['wrap']['element']['tag']
    }) : '';


    return result;
};

const textSetup = (object) => {
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
    is_content += getValidation(object['prefix']) ? object['prefix'] : '';
    is_content += getValidation(object['index']) ? object['index'] : '';
    is_content += getValidation(object['element']) && getValidation(object['letter'])
    ? object['content'].split(object['letter'] + ' ').join(object['letter'] + is_end + is_start)
    : object['content'];
    is_content += getValidation(object['suffix']) ? object['suffix'] : '';
    let result = '';
    if (getValidation(object['tag'])) {
        if (getValidation(object['position']['start'])) {
            result += '<';
            result += getTrim(object['tag']);
            result += getValidation(object['alt']) ? ' alt=\"' + getTrim(object['alt']) + '\"' : '';
            result += getValidation(object['href']) ? ' href=\"' + getTrim(object['href']) + '\"' : '';
            result += getValidation(object['id']) ? ' id=\"' + getTrim(object['id']) + '\"' : '';
            result += getValidation(object['src']) ? ' src=\"' + getTrim(object['src']) + '\"' : '';
            result += '>';
        };
    };
    if (getValidation(object['content'])) {
        result += is_start;
        result += is_content;
        result += is_end;
    };
    if (getValidation(object['wrap'])) {
        if (getValidation(object['wrap']['tag'])) {
            if (getValidation(object['wrap']['end'])) {
                result += '</' + getTrim(object['wrap']['tag']) + '>';
            };
        };
    };
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
    let columnImage = 2, columnText = 12 - columnImage;
    let isQuickView = quickView({ object : object });
    for (let i = 0; i < object['array']['length']; i++) {
        // result = '';
        result += isQuickView;
        result += '<div id=\"first-item\">';
            result += getHeader({
                index : i,
                title : object['array'][i]['title'],
                description : object['array'][i]['description'],
                // columnImage : 2,
            });
            let accordionID = '';
            accordionID += 'accordion';
            accordionID += '-';
            accordionID += i;
            result += '<div class=\"accordion\" id=\"' + accordionID + '\">';
                for (let x = 0; x < object['array'][i]['items']['length']; x++) {
                    let isID = '-' + i + '-' + x;
                    result += '<div class=\"accordion-item\">';
                        result += '<h2 class=\"accordion-header\" id=\"heading' + isID + '\">';
                            result += '<button'
                                result += ' aria-controls=\"collapse' + isID + '\"';
                                result += ' aria-expanded=\"' + 'false' + '\"';
                                result += ' class=\"accordion-button collapsed\"';
                                result += ' data-bs-target=\"#collapse' + isID + '\"';
                                result += ' data-bs-toggle=\"collapse\"'
                                result += ' type=\"button\"';
                            result += '>';
                                result += getTypeNumber({ index : x });
                                result += object['array'][i]['items'][x]['title'];
                            result += '</button>';
                        result += '</h2>';
                        result += '<div'
                        result += ' aria-labelledby=\"heading' + isID + '\"';
                        result += ' class=\"accordion-collapse collapse\"';
                        result += ' data-bs-parent=\"#' + accordionID + '\"';
                        result += ' id=\"collapse' + isID + '\"';
                        result += '>';
                            if (getValidation(object['array'][i]['items'][x]['description']) || getValidation(object['array'][i]['items'][x]['items'])) {
                                result += '<div class=\"accordion-body\">';
                                    if (getValidation(object['array'][i]['items'][x]['description'])) {
                                        result += '<div class=\"row\">';
                                            result += getValidation(columnImage) ? textSetupIII({
                                                element : {
                                                    alt : '',
                                                    class : [],
                                                    href : '',
                                                    id : '',
                                                    name : '',
                                                    src : '',
                                                    tag : [],
                                                    title : '',
                                                },
                                                content : {
                                                    text : '',
                                                    spacer : '',
                                                },
                                                has : {
                                                    index : '',
                                                    before : '',
                                                    after : '',
                                                },
                                                wrap : {
                                                    element : {
                                                        alt : '',
                                                        class : [
                                                            'col-' + columnImage,
                                                        ],
                                                        href : '',
                                                        id : '',
                                                        name : '',
                                                        src : '',
                                                        tag : 'div',
                                                        title : '',
                                                    },
                                                },
                                            }) : '';
                                            result += getValidation(object['array'][i]['items'][x]['description']) ? textSetupIII({
                                                element : {
                                                    alt : '',
                                                    class : [],
                                                    href : '',
                                                    id : '',
                                                    name : '',
                                                    src : '',
                                                    tag : [ 'h5' ],
                                                    title : '',
                                                },
                                                content : {
                                                    text : object['array'][i]['items'][x]['description'],
                                                    spacer : '.',
                                                },
                                                has : {
                                                    index : '',
                                                    before : '',
                                                    after : '',
                                                },
                                                wrap : {
                                                    element : {
                                                        alt : '',
                                                        class : [
                                                            'col-' + columnText,
                                                            getValidation(object['array'][i]['items'][x]['items']) ? 'mb-3' : '',
                                                            'px-3',
                                                        ],
                                                        href : '',
                                                        id : '',
                                                        name : '',
                                                        src : '',
                                                        tag : 'div',
                                                        title : '',
                                                    },
                                                }
                                            }) : '';
                                        result += '</div>';
                                    };
                                    if (getValidation(object['array'][i]['items'][x]['items'])) {
                                        result += '<div class=\"row\">';
                                            result += columnImage ? '<div class=\"col-' + columnImage + '\">' : '';
                                            result += columnImage ? '</div>' : '';
                                            result += '<div class=\"col-' + columnText + '\">';
                                                result += '<ul>';
                                                    for (let y = 0; y < object['array'][i]['items'][x]['items']['length']; y++) {
                                                        result += '<li>';
                                                            let n = '';
                                                            n += getTypeNumber({ index : x });
                                                            n += getTypeNumber({ index : y });
                                                            result += getValidation(object['array'][i]['items'][x]['items'][y]['title']) ? textSetupIII({
                                                                element : {
                                                                    alt : '',
                                                                    class : [
                                                                        'mb-3',
                                                                    ],
                                                                    href : '',
                                                                    id : '',
                                                                    name : '',
                                                                    src : '',
                                                                    tag : [ 'p' ],
                                                                    title : '',
                                                                },
                                                                content : {
                                                                    text : object['array'][i]['items'][x]['items'][y]['title'],
                                                                    spacer : '',
                                                                },
                                                                has : {
                                                                    index : n,
                                                                    before : '',
                                                                    after : '',
                                                                },
                                                                wrap : {
                                                                    element : {
                                                                        alt : '',
                                                                        class : [],
                                                                        href : '',
                                                                        id : '',
                                                                        name : '',
                                                                        src : '',
                                                                        tag : '',
                                                                        title : '',
                                                                    },
                                                                }
                                                            }) : '';
                                                            result += getValidation(object['array'][i]['items'][x]['items'][y]['description']) ? textSetupIII({
                                                                element : {
                                                                    alt : '',
                                                                    class : [
                                                                        'mb-3',
                                                                        'text-danger',
                                                                    ],
                                                                    href : '',
                                                                    id : '',
                                                                    name : '',
                                                                    src : '',
                                                                    tag : [ 'p', 'em' ],
                                                                    title : '',
                                                                },
                                                                content : {
                                                                    text : object['array'][i]['items'][x]['items'][y]['description'],
                                                                    spacer : '. ',
                                                                },
                                                                has : {
                                                                    index : '',
                                                                    before : '',
                                                                    after : '',
                                                                },
                                                                wrap : {
                                                                    element : {
                                                                        alt : '',
                                                                        class : [],
                                                                        href : '',
                                                                        id : '',
                                                                        name : '',
                                                                        src : '',
                                                                        tag : '',
                                                                        title : '',
                                                                    },
                                                                }
                                                            }) : '';
                                                            if (getValidation(object['array'][i]['items'][x]['items'][y]['items'])) {
                                                                result += '<ul>';
                                                                    for (let z = 0; z < object['array'][i]['items'][x]['items'][y]['items']['length']; z++) {
                                                                        let n = '';
                                                                        n += getTypeNumber({ index : x });
                                                                        n += getTypeNumber({ index : y });
                                                                        n += getTypeNumber({ index : z });
                                                                        result += getValidation(object['array'][i]['items'][x]['items'][y]['items'][z]) ? textSetupIII({
                                                                            element : {
                                                                                alt : '',
                                                                                class : [
                                                                                    'mb-3',
                                                                                    'text-success',
                                                                                ],
                                                                                href : '',
                                                                                id : '',
                                                                                name : '',
                                                                                src : '',
                                                                                tag : [ 'li', 'p', 'em' ],
                                                                                title : '',
                                                                            },
                                                                            content : {
                                                                                text : object['array'][i]['items'][x]['items'][y]['items'][z],
                                                                                spacer : '',
                                                                            },
                                                                            has : {
                                                                                index : n,
                                                                                before : '',
                                                                                after : '',
                                                                            },
                                                                            wrap : {
                                                                                element : {
                                                                                    alt : '',
                                                                                    class : [],
                                                                                    href : '',
                                                                                    id : '',
                                                                                    name : '',
                                                                                    src : '',
                                                                                    tag : '',
                                                                                    title : '',
                                                                                },
                                                                            }
                                                                        }) : '';
                                                                    };
                                                                result += '</ul>';
                                                            };
                                                        result += '</li>';
                                                    };
                                                result += '</ul>';
                                            result += '</div>';
                                        result += '</div>';
                                    };
                                result += '</div>';
                            };
                        result += '</div>';
                    result += '</div>';
                };
            result += '</div>';
        result += '</div>';
    };
    result += isQuickView;
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

const getTrim = (content) => {
    return String(content).trim();
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
        [variableName({
            prefix : 'is',
            content : object['content']
        })]
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
    variableName,
};