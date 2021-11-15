export async function getCategoryResults (id, query) {

  const url = new URL(`${process.env.API_CATALOG}/catalogos/${id}`);
  url.searchParams.append('cont', '21');

  if (query) {
    Object.keys(query).forEach(key => {
      const value = query[key];
      if (Array.isArray(value)) {
        value.forEach(v => {
          url.searchParams.append(key, value);
        })
      }
      else {
        url.searchParams.append(key, value);
      }
    })
  }

  const response = await fetch(url, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
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
