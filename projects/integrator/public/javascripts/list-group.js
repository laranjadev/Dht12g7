import {
    addRemoveClasses,
} from './main.js';

addRemoveClasses({
    elementList : [
        '#header-row',
    ],
    classeList : [
        'row',
        'd-flex',
        'justify-content-center',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#header-col',
    ],
    classeList : [
        'col',
        'mb-3',
    ],
    method : 'add',
});

// 

addRemoveClasses({
    elementList : [
        '#body #row',
    ],
    classeList : [
        'gx-3',
        'row',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#body #col',
    ],
    classeList : [
        'col-lg-4',
        'col-sm-6',
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#body #list-group a',
    ],
    classeList : [
        'list-group-item',
        'list-group-item-action',
        'flex-column',
        'rounded',
        'shadow-sm',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#body #list-group ul',
    ],
    classeList : [
        'list-group',
        'list-group-flush',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#body #list-group ul li',
    ],
    classeList : [
        'list-group-item',
    ],
    method : 'add',
});

import {
    itemsClasses,
} from './classes.js';
itemsClasses();

import {
    viewQuickClasses,
} from './classes.js';
viewQuickClasses({
    position : 'center',
});