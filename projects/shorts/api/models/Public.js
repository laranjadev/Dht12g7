const {
    getFirstUpperCase,
    getModelPublic,
    getPlural,
} = require('../utils');
const allName = 'public';
module.exports = (sequelize, DataType) => {
	const Public = sequelize.define(getFirstUpperCase(allName), {
        ...getModelPublic(DataType),
    },
    {
        tableName : getPlural(allName),
        timestamps : true,
    });
	return Public;
};