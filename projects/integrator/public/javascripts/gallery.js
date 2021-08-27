import {
    quickViewClasses,
} from './classes.js';
quickViewClasses({
    btnColor : 'dark',
    btnStyle : 'outline',
    menuPosition : 'center',
});

import {
    addRemoveClasses,
} from './main.js';
addRemoveClasses({
    elementList : [
        '#header',
    ],
    classeList : [
        'mb-3',
        'row',
    ],
    method : 'add',
});
addRemoveClasses({
    elementList : [
        '#portfolio',
    ],
    classeList : [
        'gx-3',
        'row',
    ],
    method : 'add',
});
addRemoveClasses({
    elementList : [
        '#portfolio #thumbnail',
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
        '#portfolio #thumbnail #image a',
    ],
    classeList : [
        'box',
    ],
    method : 'add',
});
addRemoveClasses({
    elementList : [
        '#portfolio #thumbnail #image a img',
    ],
    classeList : [
        'img-thumbnail',
        'rounded',
        'shadow-sm',
    ],
    method : 'add',
});
addRemoveClasses({
    elementList : [
        '#portfolio #thumbnail #title',
        '#portfolio #thumbnail #image',
    ],
    classeList : [
        'mb-3',
    ],
    method : 'add',
});
addRemoveClasses({
    elementList : [
        '#portfolio #thumbnail #image #caption',
    ],
    classeList : [
        'caption',
        'px-5',
    ],
    method : 'add',
});

window.addEventListener('DOMContentLoaded', () => {
    new SimpleLightbox({
        elements : 'a.box',
    });
});