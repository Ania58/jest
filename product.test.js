const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product');

beforeEach(() => {
    resetProducts();
});

describe ('addProduct',() => {
    it ('should be added', () => {
        addProduct('cola', '1.20'); // Add the product
        const products = getProducts(); // Use getProducts to retrieve the current list
        expect(products[products.length - 1]).toEqual({ // Check the last added product
            id: 0,
            name: 'cola',
            price: '1.20'
        })
    });
    it('should throw an error if name or price are not defined', () => {
        expect(() => addProduct(null, '1.20')).toThrow('name and price must be defined');
        expect(() => addProduct('cola', null)).toThrow('name and price must be defined');
    });
    it('should not be added twice', () => {
        addProduct('cola', '1.20');  // First add
        expect(() => addProduct('cola', '1.20')).toThrow('this product has already been added')
    });
})

beforeEach(() => {
    resetProducts();
});

describe('remove product',() => {
    it('should remove the product with the specified id', () => {
        addProduct('cola', '1.20');
        addProduct('water', '0.80');
        removeProduct(1);  // Remove product with id = 1
        const products = getProducts();
        expect(products.find(product => product.id === 1)).toBeUndefined();  // Ensure product with id = 1 no longer exists
    });
    it('should throw an error if the product does not exist',() => {
        expect(() => removeProduct(11)).toThrow('this product does not exist')
    });
})