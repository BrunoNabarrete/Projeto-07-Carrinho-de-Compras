const getInfoApi = (param) => `https://api.mercadolibre.com/sites/MLB/search?q=${param}`;

const fetchProducts = async (param) => {
  if (!param) {
    throw new Error('You must provide an url');
  }
  
  const url = getInfoApi(param);

  const response = await fetch(url);
  const data = await response.json();

  const { results } = data;

  return results;

  // const itemID = [];
  // const itemThumb = [];
  // const itemTitle = [];
  // results.forEach((product) => itemID.push(product.id));
  // results.forEach((product) => itemTitle.push(product.title));
  // results.forEach((product) => itemThumb.push(product.thumbnail));

  // console.log(itemThumb);
  // return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
