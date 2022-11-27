const getItemApi = (param) => `https://api.mercadolibre.com/items/${param}`;

const fetchItem = async (param) => {
  if (!param) {
    throw new Error('You must provide an url');
  }

  const url = getItemApi(param);
  const promise = await fetch(url);
  const data = await promise.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
