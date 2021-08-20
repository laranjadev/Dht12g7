const config = require('../config');
const Sequelize = require('sequelize');
const { Op } = require("sequelize");
const {
    Public,
} = require('../models');
const {
    getFormElement,
    getJSFileModule,
    getURLPath,
    package,
} = require('../utils');
module.exports = {
    a : async (req, res, next) => {
        const connection = new Sequelize(config);
        const result = await connection.query('select * from publics');
        return res.send(result);
    },
    b : async (req, res, next) => {
        const connection = new Sequelize(config);
        const result = await connection.query('select * from publics', {
            type : Sequelize.QueryTypes.SELECT,
        });
        return res.send(result);
    },
    c : async (req, res, next) => {
        const { id } = req['params'];
        if (!id) {
            return res.send('You need a numeric parameter!');
        } else {
            const connection = new Sequelize(config);
            const result = await connection.query('select * from publics where id = :id', {
                replacements : {
                    id : id,
                },
                type : Sequelize.QueryTypes.SELECT,
            });
            return res.send(result);
        }
    },
    d : async (req, res, next) => {
        const { id } = req['params'];
        if (!id) {
            return res.send('You need a numeric parameter!');
        } else {
            const index = await Public.findAll();
            return res.send(index[id]);
        }
    },
    e : async (req, res, next) => {
        const index = await Public.findAll();
        return res.send(index);
    },
    f : async (req, res, next) => {
        const { id } = req['params'];
        const index = await Public.findOne({
            where : {
                id : id,
            },
        });
        return res.send({
            index : index,
        });
    },
    g : async (req, res, next) => {
        const amount = 2;
        const {
            page = 1,
        } = req['query'];
        const {
            count ,
            rows : index,
        } = await Public.findAndCountAll({
            limit : amount,
            offset : Number((page - 1) * amount),
        });
        return res.send({
            index : index,
        });
    },
    h : async (req, res, next) => {
        const count = await Public.count();
        const min = await Public.min('id');
        const max = await Public.max('id');
        const sum = await Public.sum('id');
        const mean = await Public.sum('id') / await Public.count();
        return res.send({
            index : {
                count : count,
                min : min,
                max : max,
                sum : sum,
                mean : mean,
            }
        });
    },
    i : async (req, res, next) => {
        const amount = 2;
        const {
            key = '',
        } = req['query'];
        // http://localhost:8888/lab/i?key=ana
        const index = await Public.findAll({
            where : {
                title : {
                    [Op.like] : `%${ key }%`
                },
            },
            order : [
                ['title', 'ASC']
            ],
            limit : amount,
            offset : amount,
        });
        return res.send(index);
    },
    j : async (req, res, next) => {
        const pageName = '_j';        
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
            ...getFormElement({
                element : pageName,
                type : 'sendEmail',
            }),
        });
    },
    k : async (req, res, next) => {
        const pageName = '_k';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
    l : async (req, res, next) => {
        const pageName = '_l';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
    m : async (req, res, next) => {
        const pageName = '_m';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
    n : async (req, res, next) => {
        const pageName = '_n';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
    o : async (req, res, next) => {
        const pageName = '_o';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
    p : async (req, res, next) => {
        const pageName = '_p';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
    q : async (req, res, next) => {
        const pageName = '_q';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
    r : async (req, res, next) => {
        const {
            key = '',
        } = req['query'];
        const pageName = '_r';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
            searchAction : getURLPath({
                prefix : '/lab/',
                suffix : 'r',
            }),
        });
    },
    s : async (req, res, next) => {
        const pageName = '_s';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
    t : async (req, res, next) => {
        const pageName = '_t';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
    u : async (req, res, next) => {
        const pageName = '_u';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
    v : async (req, res, next) => {
        const pageName = '_v';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
    w : async (req, res, next) => {
        const pageName = '_w';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
    x : async (req, res, next) => {
        const pageName = '_x';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
    y : async (req, res, next) => {
        const pageName = '_y';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
    z : async (req, res, next) => {
        const pageName = '_z';
        return res.render(pageName, {
            ...package(),
            ...getJSFileModule({
                content : pageName,
                variable : 'isPageJSFile',
            }),
        });
    },
};