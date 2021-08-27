import {
    addRemoveClasses,
    getCEPCheck,
    getCNPJMask,
    getFormErrorList,
    getFieldValidator,
    getFieldEvent,
    getValidation,
} from './main.js';

export let itemsClasses = (object) => {
    let isFirstColor = getValidation(object['firstColor']) ? '-' + object['firstColor'] : '-' + 'light';
    let isSecondColor = getValidation(object['secondColor']) ? '-' + object['secondColor'] : '-' + 'dark'; 
    let isBorder = getValidation(object['border']) ? [ 'border', 'border' + isSecondColor ] : []; 
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
            ...isBorder,
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#second-item',
        ],
        classeList : [
            'bg' + isFirstColor,
            'text' + isSecondColor,
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#first-item',
        ],
        classeList : [
            'bg' + isSecondColor,
            'text' + isFirstColor,
        ],
        method : 'add',
    });
    // addRemoveClasses({
    //     elementList : [
    //         '#first-item img',
    //         '#second-item img',
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

    getFormErrorList({
        messageTarget : '#error-list',
    });

    getFieldValidator({
        messageTarget : '#alert-danger',
    });

    getFieldEvent({
        color : '#000',
        background : '#FFF',
        elementList : [
            '.form-control',
        ],
    });

    addRemoveClasses({
        elementList : [
            '#alert-danger',
            '#error-list',
        ],
        classeList : [
            'alert',
            'alert-danger',
            'form-group',
            'mb-3',
        ],
        method : 'add',
    });
};

export let paginationClasses = (object) => {
    let isMenuPosition = getValidation(object['menuPosition']) ? object['menuPosition'] : 'center';
    addRemoveClasses({
        elementList : [
            'nav#pagination',
        ],
        classeList : [
            'd-flex',
            'justify-content-' + isMenuPosition,
            'mb-3',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            'nav#pagination ul',
        ],
        classeList : [
            'align-self-' + isMenuPosition,
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

export let quickViewClasses = (object) => {
    let isBTNClass = '';
    isBTNClass += 'btn';
    isBTNClass += getValidation(object['btnStyle']) ? '-' + object['btnStyle'] : '';
    isBTNClass += getValidation(object['btnColor']) ? '-' + object['btnColor'] : '-' + 'dark';
    let isMenuPosition = getValidation(object['menuPosition']) ? object['menuPosition'] : 'center';
    addRemoveClasses({
        elementList : [
            '#quick-view #col',
        ],
        classeList : [
            'd-flex',
            'justify-content-' + isMenuPosition,
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#quick-view #menu',
        ],
        classeList : [
            'align-self-' + isMenuPosition,
            'btn-group',
            'mb-3',
        ],
        method : 'add',
    });
    addRemoveClasses({
        elementList : [
            '#quick-view #menu a',
        ],
        classeList : [
            'btn',
            isBTNClass,
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