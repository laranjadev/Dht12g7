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
    listgroupClasses,
} from './classes.js';

listgroupClasses();

window.addEventListener('DOMContentLoaded', () => {
    new SimpleLightbox({
        elements : 'a.light-box',
    });
});