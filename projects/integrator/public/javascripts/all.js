import {
    addRemoveClasses,
} from './main.js';

// 

addRemoveClasses({
    elementList : [
        '#search-form',
    ],
    classeList : [
        'd-flex',
    ],
    method : 'add',
});

//

addRemoveClasses({
    elementList : [
        'nav#pagination',
    ],
    classeList : [
        'd-flex',
        'justify-content-center',
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'nav#pagination ul',
    ],
    classeList : [
        'align-self-center',
        'pagination',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'nav#pagination ul',
    ],
    classeList : [
        'ps-3',
    ],
    method : 'remove',
});

addRemoveClasses({
    elementList : [
        'nav#pagination ul li',
    ],
    classeList : [
        'page-item',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'nav#pagination ul li a',
    ],
    classeList : [
        'page-link',
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

// addRemoveClasses({
//     elementList : [
//         '#dark-item img',
//         '#light-item img',
//     ],
//     classeList : [
//         'col-md-4',
//         'float-md-start',
//         'me-3',
//         'bg-white',
//         'p-3',
//         'rounded',
//         'shadow-sm',
//     ],
//     method : 'add',
// });

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