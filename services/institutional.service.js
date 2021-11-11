export async function getInstitutionalPage (slug) {

  const res = await fetch(`https://api-catalogo.maximaweb.com.br/institucional/${slug}`, {
    headers: {
      authorization: process.env.API_DADOS_GLOBAIS_TOKEN,
    },
  });

  if (res.status == 404) {
    return {
      notFound: true,
    };
  }

  return await res.json();
}
