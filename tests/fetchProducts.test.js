require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const { results } = require('../mocks/search');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('test if fetchProduct is a function', () => {
    expect(typeof fetchProducts).toBe('function')
  })
  it('test if fetchProducts with arguments called fetch', async () => {
    expect.assertions(1)
    await fetchProducts('computador');
    expect(global.fetch).toHaveBeenCalled();
  });
  it('test if fetchProducts with argument computador fetch use correct endpoint', async () => {
    await fetchProducts('computador');
    expect(global.fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  });
  it('test if fetchProducts with argument computador return data like computadorSearch', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });
  it('test if called fetchProducts without param', async () => {
    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  })
});
