export async function getProduct (id) {
  const response = await fetch(`${process.env.API_HOST}/produto/${id}`, {
    headers: {
      authorization: process.env.API_DADOS_GLOBAIS_TOKEN,
    },
  });

  if (response.status == 200) {
    return await response.json();
  }

  if (response.status == 404) {
    return { notFound: true };
  }

  return {};
}

export async function getGalery(id) {
  const response = await fetch(`${process.env.API_HOST}/produto/${id}/galeria`, {
    headers: {
      authorization: process.env.API_DADOS_GLOBAIS_TOKEN,
    },
  });

  if (response.status == 200) {
    return await response.json();
  }

  return [];
}

export async function getBuyTogether(id) {
  const response = await fetch(`${process.env.API_HOST}/produto/${id}/compre-junto`, {
    headers: {
      authorization: process.env.API_DADOS_GLOBAIS_TOKEN,
    },
  });

  if (response.status == 200) {
    return await response.json();
  }

  return [];
}

export async function getRelateds (id) {
  const response = await fetch(`${process.env.API_HOST}/produto/${id}/relacionados`, {
    headers: {
      authorization: process.env.API_DADOS_GLOBAIS_TOKEN,
    },
  });

  if (response.status == 200) {
    return await response.json();
  }

  return [];
}
