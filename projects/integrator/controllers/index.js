const {
    getPCSSFile,
    getPJSMFile,
    package,
} = require('../utils');

const viewActions = (pageName) => {
    const Action = {
        [pageName] : (req, res, next) => {
            return res.render(pageName, {
                pageTitle : pageName,
                ...getPCSSFile({
                    content : pageName,
                }),
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
    ...viewActions('gallery'),
};

module.exports = Action;