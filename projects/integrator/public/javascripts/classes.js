import {
    addRemoveClasses,
    getCEPCheck,
    getCNPJMask,
    getFormErrorList,
    getFieldValidator,
    getValidation,
} from './main.js';

export let itemsClasses = (object) => {
    let firstColor = '-' + (getValidation(object['firstColor']) ? object['firstColor'] : 'light');
    let secondColor = '-' + (getValidation(object['secondColor']) ? object['secondColor'] : 'dark'); 
    let border = getValidation(object['border']) ? [ 'border', 'border' + secondColor ] : []; 
    addRemoveClasses({
        elementList : [
            '#first-item',
            '#second-item',
        ],
        classeList : [
            'mb-3',
            'p-3',
            'rounded-1',
            'shadow-sm',
            ...border,
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#first-item',
        ],
        classeList : [
            'bg' + firstColor,
            'text' + secondColor,
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#second-item',
        ],
        classeList : [
            'bg' + secondColor,
            'text' + firstColor,
        ],
        method : 'add',
    });
};

export let formClasses = () => {
    getCEPCheck({
        element : '#cep',
    });
    getCNPJMask({
        element : '#cnpj',
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

    getFormErrorList({
        messageTarget : '#error-list',
    });
    addRemoveClasses({
        elementList : [
            '#error-list',
        ],
        classeList : [            
            'alert-light',
            'alert',
            'border-secondary',
            'border',
            'mb-3',
            'rounded-1',
            'shadow-sm',
        ],
        method : 'add',
    });

    getFieldValidator({
        messageTarget : '#alert',
    });
    addRemoveClasses({
        elementList : [
            '#alert',
        ],
        classeList : [
            'alert-danger',
            'alert',
            'mb-3',
        ],
        method : 'add',
    });
};

export let paginationClasses = (object) => {
    let position = getValidation(object['position'])
    ? object['position'] : 'center';
    addRemoveClasses({
        elementList : [
            'nav#pagination',
        ],
        classeList : [
            'd-flex',
            'justify-content-' + position,
            'mb-3',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            'nav#pagination ul',
        ],
        classeList : [
            'align-self-' + position,
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
};

const imageClasses = [
    'img-fluid',
    'img-thumbnail',
    'rounded',
    'shadow-sm',
    'w-100',
];

export let headerClasses = (object) => {
    let n = 2;
    let imgcol = 'col' + '-' + n;
    let txtcol = 'col' + '-' + (12 - n);
    addRemoveClasses({
        elementList : [
            '#header',
        ],
        classeList : [
            'mb-3',
            'w-100',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#header>#row',
        ],
        classeList : [
            'row',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#header>#row>#header-image',
        ],
        classeList : [
            'align-items-center',
            'd-flex',
            imgcol,
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#header>#row>#header-image>img',
        ],
        classeList : [
            ...imageClasses,
            'align-self-center',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#header>#row>#header-content',
        ],
        classeList : [
            txtcol,
        ],
        method : 'add',
    });
};

export let accordionClasses = (object) => {
    headerClasses();
    addRemoveClasses({
        elementList : [
            'ul',
            'ol',
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
};
export let listgroupClasses = (object) => {
    addRemoveClasses({
        elementList : [
            '#body>#row',
        ],
        classeList : [
            'row',
            'gx-3',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#body>#row>#col',
        ],
        classeList : [
            'col-lg-4',
            'col-sm-6',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#body>#row>#col>#list-group>a',
        ],
        classeList : [
            'list-group-item',
            'list-group-item-action',
            'flex-column',
            'rounded',
            'shadow-sm',
            'p-3',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#body>#row>#col>#list-group>a>img',
        ],
        classeList : [
            ...imageClasses,
            'mb-3',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#body>#row>#col',
            '#body>#row>#col>#list-group>a>p',
        ],
        classeList : [
            'mb-3',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#body>#row>#col>#list-group>a>ul',
        ],
        classeList : [
            'list-group',
            'list-group-flush',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#body>#row>#col>#list-group>a>ul>li',
        ],
        classeList : [
            'list-group-item',
        ],
        method : 'add',
    });
};

export let galleryClasses = (object) => {
    addRemoveClasses({
        elementList : [
            '#body #row',
        ],
        classeList : [
            'gx-3',
            'row',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#body #col',
        ],
        classeList : [
            'col-lg-4',
            'col-sm-6',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#body #col',
            '#body #col #title',
            '#body #col #image',
        ],
        classeList : [
            'mb-3',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#body #col #image a',
        ],
        classeList : [
            'box',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#body #col #image a img',
        ],
        classeList : [
            ...imageClasses,
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#body #col #image #caption',
        ],
        classeList : [
            'bg-danger',
            'caption',
            'text-white',
            'px-5',
        ],
        method : 'add',
    });
};

export let quickviewClasses = (object) => {
    let isClass = '';
    isClass += 'btn';
    isClass += getValidation(object['style']) ? '-' + object['style'] : '';
    isClass += getValidation(object['color']) ? '-' + object['color'] : '-' + 'dark';
    let position = getValidation(object['position']) ? object['position'] : 'center';
    addRemoveClasses({
        elementList : [
            '#quick-view',
        ],
        classeList : [
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#quick-view #row',
        ],
        classeList : [
            'row',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#quick-view #col',
        ],
        classeList : [
            'd-flex',
            'justify-content-' + position,
            'mb-3',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#quick-view #menu',
        ],
        classeList : [
            'align-self-' + position,
            'btn-group',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#quick-view #menu a',
        ],
        classeList : [
            'btn',
            isClass,
        ],
        method : 'add',
    });
};

export let navbarClasses = () => {
    addRemoveClasses({
        elementList : [
            'nav#navbar',
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
            '#search-form',
        ],
        classeList : [
            'd-flex',
        ],
        method : 'add',
    });
};

export let titleClasses = () => {
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
};