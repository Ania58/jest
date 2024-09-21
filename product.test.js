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
});

beforeEach(() => {
    resetProducts();
});

describe('get product', () => {
    it('should find the product with the specific id', () => {
        addProduct('cola', '1.20');
        addProduct('water', '0.80');
        getProduct(1);  // Get product with id = 1
        const products = getProducts();
        expect(products.find(product => product.id === 1)).toEqual({
            id: 1,
            name: 'water',
            price: '0.80'
        });
    });
    it('should throw an error if the product does not exist',() => {
        expect(() => getProduct(11)).toThrow('this product does not exist')
    });
});

beforeEach(() => {
    resetProducts();
});

describe('update product', () => {
    it('should find the product with the specific id', () => {
        addProduct('cola', '1.20');
        addProduct('water', '0.80');
        updateProduct(1,'juice', '1.40');  // Update product with id = 1
        const products = getProducts();
        expect(products.find(product => product.id === 1)).toEqual({
            id: 1,
            name: 'juice',
            price: '1.40'
        });
    });
    it('should throw an error if the product does not exist',() => {
        expect(() => updateProduct(3,'juice', '1.40')).toThrow('this product does not exist')
    });
    it('should throw an error if name or price are not defined', () => {
        addProduct('water', '0.80');  // Add a product to test with
        expect(() => updateProduct(1, null, '0.80')).toThrow('name and price must be defined');
        expect(() => updateProduct(1, 'water', null)).toThrow('name and price must be defined');
    });
});
