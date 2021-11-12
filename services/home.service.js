export async function getHomeData () {
  const response = await fetch(`${process.env.API_CATALOG}/home`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
    },
  });

  return await response.json();
}

export async function signupNewsletter ({ email, name }) {
  const response = await fetch(`${process.env.API_CATALOG}/home`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
    },
    method: 'post',
    body: JSON.stringify({ nome: name, email })
  });

  return await response.json();
}
