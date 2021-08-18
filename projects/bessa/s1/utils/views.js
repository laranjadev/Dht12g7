const {
    getFirstUpperCase,
    getLowerCase,
    getElement,
    getFormat,
} = require('.');

const getHistoric = (object) => {
    let result = '';
    result += getElement({
        element : object['element'],
        id : object['id'],
        position : 'header',
    });
        result += '<div class=\"row\">';
            result += '<div class=\"col\">';
                result += getFormat({
                    content : object['title'],
                    element : 'h2',
                    letter : '.',
                    type : 'text',
                });
                result += getFormat({
                    content : object['description'],
                    element : 'p',
                    letter : '.',
                    type : 'text',
                });
            result += '</div>';
        result += '</div>';
    result += getElement({
        element : object['element'],
        id : object['id'],
        position : 'footer',
    });
    return result;
};

const getContacts = (object) => {
    let result = '';
    result += getElement({
        element : object['element'],
        id : object['id'],
        position : 'header',
    });
        result += '<div class=\"row\">';
            result += '<div class=\"col\">';
                result += getFormat({
                    content : object['title'],
                    element : 'h2',
                    letter : '.',
                    type : 'text',
                });
                result += '<ul>';
                    for (let x = 0; x < object['array']['length']; x++) {
                        result += '<li>';
                            result += getFormat({ 
                                content : object['array'][x]['business']['department'],
                                element : [
                                    'p',
                                    'b',
                                ],
                                letter : '.',
                                type : 'text',
                            });
                            result += '<ul>';
                                result += getFormat({
                                    content : object['array'][x]['contact']['email'],
                                    element : 'p',
                                    letter : '.',
                                    type : 'email',
                                });
                                result += getFormat({
                                    content : object['array'][x]['contact']['phone']['number'],
                                    element : 'p',
                                    letter : '.',
                                    type : object['array'][x]['contact']['phone']['type'],
                                });
                            result += '</ul>';
                        result += '</li>';
                    };
                result += '</ul>';
            result += '</div>';
        result += '</div>';
    result += getElement({
        element : object['element'],
        id : object['id'],
        position : 'footer',
    });
    return result;
};

const getAttendance = (object) => {
    let result = '';
    result += getElement({
        element : object['element'],
        id : object['id'],
        position : 'header',
    });
        result += getFormat({
            content : object['title'],
            element : 'h2',
            letter : '.',
            type : 'text',
        });
        result += '<div class=\"row\">';
            for (let x = 0; x < object['array']['length']; x++) {
                result += '<div class=\"col\">';
                    result += '<ul>';
                        result += '<li>';
                            result += getFormat({
                                content : object['array'][x]['business']['department'],
                                element : [
                                    'p',
                                    'b',
                                ],
                                letter : '.',
                                type : 'text',
                            });
                            result += '<ul>';
                                for (let y = 0; y < object['array'][x]['attendance']['length']; y++) {
                                    result += '<li>';
                                        result += getFormat({
                                            content : object['array'][x]['attendance'][y]['weekday'],
                                            element : [
                                                'p',
                                                'em',
                                            ],
                                            letter : '.',
                                            type : 'text',
                                        });
                                        result += '<ul>';
                                            result += '<p>';
                                                if (object['array'][x]['attendance'][y]['open']) {
                                                    if (object['array'][x]['attendance'][y]['alltime']) {
                                                        result += getFirstUpperCase('atendimento 24 horas.');
                                                    } else {
                                                        let content = '';
                                                        content += 'das ';
                                                        content += object['array'][x]['attendance'][y]['starttime'];
                                                        content += ' às ';
                                                        content += object['array'][x]['attendance'][y]['endtime'];
                                                        content += '.';
                                                        result += getLowerCase(content);
                                                    }
                                                } else {
                                                    result += getFirstUpperCase('fechado.');
                                                }
                                            result += '</p>';
                                        result += '</ul>';
                                    result += '</li>';
                                };
                            result += '</ul>';
                        result += '</li>';
                    result += '</ul>';
                result += '</div>';
            };
        result += '</div>';
    result += getElement({
        element : object['element'],
        id : object['id'],
        position : 'footer',
    });
    return result;
};





const getForm = (object) => {
    let result = '';
    result += getElement({
        element : object['element'],
        id : object['id'],
        position : 'header',
    });
        result += '<div class=\"row\">';
            result += '<div class=\"col\">';
                result += getFormat({
                    content : object['title'],
                    element : 'h2',
                    letter : '.',
                    type : 'text',
                });
                result += getFormat({
                    content : object['description'],
                    element : 'p',
                    letter : '.',
                    type : 'text',
                });
            result += '</div>';
        result += '</div>';
    result += getElement({
        element : object['element'],
        id : object['id'],
        position : 'footer',
    });
    return result;
};

const allViews = () => {
    return {
        getAttendance,
        getContacts,
        getForm,
        getHistoric,
    };
};

module.exports = {
    allViews,
};