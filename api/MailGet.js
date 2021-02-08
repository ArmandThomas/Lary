export async function MailGet (mail) {
  const Url = 'https://www.armandthomas.fr/api/Mail/get.php?mail='+mail
  return await fetch(Url)
    .then((response) => response.json())
  }
