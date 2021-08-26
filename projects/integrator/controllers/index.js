const {
    getPCSSFile,
    getPJSMFile,
    packages,
} = require('../utils');

const viewActions = (pageName) => {
    const Action = {
        [ pageName ] : (req, res, next) => {
            return res.render(pageName, {
                pageTitle : pageName,
                ...getPCSSFile({
                    content : pageName,
                }),
                ...getPJSMFile({
                    content : pageName,
                }),
                ...packages(),
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
    ...viewActions('list-group'),
};

module.exports = Action;