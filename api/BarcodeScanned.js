export async function BarcodeScanned (mail) {
  const Url = 'https://www.armandthomas.fr/api/BarcodeScanned/get.php?mail='+mail
  return await fetch(Url)
    .then((response) => response.json())
  }
