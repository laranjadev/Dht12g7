import {
    colorGenerator,
    createNewElement,
    getID,
    getRomanNumber,
} from './main.js';

createNewElement({
    elementAriaLabel : '',
    elementAriaDescribedby : '',
    elementClasses : [
        'input-group',
        'mb-3',
    ],
    elementContent : '',
    childElement : 'div',
    fatherElement : '#content',
    elementID : 'wrap',
    elementName : '',
    elementPlaceholder : '',
    elementStyle : [
    ],
    elementType : '',
});

createNewElement({
    elementAriaLabel : '',
    elementAriaDescribedby : '',
    elementClasses : [
        'form-control',
    ],
    elementContent : '',
    childElement : 'input',
    fatherElement : '#wrap',
    elementID : 'input-item',
    elementName : 'input-item',
    elementPlaceholder : 'Enter your text',
    elementStyle : [
    ],
    elementType : 'text',
});

createNewElement({
    elementAriaLabel : '',
    elementAriaDescribedby : '',
    elementClasses : [
        'btn-outline-secondary',
        'btn',
    ],
    elementContent : 'add',
    childElement : 'button',
    fatherElement : '#wrap',
    elementID : 'add-button',
    elementName : 'add-button',
    elementPlaceholder : '',
    elementStyle : [
    ],
    elementType : 'submit',
});

createNewElement({
    elementAriaLabel : '',
    elementAriaDescribedby : '',
    elementClasses : [
        'list-group',
        'mb-3',
    ],
    elementContent : '',
    childElement : 'ul',
    fatherElement : '#content',
    elementID : 'ul',
    elementName : '',
    elementPlaceholder : '',
    elementStyle : [
    ],
    elementType : '',
});

window.addEventListener('load', (event) => {
    let number = 0;
    getID('add-button').addEventListener('click', (event) => {
        if (getID('input-item')['value']) {
            number++;
            let messageContent = '';
            messageContent += number;
            messageContent += ') ';
            messageContent += getID('input-item')['value'];
            createNewElement({
                elementAriaLabel : '',
                elementAriaDescribedby : '',
                elementClasses : [
                    'list-group-item',
                    'mb-3',
                    'p-3',
                    'shadow-sm',
                ],
                elementContent : '',
                childElement : 'li',
                fatherElement : '#ul',
                elementID : 'li' + getRomanNumber(number),
                elementName : '',
                elementPlaceholder : '',
                elementStyle : [
                    [ 'backgroundColor', colorGenerator()['color'] ],
                ],
                elementType : '',
            });
            createNewElement({
                elementAriaLabel : '',
                elementAriaDescribedby : '',
                elementClasses : [
                ],
                elementContent : messageContent,
                childElement : 'p',
                fatherElement : '#li' + getRomanNumber(number),
                elementID : '',
                elementName : '',
                elementPlaceholder : '',
                elementStyle : [
                    [ 'color', colorGenerator()['color'] ],
                ],
                elementType : '',
            });
            getID('input-item')['value'] = '';
            getID('input-item').focus();
        } else {
            getID('input-item').focus();
        }
    });
});