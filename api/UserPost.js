export async function UserPost (username,password,mail) {
  const Url = 'https://www.armandthomas.fr/api/User/post.php?user='+username+'&password='+password+'&mail='+mail
  return await fetch(Url)
    .then((response) => response.json())
  }
