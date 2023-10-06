const products = [];

exports.addProduct = (name, age) => {
    products.push({ name, age });
}

exports.getProducts = () => products.slice();