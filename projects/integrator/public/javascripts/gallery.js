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
        '#thumbnail',
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
        '#thumbnail #image a',
    ],
    classeList : [
        'box',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#thumbnail #image a img',
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
        '#thumbnail #title',
        '#thumbnail #image',
    ],
    classeList : [
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#caption',
    ],
    classeList : [
        'caption',
        'px-5',
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
        'px-3',
        'rounded',
        'shadow-sm',
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

window.addEventListener('DOMContentLoaded', () => {
    new SimpleLightbox({
        elements : 'a.box',
    });
});