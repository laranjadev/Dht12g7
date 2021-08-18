import {
    getTimer,
    getSignature,
    addRemoveClasses,
} from './main.js';

addRemoveClasses({
    elementList : [
        '#container',
    ],
    classeList : [
        'container',
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#search-form',
    ],
    classeList : [
        'd-flex',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'footer'
    ],
    classeList : [
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#content'
    ],
    classeList : [
        'bg-white',
        'mb-3',
        'pt-3',
        'px-3',
        'rounded',
        'shadow-sm',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#navbar',
    ],
    classeList : [
        'container-fluid',
        'navbar',
        'navbar-expand-lg',
        'navbar-light',
        'bg-white',
        'mb-3',
        'p-3',
        'rounded',
        'shadow-sm',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'button',
    ],
    classeList : [
        'btn',
        'btn-outline-dark',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'body',
        'html',
    ],
    classeList : [
        'bg-light',
    ],
    method : 'add',
});

getSignature({
    element : 'signature',
    name : 'laranja dev br',
    email : 'far820320@gmail.com',
    phone : '+55 (11) 9 4005 8153',
});

getTimer({
    element : 'timer',
    number : 1,
    seconds : 1,
});