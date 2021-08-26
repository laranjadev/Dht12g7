import {
    addRemoveClasses,
    getCEPCheck,
    getCNPJMask,
} from './main.js';

export let itemsClasses = (object) => {
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
    //         'bg-light',
    //         'p-3',
    //         'rounded',
    //         'shadow-sm',
    //     ],
    //     method : 'add',
    // });
};

export let formClasses = () => {
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

    getCEPCheck({
        element : '#cep',
    });
    
    getCNPJMask({
        element : '#cnpj',
    });
}

export let paginationClasses = () => {
    addRemoveClasses({
        elementList : [
            'nav#pagination',
        ],
        classeList : [
            'd-flex',
            'justify-content-center',
            'mb-3',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            'nav#pagination ul',
        ],
        classeList : [
            'align-self-center',
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

export let accordionClasses = (object) => {
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

export let viewQuickClasses = (object) => {
    let isPosition = object['position'] ? object['position'] : 'center';
    addRemoveClasses({
        elementList : [
            '#view-quick #row',
        ],
        classeList : [
            'row',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#view-quick #col',
        ],
        classeList : [
            'col',
            'd-flex',
            'justify-content-' + isPosition,
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#view-quick #menu',
        ],
        classeList : [
            'align-self-' + isPosition,
            'btn-group',
            'mb-3',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#view-quick #menu a',
        ],
        classeList : [
            'btn',
            'btn-outline-dark',
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




