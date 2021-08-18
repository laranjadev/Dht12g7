import {
    addRemoveClasses,
} from './main.js';

addRemoveClasses({
    elementList : [
        '#navbar',
    ],
    classeList : [
        'bg-white',
        'fixed-top',
        'rounded',
        'shadow-sm',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#container',
    ],
    classeList : [
        'bg-white',
        'container',
        'mb-5',
        'p-5',
        'rounded',
        'shadow-sm',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'html',
        'body'
    ],
    classeList : [
        'bg-light',
        'bg-gradient',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'ul',
        'li',
        'ol'
    ],
    classeList : [
        'list-unstyled',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'ul ul'
    ],
    classeList : [
        'list-unstyled',
    ],
    method : 'remove',
});

addRemoveClasses({
    elementList : [
        'ul ul'
    ],
    classeList : [
        'pl-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'li',
        'ol'
    ],
    classeList : [
        'mb-3',
    ],
    method : 'add',
});

for (let i = 1; i < 6; i++)
    addRemoveClasses({
        elementList : [
            ('h' + i)
        ],
        classeList : [
            ('display-' + i),
        ],
        method : 'add',
    });