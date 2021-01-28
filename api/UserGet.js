export async function UserGet (username,password) {
  const Url = 'https://www.armandthomas.fr/api/User/get?user='+username+'&password='+password
  return await fetch(Url)
    .then((response) => response.json())
  }
