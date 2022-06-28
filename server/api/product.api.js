export async function getProduct(id) {
  const response = await fetch(`${process.env.API_CATALOG}/produto/${id}`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
    },
  });

  if (response.status === 200) {
    return response.json();
  }

  if (response.status === 404) {
    return { notFound: true };
  }

  return {};
}

export async function getProductFreight(id, cep) {
  const response = await fetch(`${process.env.API_ACCOUNT}/v1/checkout/frete/produto/${id}/${cep}`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
    },
  });

  if (response.ok) {
    return response.json();
  }

  if (response.status === 404) {
    return { notFound: true };
  }

  return [];
}

export async function getGalery(id) {
  const response = await fetch(`${process.env.API_CATALOG}/produto/${id}/galeria`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
    },
  });

  if (response.status === 200) {
    return response.json();
  }

  return [];
}

export async function getDescription(id) {
  const response = await fetch(`${process.env.API_CATALOG}/produto/${id}/descricao`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
    },
  });

  if (response.status === 200) {
    return response.json();
  }

  return { descricaoHTML: '' };
}

export async function getBuyTogether(id) {
  const response = await fetch(`${process.env.API_CATALOG}/produto/${id}/compre-junto`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
    },
  });

  if (response.status === 200) {
    return response.json();
  }

  return [];
}

export async function getRelateds(id) {
  const response = await fetch(`${process.env.API_CATALOG}/produto/${id}/relacionados`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
    },
  });

  if (response.status === 200) {
    return response.json();
  }

  return [];
}

export async function getPaymentConditions(id) {
  const response = await fetch(`${process.env.API_CATALOG}/produto/${id}/condicoes-de-pagamento`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
    },
  });

  if (response.status === 200) {
    return response.json();
  }

  return [];
}