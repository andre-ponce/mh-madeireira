export async function getHomeData() {
  const response = await fetch(`${process.env.API_CATALOG}/home`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
    },
  });

  return response.json();
}

export async function signupNewsletter({ email, name }) {
  const response = await fetch(`${process.env.API_CATALOG}/newsletter`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ nome: name, email, cadastradoVia: 'site' }),
  });

  return response.json();
}
