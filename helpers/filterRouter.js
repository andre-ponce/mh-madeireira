/**
 * @param {string} filterExpression - /p---1/categoria--- /marca---marca-1--marca-2
*/
export function buildFilters(filterExpression) {
  // ['' , 'p---a', 'categoria--- ', 'marca---marca-1--marca-2']
  let params = filterExpression.split('/');

  // [[''] , ['p', 'a'], ['categoria', ' '], ['marca', 'marca-1--marca-2']]
  params = params.map((keyValue) => keyValue.split('---'));

  // [['p', 'a'], ['categoria', ' '], ['marca', 'marca-1--marca-2']]
  params = params.filter((keyValue) => keyValue.length === 2);

  // [['p', 'a'], ['marca', 'marca-1--marca-2']]
  params = params.filter(([key, values]) => !!key.trim() && !!values.trim());

  // [{ p: ['a'] }, { marca: ['marca-1', 'marca-2'] }]
  params = params.map(([key, values]) => ({ [key]: values.split('--') }));

  // { p: ['a'], marca: ['marca-1', 'marca-2'] }
  params = params.reduce((acc, keyValue) => ({ ...acc, ...keyValue }), {});

  return params;
}

/**
 * @param '/padaria-e-confeitaria/l/2/p---1/marca---marca-1--marca-2'
 * @return {{
*   slug: string,
*   categoryType: string,
*   categoryId: number,
*   filterExpression: string,
*   filters: {}
* }}
*/
export function getCurrentRoute(path) {
  const url = new URL(`http://exemple.com${path}`);
  const rgx = /^\/([a-z0-9-]{1,})\/([l|d|s|m])\/([\d]{1,})\/?([a-z0-9-/]{0,})/.exec(url.pathname);

  if (!rgx) return '';
  const [, slug, categoryType, categoryId, filterExpression] = rgx;

  const filters = buildFilters(filterExpression);

  const route = {
    slug,
    categoryType,
    categoryId,
    filterExpression,
    filters,
  };

  return route;
}

export function buildUrl(href, {
  slug,
  categoryType,
  categoryId,
  filters,
}) {
  const url = new URL(href);
  let expressions = [];

  if (filters) {
    const keys = Object.keys(filters)
      .sort()
      .filter((key) => !!key)
      .filter((key) => !!filters[key].length);

    expressions = keys
      .map((key) => [key, filters[key].sort().filter((val) => val)])
      .filter(([, values]) => values.length)
      .map(([key, values]) => `${key}---${values.join('--')}`);
  }

  const path = [
    slug,
    categoryType,
    categoryId,
    ...expressions,
  ].join('/');

  url.pathname = path;

  return url;
}

export function buildSearchUrl(href, query) {
  const url = new URL(href);
  console.log(query);
  const filters = [...url.searchParams.keys()];

  filters.forEach((key) => {
    if (!query[key]) {
      url.searchParams.delete(key);
    }
  });

  Object.keys(query).forEach((key) => {
    const values = query[key];

    if (!values) {
      url.searchParams.delete(key);
    } else if (Array.isArray(values)) {
      url.searchParams.delete(key);
      values.forEach((val) => {
        url.searchParams.append(key, val);
      });
    } else {
      url.searchParams.set(key, values);
    }
  });

  return url;
}
