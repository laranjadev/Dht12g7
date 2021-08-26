import {
    addRemoveClasses,
    getFieldEvent,
    getFieldValidator,
    getFormErrorList,
} from './main.js';

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

import {
    itemsClasses,
} from './classes.js';
itemsClasses();

import {
    formClasses,
} from './classes.js';
formClasses();