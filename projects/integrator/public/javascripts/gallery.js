import {
    addRemoveClasses,
} from './main.js';

addRemoveClasses({
    elementList : [
        '#portfolio #gallery',
    ],
    classeList : [
        'container-fluid',
        'p-0',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#portfolio #gallery #row',
    ],
    classeList : [
        'row',
        'g-0',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#portfolio #gallery #row #col',
    ],
    classeList : [
        'col-lg-4',
        'col-sm-6',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#portfolio #gallery #row #col a',
    ],
    classeList : [
        'box',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#portfolio #gallery #row #col a img',
    ],
    classeList : [
        'img-fluid',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#portfolio #gallery #row #col a #caption',
    ],
    classeList : [
        'caption',
    ],
    method : 'add',
});

window.addEventListener('DOMContentLoaded', () => {
    new SimpleLightbox({
        elements : '#portfolio a.box',
    });
});