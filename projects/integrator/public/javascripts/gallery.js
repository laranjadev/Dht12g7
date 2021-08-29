import {
    quickviewClasses,
} from './classes.js';

quickviewClasses({
    color : 'dark',
    position : 'center',
    style : 'outline',
});

import {
    headerClasses,
} from './classes.js';

headerClasses();

import {
    galleryClasses,
} from './classes.js';

galleryClasses();

window.addEventListener('DOMContentLoaded', () => {
    new SimpleLightbox({
        elements : 'a.box',
    });
});