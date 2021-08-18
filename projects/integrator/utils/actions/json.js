let {
    addJsDatabase,
    addJsonDatabase,
    getPackage,
    getFormElement,
    getFormHeader,
    getHash,
    getInputType,
    getJsDatabase,
    getJsPagination,
    getPageTitle,
    getPathPrefix,
    getScriptModule,
    getURLPath,
    getUserSession,
    isEmpty,
    isEqual,
    jsonFileReader,
    saveJsDatabase,
    getbtnTitle,
} = require('..');


var userData;

// OK!

const getIndex = (object) => {
    const Action = {
        index : (req, res, next) => {
            return res.redirect(getURLPath({
                prefix : object['prefix'],
                suffix : 'all'
            }));
        },
    }
    return Action;
};

// OK!

const getAll = (object) => {
    const Action = {
        all : (req, res, next) => {
            const amount = 2;
            const { page = 1 } = req['query'];
            const jsPaginationAttributes = {
                array : getJsDatabase(object),
                limit : amount,
                offset : page,
            };
            return res.render('menu', {
                index : getJsPagination(jsPaginationAttributes)['listPage'],
                ...getPackage(),
                ...getJsPagination(jsPaginationAttributes),
                ...getPageTitle({
                    prefix : object['prefix'],
                    suffix : 'all',
                }),
                ...getPathPrefix(object['prefix']),
                ...getScriptModule('all'),
                ...getUserSession(userData),
            });
        },
    }
    return Action;
};

// OK!

const getOn = (object) => {
    const Action = {
        on : (req, res, next) => {
            const { id } = req['params'];
            return res.render('form', {
                index : getJsDatabase(object).find((index) => {
                    return index['id'] == id;
                }),
                ...getPackage(),
                ...getbtnTitle('come back'),
                ...getFormElement({ 
                    element : object['element'],
                    type : 'view',
                }),
                ...getFormHeader({
                    prefix : object['prefix'],
                    suffix : 'on',
                    method : 'POST',
                }),
                ...getInputType(),
                ...getPageTitle({
                    prefix : object['prefix'],
                    suffix : 'on',
                }),
                ...getScriptModule('on'),
                ...getUserSession(userData),
            });
        },
    }
    return Action;
};

// OK!

const getEdit = (object) => {
    const Action = {
        edit : (req, res, next) => {
            const { id } = req['params'];
            return res.render('form', {
                index : getJsDatabase(object).find((index) => {
                    return index['id'] == id;
                }),
                ...getPackage(),
                ...getbtnTitle('edit'),
                ...getFormElement({
                    element : object['element'],
                    type : 'edit',
                }),
                ...getFormHeader({
                    prefix : object['prefix'],
                    suffix : 'edit/' + id + '?_method=PUT',
                    enctype : 'multipart/form-data',
                    method : 'POST',
                }),
                ...getInputType(),
                ...getPageTitle({
                    prefix : object['prefix'],
                    suffix : 'edit',
                }),
                ...getScriptModule('edit'),
                ...getUserSession(userData),
            });
        },
    }
    return Action;
};

const {
    check,
    validationResult,
    body,
} = require('express-validator');

// OK!

const getFormAttributes = (req, res, next, object, error) => {
    return {
        error : error ? error['errors'] : undefined,
        ...getPackage(),
        ...getbtnTitle('create'),
        ...getFormElement({
            element : object['element'],
            type : 'create',
        }),
        ...getFormHeader({
            prefix : object['prefix'],
            suffix : 'create',
            enctype : 'multipart/form-data',
            method : 'POST',
        }),
        ...getInputType(),
        ...getPageTitle({
            prefix : object['prefix'],
            suffix : 'create',
        }),
        ...getScriptModule('create'),
        ...getUserSession(userData),
    };
};

const getCreate = (object) => {
    const Action = {
        create : (req, res, next) => {
            return res.render('form', getFormAttributes(req, res, next, object));
        },
    }
    return Action;
};

// OK!

const getStore = (object) => {
    const Action = {
        store : (req, res, next) => {
            const error = validationResult(req);
            if (error.isEmpty()) {
                const { files } = req;
                const password = getHash(req['body']['password']);
                const id = !isEmpty(getJsDatabase(object)) ? getJsDatabase(object)[getJsDatabase(object)['length'] - 1]['id'] + 1 : 1;
                const package = {
                    attachment : {
                        ...req['body'],
                        id : id,
                        approved : true,
                        deleted : false,
                        disable : false,
                        picture : files['length'] ? files[0]['filename'] : '',
                        password : password,
                        confirmation : password,
                    },
                    require : [
                        ...object['require'],
                    ],
                    title : object['title'],
                }
                addJsDatabase({
                    ...package,
                });
                addJsonDatabase({
                    ...package,
                });
                return res.redirect(getURLPath({
                    prefix : object['prefix'],
                    suffix : 'edit' + '/' + id,
                }));
            } else {
                return res.render('form', getFormAttributes(req, res, next, object, error));
            };
        },
    };
    return Action;
};

// OK!

const getUpdate = (object) => {
    const Action = {
        update : (req, res, next) => {
            const { files } = req;
            const { id } = req['params'];
            let database = getJsDatabase(object);
            let index = database.find((index) => { return index['id'] == id; });
            for (let i = 0; i < Object.getOwnPropertyNames(req['body'])['length']; i++) {
                index[Object.getOwnPropertyNames(req['body'])[i]] = Object.getOwnPropertyDescriptors(req['body'])[Object.getOwnPropertyNames(req['body'])[i]]['value'];
            }
            index['picture'] = files['length'] ? files[0]['filename'] : '';
            const package = {
                content : database,
                require : [
                    ...object['require'],
                ],
                title : object['title'],
            }
            saveJsDatabase({
                ...package,
            });
            return res.redirect(getURLPath({
                prefix : object['prefix'],
                suffix : 'on/' + id,
            }));
        },
    };
    return Action;
};

// OK!

const getDestroy = (object) => {
    const Action = {
        destroy : (req, res, next) => {
            const { id } = req['params'];
            saveJsDatabase({
                content : getJsDatabase(object).filter((index) => {
                    return index['id'] != id;
                }),
                require : [
                    ...object['require'],
                ],
                title : object['title'],
            });
            return res.redirect(getURLPath({
                prefix : object['prefix'],
                suffix : 'all',
            }));
        },
    };
    return Action;
};

const getSearch = (object) => {
    const Action = {
        search : (req, res, next) => {
        },
    }
    return Action;
};

const getLogin = (object) => {
    const Action = {
        login : (req, res, next) => {
            return res.render('form', {
                ...getPackage(),
                ...getbtnTitle('login'),
                ...getFormElement({
                    element : object['element'],
                    type : 'login',
                }),
                ...getFormHeader({
                    prefix : object['prefix'],
                    suffix : 'authenticate',
                    method : 'POST',
                }),
                ...getInputType(),
                ...getPageTitle({
                    prefix : object['prefix'],
                    suffix : 'login',
                }),
                ...getScriptModule('login'),
                ...getUserSession(userData),
            });
        },
    }
    return Action;
};

const getLogout = (object) => {
    const Action = {
        logout : (req, res, next) => {
            req['session'].destroy();
            res.clearCookie();
            req.logout();
        },
    }
    return Action;
};

const getAuthenticate = (object) => {
    const Action = {
        authenticate : (req, res, next) => {
            const record = jsonFileReader([
                ...object['require'],
                object['title'] + '.json',
            ]);
            const index = record.find((index) => {
                return index['accesskey'] === req['body']['accesskey'];
            });
            if (!index) 
                return res.send('invalid user!');
            if (!isEqual({ front : req['body']['password'], back : index['password'] }))
                return res.send('invalid password!');
            delete index['password'];
            delete index['confirmation'];
            req['session']['user'] = index;
            userData = req['session']['user'];
            if (req['body']['logged'] != undefined) {
                res.cookie('id', userData['id'], {
                    maxAge : 600000,
                });
                res.cookie('accesskey', userData['accesskey'], {
                    maxAge : 600000,
                });
            }
            console.log(req.cookies);
            return res.redirect(getURLPath({
                prefix : object['prefix'],
                suffix : 'all',
            }));
        },
    }
    return Action;
};

module.exports = {
    getAll,
    getAuthenticate,
    getCreate,
    getDestroy,
    getEdit,
    getIndex,
    getLogin,
    getLogout,
    getOn,
    getSearch,
    getStore,
    getUpdate,
};