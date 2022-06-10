export async function getGlobalData() {
  const response = await fetch(`${process.env.API_CATALOG}/dados-globais`, {
    headers: {
      authorization: process.env.API_CATALOG_TOKEN,
    },
  });

  return response.json();
}
