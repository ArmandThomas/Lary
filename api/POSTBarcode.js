export async function PostBarcode (mail,barcode) {
  const Url = 'https://www.armandthomas.fr/api/BarcodeScanned/post.php?mail='+mail+'&barcode='+barcode
  console.log(Url)
  return await fetch(Url)
    .then((response) => response.json())
  }
