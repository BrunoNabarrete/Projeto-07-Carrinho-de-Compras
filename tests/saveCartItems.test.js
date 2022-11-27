const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('test if saveCartItemswith, localStorage.setItem is called', () => {
    const cartItems = 'qualquer argumento'
    saveCartItems(cartItems)
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('test if called saveCartItems with two arguments we have localStorage.setItem', () => {
    const cartItems = 'qualquer argumento'
    saveCartItems(cartItems);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', cartItems);
  })
});
