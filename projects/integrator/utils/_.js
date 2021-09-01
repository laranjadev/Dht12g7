result += getValidation(object['array'][i]['items'][x]['description']) ? textSetupIII({
    element : {
        alt : '',
        class : [],
        href : '',
        id : '',
        name : '',
        src : '',
        tag : [ 'h5' ],
        title : '',
    },
    content : {
        text : object['array'][i]['items'][x]['description'],
        spacer : '.',
        index : '',
        before : '',
        after : '',
    },
    wrap : {
        element : {
            alt : '',
            class : [
                'col-' + columnText,
                getValidation(object['array'][i]['items'][x]['items']) ? 'mb-3' : '',
                'px-3',
            ],
            href : '',
            id : '',
            name : '',
            src : '',
            tag : 'div',
            title : '',
        },
    }
}) : '';