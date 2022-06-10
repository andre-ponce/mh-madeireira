export function verbsRouter(router) {
  const verbs = Object.keys(router)
    .map((verb) => verb.toLowerCase())
    .filter((verb) => ['get', 'post', 'put', 'delete', 'patch'].includes(verb))
    .reduce((current, verb) => ({ ...current, [verb]: router[verb] }), {});

  return (req, res) => {
    const method = req.method.toLowerCase();
    const route = verbs[method];
    if (!route || typeof route !== 'function') {
      return res.status(405).end();
    }

    return route(req, res);
  };
}
