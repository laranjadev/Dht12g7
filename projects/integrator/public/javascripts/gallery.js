import {
    addRemoveClasses,
} from './main.js';

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

// 

addRemoveClasses({
    elementList : [
        '#gallery-row',
    ],
    classeList : [
        'row',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#gallery-col',
    ],
    classeList : [
        'col',
        'd-flex',
        'justify-content-center',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#gallery-quick-menu',
    ],
    classeList : [
        'align-self-center',
        'btn-group',
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#gallery-quick-menu a',
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
        '#gallery-header',
    ],
    classeList : [
        'mb-3',
        'row',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#gallery-portfolio',
    ],
    classeList : [
        'gx-3',
        'row',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#gallery-portfolio-thumbnail',
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
        '#gallery-portfolio-thumbnail-image a',
    ],
    classeList : [
        'box',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#gallery-portfolio-thumbnail-image a img',
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
        '#gallery-portfolio-thumbnail-title',
        '#gallery-portfolio-thumbnail-image',
    ],
    classeList : [
        'mb-3',
    ],
    method : 'add',
});

addRemoveClasses({
    elementList : [
        '#gallery-portfolio-thumbnail-image #caption',
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