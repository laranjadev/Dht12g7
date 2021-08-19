const {
    package,
    getScriptModule,
} = require('../utils');

const viewActions = (pageName) => {
    const Action = {
        [pageName] : (req, res, next) => {
            return res.render(pageName, {
                pageTitle : pageName,
                ...getScriptModule(pageName),
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
};

module.exports = Action;