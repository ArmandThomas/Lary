// API/Read

export function readOpenFoodFactsProducts (product) {
  const URL = 'https://fr.openfoodfacts.org/';
  const UrlApi = URL+'api/v0/product/'+product+'.json'
  console.log(UrlApi)
  return fetch(UrlApi)
    .then((response) => response.json())
    .catch((error) => console.error(error))
}
