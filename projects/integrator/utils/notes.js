result += startTagName([
    {
        tag : 'h1',
        param : {
            alt : '',
            class : [],
            href : '',
            id : '',
            name : '',
            src : '',
            style : {},
            title : '',
        },
    },
]);
result += getContainer({
    before : '1',
    index : '2',
    content : '3',
    after : '4',
    spacer : '5',
});
result += endTagName([
    { tag : 'h1' },
]);