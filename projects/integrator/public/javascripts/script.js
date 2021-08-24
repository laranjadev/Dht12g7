import {
    getTimer,
    getSignature,
    addRemoveClasses,
    getCEPCheck,
    getCNPJMask,
    getFieldEvent,
    getFieldValidator,
    getFormErrorList,
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
        '#quick-menu',
    ],
    classeList : [
        'btn-group',
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#quick-menu a',
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
        'bg-white',
        'container-fluid',
        'mb-3',
        'navbar-expand-lg',
        'navbar-light',
        'navbar',
        'p-3',
        'rounded',
        'shadow-sm',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'ul',
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

for (let i = 1; i < 6; i++) {
    addRemoveClasses({
        elementList : [
            'h' + i,
        ],
        classeList : [
            'display-' + i,
        ],
        method : 'add',
    });
};

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

addRemoveClasses({
    elementList : [
        'nav#pagination',
    ],
    classeList : [
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        'nav#pagination ul',
    ],
    classeList : [
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