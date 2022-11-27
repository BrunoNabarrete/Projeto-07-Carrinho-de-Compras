const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
 it('test if getSavedCartItems, localStorage.getItem metod is called', () => {
  getSavedCartItems()
  expect(localStorage.getItem).toHaveBeenCalled();
 });
 it('test if getSavedCartItems, localStorage.getitem is called with cartItems', () => {
  getSavedCartItems()
  expect(localStorage.getItem).toHaveBeenCalledWith('cartItems')
 });
});
