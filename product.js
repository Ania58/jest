let products = []; // declaramos una variable products vacía
let id = 0; // declaramos una variable id con valor 0

const resetProducts = () => {
    products = [];
    id = 0;
}

const addProduct = (name,price) => {
    if (!name || !price) throw new Error('name and price must be defined');
    
    const existingProduct = products.find(product => product.name === name && product.price === price);
    if (existingProduct) throw new Error('this product has already been added');

    const product = {
        id: id,
        name: name,
        price: price
    }
    products.push(product);
    id ++
}

const removeProduct = (idToRemove) => {
    const productIndex = products.findIndex(product => product.id === idToRemove);
    if (productIndex === -1) {
        throw new Error('this product does not exist');
    }
    products = products.filter(product => product.id !== idToRemove)
}

const getProducts = () => {
    return products;
}

const getProduct = (idToFind) => {
    return products.find(product => product.id === idToFind);
}

const updateProduct = (idToUpdate, newName, newPrice) => {
    const product = products.find(product => product.id === idToUpdate);
    if (product) {
        product.name = newName;
        product.price = newPrice;
    }
}

module.exports = { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct}