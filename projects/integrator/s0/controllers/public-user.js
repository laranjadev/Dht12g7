const {
    Category,
    Event,
    Order,
    Product,
    Public,
    Service,
} = require('../models');
let {
    getControllers,
} = require('../utils/controllers/database/public');
let {
    isThere,
    urlJoin,
} = require('../utils');
const contentFilePath = [
    'bulkmakers',
    'public.js',
];
module.exports = {
    ...getControllers({
        element : 'public',
        modelName : Public,
        includeAlias : 'product',
        includeName : Product,
        prefix : 'public-user',
        ...isThere(contentFilePath) ? {
            bulkMaker : require(urlJoin([
                '..',
                ...contentFilePath,
            ]))
        } : {
        },
    }),
};