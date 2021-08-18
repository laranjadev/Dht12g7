import {
    addRemoveClasses,
    getCEPCheck,
    getCNPJMask,
    getFieldEvent,
    getFieldValidator,
    getFormErrorList,
} from './main.js';

addRemoveClasses({
    elementList : [
        '#light-item',
    ],
    classeList : [
        'bg-light',
        'mb-3',
        'p-3',
        'rounded',
        'shadow-sm',
        'text-dark',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#content h6',
    ],
    classeList : [
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'input',
        'select',
        'textarea',
    ],
    classeList : [
        'form-control',
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#alert-danger',
        '#error-list',
    ],
    classeList : [
        'alert',
        'alert-danger',
        'form-group',
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#footer-menu',
    ],
    classeList : [
        'mb-3',
        'right',
    ],
    method : 'add',
});

getCEPCheck({
    element : '#cep',
});

getCNPJMask({
    element : '#cnpj',
});

getFieldEvent({
    color : '#000',
    background : '#FFF',
    elementList : [
        '.form-control',
    ],
});

getFieldValidator({
    messageTarget : '#alert-danger',
});

getFormErrorList({
    messageTarget : '#error-list',
});