export async function getInstitutionalPage (slug) {
  const response = await fetch(`${process.env.API_CATALOG}/institucional/${slug}`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
    },
  });

  if (response.status == 404) {
    return {
      notFound: true,
    };
  }

  return await response.json();
}
