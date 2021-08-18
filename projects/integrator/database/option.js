const {
    objectCreator,
    arrayCreator,
    getSalaryRange,
    jsonFileReader,
} = require('../utils');
let description = '';
const number = 10, title = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.';
for (let i = 0; i < number; i++) {
    description += 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' + ' ';
    description += 'Tempora, cumque voluptatum nemo commodi veniam iste saepe vitae odit amet quisquam totam!' + ' ';
    description += 'Est dolorum totam sequi officiis eaque consequatur optio necessitatibus!';
    description += i < number ? ' ' : '';
};
const objectList = {};
const objectNames = [ 'boolean', 'email', 'generous', 'level', 'status', 'uf' ];
const objectFilePath = [ 'database', 'json' ];
for (let i = 0; i < objectNames['length']; i++)
    objectList[objectNames[i]] = objectCreator(jsonFileReader([ ...objectFilePath, objectNames[i] + '.json' ]));
const lengthList = {};
const lengthFilePath = [ 'database', 'json', 'lengths.json' ];
const lengthNames = Object.getOwnPropertyNames(jsonFileReader(lengthFilePath));
for (let i = 0; i < lengthNames['length']; i++)
    lengthList[lengthNames[i]] = jsonFileReader(lengthFilePath)[lengthNames[i]]['length'];
const getMultiArray = (object) => {
    const result = {};
    for (let i = 0; i < object['name']['length']; i++)
        result[object['name'][i]] = objectCreator(arrayCreator({
            name : object['name'][i],
            path : object['path'],
        }));
    return result;
}
module.exports = {
    ...objectList,
    inputType : jsonFileReader([
        'database',
        'json',
        'input-type.json',
    ]),
    male : jsonFileReader([
        'database',
        'json',
        'name',
        'first',
        'male.json',
    ]),
    female : jsonFileReader([
        'database',
        'json',
        'name',
        'first',
        'female.json',
    ]),
    last : jsonFileReader([
        'database',
        'json',
        'name',
        'last.json',
    ]),
    salary : getSalaryRange({
        end : 10,
        gap : 1000,
    }),
    lorem : {
        title : title,
        description : description,
    },
    lengths : {
        ...lengthList,
    },
    // 'Administração, negócios e serviços',
    // 'Artes e Design',
    // 'Ciências Biológicas e da Terra',
    // 'Análise e Desenvolvimento de Sistemas',
    // 'Ciências Sociais e Humanas',
    // 'Comunicação e Informação',
    // 'Engenharia e Produção',
    // 'Saúde e Bem-estar',
    ...getMultiArray({
        name : [
            'countrie',
            'profession',
        ],
        path : [
            'database',
            'json',
        ],
    }),
};