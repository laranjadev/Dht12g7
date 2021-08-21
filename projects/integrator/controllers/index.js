const {
    getPJSMFile,
    package,
} = require('../utils');

const viewActions = (pageName) => {
    const Action = {
        [pageName] : (req, res, next) => {
            return res.render(pageName, {
                pageTitle : pageName,
                ...getPJSMFile({
                    content : pageName,
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