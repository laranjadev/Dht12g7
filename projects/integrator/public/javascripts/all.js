import {
    addRemoveClasses,
} from './main.js';

addRemoveClasses({
    elementList : [
        '#search-form',
    ],
    classeList : [
        'd-flex',
    ],
    method : 'add',
});

import {
    paginationClasses,
} from './classes.js';
paginationClasses();

import {
    itemsClasses,
} from './classes.js';
itemsClasses();

import {
    viewQuickClasses,
} from './classes.js';
viewQuickClasses({
    position : 'end',
});