let {
    getFirstUpperCase,
    getLowerCase,
    getRomanNumber,
    getValidation,
    isThis,
    getElement,
    getFormat,
} = require('./');

let getArticle = (object) => {
    let result = '';
    result += getElement({ element : object['element'], id : object['id'], position : 'header' });
        result += getFormat({
            content : object['title'],
            element : 'h2',
            letter : '.',
            type : 'text',
        });
        result += '<div class=\"accordion accordion-flush\" id=\"accordionFlushExample\">';
        for (let i = 0; i < object['array']['length']; i++) {
            let heading = 'flush-heading' + '-' + object['target'] + i;
            let collapse = 'flush-collapse' + '-' + object['target'] + i;
            result += '<div class=\"accordion-item\">';
                result += '<h2 class=\"accordion-header\" id=\"' + heading + '\">';
                    result += '<button';
                    result += ' class=\"accordion-button collapsed\"';
                    result += ' type=\"button\"';
                    result += ' data-bs-toggle=\"collapse\"';
                    result += ' data-bs-target=\"#' + collapse + '\"';
                    result += ' aria-expanded=\"false\"';
                    result += ' aria-controls=\"flush-collapseOne\"';
                    result += '>';
                    result += getFirstUpperCase((i + 1) + '. ' + object['array'][i]['title']);
                    result += '</button>';
                result += '</h2>';
                result += '<div';
                result += ' id=\"' + collapse + '\"';
                result += ' class=\"accordion-collapse collapse\"';
                result += ' aria-labelledby=\"' + heading + '\"';
                result += ' data-bs-parent=\"#accordionFlushExample\"';
                result += '>';
                    if (getValidation(object['array'][i]['description'])) {
                        result += '<div class=\"accordion-body\">';
                            if (isThis({ content : object['array'][i]['description'], type : 'string' })) {
                                result += getFormat({
                                    content : object['array'][i]['description'],
                                    element : 'p',
                                    letter : '.',
                                    type : 'text',
                                });
                            } else if (isThis({ content : object['array'][i]['description'], type : 'object' })) {
                                result += '<ul>';
                                    for (let y = 0; y < object['array'][i]['description']['length']; y++) {
                                        result += '<li>';
                                            if (getValidation(object['array'][i]['description'][y]['title'])) {
                                                result += '<p>';
                                                    result += (i + 1) + '.' + (y + 1) + '.' + ' ';
                                                    result += object['array'][i]['description'][y]['title'];
                                                result += '</p>';
                                            };
                                            if (getValidation(object['array'][i]['description'][y]['description'])) {
                                                result += '<ul>';
                                                    for (let z = 0; z < object['array'][i]['description'][y]['description']['length']; z++) {
                                                        result += '<li>';
                                                            result += '<p>';
                                                                result += (i + 1) + '.' + (y + 1) + '.' + (z + 1) + '.' + ' ';
                                                                result += object['array'][i]['description'][y]['description'][z];
                                                            result += '</p>';
                                                        result += '</li>';
                                                    };
                                                result += '</ul>';
                                            };
                                        result += '</li>';
                                    };
                                result += '</ul>';
                            };
                        result += '</div>';
                    };
                result += '</div>';
            result += '</div>';
        };
        result += '</div>';
    result += getElement({ element : object['element'], id : object['id'], position : 'footer' });
    return result;
};

let getNavBar = (object) => {
    let result = '';
    result += getElement({ element : object['element'], id : object['id'], position : 'header' });
        result += '<nav class=\"';
        result += ' container-fluid';
        result += ' navbar';
        result += ' navbar-expand-lg';
        result += ' navbar-light';
        result += '\">';
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
                                                        result += '<a class=\"dropdown-item\" href=\"' + href + '\">';
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
        result += '</nav>';
    result += getElement({ element : object['element'], id : object['id'], position : 'footer' });
    return result;
};

let getSlideShow = (object) => {
    let result = '';
    result += getElement({ element : object['element'], id : object['id'], position : 'header' });
        result += '<div id=\"carouselExampleCaptions\" class=\"carousel slide\" data-bs-ride=\"carousel\">';
            result += '<div class=\"carousel-indicators\">';
                for (let i = 0; i < object['array']['length']; i++) {
                    result += '<button';
                    result += ' type=\"button\"';
                    result += ' data-bs-target=\"#carouselExampleCaptions\"';
                    result += ' data-bs-slide-to=\"' + i + '\"';
                    result += !i ? ' class=\"active\"' : '';
                    result += ' aria-current=\"true\"';
                    result += ' aria-label=\"Slide ' + (i + 1) + '\"';
                    result += '>';
                    result += '</button>';
                }
            result += '</div>';
            result += '<div class=\"carousel-inner\">';
                for (let i = 0; i < object['array']['length']; i++) {
                    result += '<div class=\"carousel-item' + (!i ? ' active' : '') + '\">';
                        result += object['array'][i]['image'] ? '<img src=\"' + object['array'][i]['image'] + '\" class=\"d-block w-100\" alt=\"' + '\">' : '';
                        if (getValidation(object['array'][i]['title']) && getValidation(object['array'][i]['description'])) {
                            result += '<div class=\"carousel-caption d-none d-md-block\">';
                                result += getFormat({
                                    content : object['array'][i]['title'],
                                    element : 'h3',
                                    letter : '.',
                                    type : 'text',
                                });
                                if (getValidation(object['array'][i]['description']))
                                    result += getFormat({
                                        content : object['array'][i]['description'],
                                        element : 'p',
                                        letter : '.',
                                        type : 'text',
                                    });
                            result += '</div>';
                        }
                    result += '</div>';
                }
            result += '</div>';
            let control = [ 'prev', 'next' ];
            for (let i = 0; i < control['length']; i++) {
                result += '<button class=\"carousel-control-' + control[i] + '\" type=\"button\" data-bs-target=\"#carouselExampleCaptions\" data-bs-slide=\"' + control[i] + '\">';
                    result += '<span class="carousel-control-' + control[i] + '-icon\" aria-hidden=\"true\"></span>';
                    result += '<span class="visually-hidden">' + control[i] + '</span>';
                result += '</button>';
            }
        result += '</div>';
    result += getElement({ element : object['element'], id : object['id'], position : 'footer' });
    return result;
};

const allComponents = () => {
    return {
        getArticle,
        getNavBar,
        getSlideShow,
    };
};

module.exports = {
    allComponents,
};