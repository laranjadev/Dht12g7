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
        '#gallery',
    ],
    classeList : [
        'gx-3',
        'row',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#gallery #thumbnail',
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
        '#gallery #thumbnail #image a',
    ],
    classeList : [
        'box',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#gallery #thumbnail #image a img',
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
        '#gallery #thumbnail #title',
        '#gallery #thumbnail #image',
    ],
    classeList : [
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#gallery #thumbnail #image #caption',
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