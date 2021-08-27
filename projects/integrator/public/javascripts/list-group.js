import {
    quickViewClasses,
} from './classes.js';
quickViewClasses({
    color : 'dark',
    position : 'center',
    style : 'outline',
});

import {
    addRemoveClasses,
} from './main.js';
addRemoveClasses({
    elementList : [
        '#body #row',
    ],
    classeList : [
        'gx-3',
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