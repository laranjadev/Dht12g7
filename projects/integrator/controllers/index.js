const {
    getJSFileModule,
    package,
} = require('../utils');

const viewActions = (pageName) => {
    const Action = {
        [pageName] : (req, res, next) => {
            return res.render(pageName, {
                pageTitle : pageName,
                ...getJSFileModule({
                    content : pageName,
                    variable : 'isPageJSFile',
                }),
                ...package(),
            });
        },
    };
    return Action;
};

const Action = {
    ...viewActions('index'),
    ...viewActions('accordion'),
    ...viewActions('maps'),
    ...viewActions('regulation'),
    ...viewActions('carousel'),
};

module.exports = Action;