export default async (req, res) => {
  const { email } = req.query;
  const remoteUrl = `${process.env.API_CHECKOUT}/checkout/cliente/email-disponivel?email=${email}`;
  try {
    const apiRes = await fetch(remoteUrl, {
      method: 'GET',
      headers: {
        authorization: process.env.API_CATALOG_TOKEN,
      },
    });
    const avaliable = await apiRes.json();
    return res.status(200).json({ avaliable, email });
  } catch {
    // defaults to true, if the api is not available
    return { avaliable: true, email };
  }
};
