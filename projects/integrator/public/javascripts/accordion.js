import {
    addRemoveClasses,
} from './main.js';

addRemoveClasses({
    elementList : [
        'ul',
        'ol',
    ],
    classeList : [
        'ps-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'li p',
    ],
    classeList : [
        'mb-3',
    ],
    method : 'add',
});