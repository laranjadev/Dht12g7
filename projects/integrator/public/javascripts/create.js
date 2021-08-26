import {
    addRemoveClasses,
    getCEPCheck,
    getCNPJMask,
    getFieldEvent,
    getFieldValidator,
    getFormErrorList,
} from './main.js';

// 

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

// 

addRemoveClasses({
    elementList : [
        '#dark-item',
        '#light-item',
    ],
    classeList : [
        'mb-3',
        'p-3',
        'rounded',
        'shadow-sm',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#light-item',
    ],
    classeList : [
        'bg-light',
        'text-dark',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#dark-item',
    ],
    classeList : [
        'bg-dark',
        'text-light',
    ],
    method : 'add',
});

// 

getCEPCheck({
    element : '#cep',
});

getCNPJMask({
    element : '#cnpj',
});

// 

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

// 

addRemoveClasses({
    elementList : [
        '#row',
    ],
    classeList : [
        'row',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#col',
    ],
    classeList : [
        'col',
        'd-flex',
        'justify-content-end',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#quick-menu',
    ],
    classeList : [
        'align-self-end',
        'btn-group',
        'mb-3',
    ],
    method : 'add',
});