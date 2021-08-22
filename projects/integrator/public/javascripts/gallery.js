import {
    addRemoveClasses,
} from './main.js';

addRemoveClasses({
    elementList : [
        '#row',
    ],
    classeList : [
        'gx-3',
        'row',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#gallery-title',
    ],
    classeList : [
        'col',
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#gallery-image',
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
        '#gallery-image a',
    ],
    classeList : [
        'box',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#gallery-image a img',
    ],
    classeList : [
        'img-fluid',
        'img-thumbnail',
        'rounded',
        'shadow-sm',
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
        'container-fluid',
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