require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
 it('Test if fetchItem is a function', () => {
  expect(typeof fetchItem).toBe('function')
 });
 it('Test if fetchItem with arguments called fetch', async () => {
  await fetchItem('MLB1615760527')
  expect(global.fetch).toHaveBeenCalled()
 });
 it('Test if call fetchItem with MLB1615760527 arguments, the function use the correct endpoint', async () => {
  await fetchItem('MLB1615760527');
  expect(global.fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
 });
 it('Test if return of the function is a object', async () => {
  const result = await fetchItem('MLB1615760527');
  expect(result).toEqual(item);
 });
 it('Test if fetchItem without argument', async () => {
  try {
    await fetchItem();
  } catch (error) {
    expect(error).toEqual(new Error('You must provide an url'))
  }
 })
});
