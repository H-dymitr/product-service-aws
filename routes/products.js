const readFile = require('../utils/read-file');

module.exports.get = async (event) => {
    const products = await readFile('data/products.json');
    const productId = event.pathParameters.id;
    const product = JSON.parse(products).find(product => product.id === productId);
    let body = product
    let statusCode = 200
    if(!product){
        statusCode = 404
        body = 'User not found!'
    }
    return {
        statusCode,
        body: JSON.stringify(body)
    };
};

module.exports.getAll = async (event) => {
    const products = await readFile('data/products.json');
    return {
        statusCode: 200,
        body: products
    };
};
