const index = require('axios').create({
    baseURL : 'http://viacep.com.br/ws/',
    timeout : 4000,
}).get(object['array'][x]['array'][y]['cep'] + '/json').then((result) => {
    return result['data'];
}).then((result) => {
    console.log(result['data']);
}).catch((error) => {
    console.log(error);
});
console.log(index);