import { buildSearchUrl, buildUrl, getCurrentRoute } from '@/helpers/filterRouter';
import { useRouter } from 'next/router';

function getCurrentPage(p) {
  if (!p) {
    return 1;
  }

  let page = p;
  if (Array.isArray(page)) {
    [page] = page;
  }

  if (typeof page === 'string') {
    if (/[^\d]{1,}/g.test(page)) {
      return 1;
    }

    return parseInt(page, 10);
  }

  if (typeof page !== 'number') {
    return 1;
  }

  return page;
}

export function useCategoryFilter() {
  const router = useRouter();

  function isChecked(filterName, filterId) {
    const { filters } = getCurrentRoute(router.asPath);
    if (!filters) {
      return false;
    }

    const group = filters[filterName];

    if (!group) {
      return false;
    }

    return group.includes(filterId);
  }

  async function onToggleFilter(filterName, filterId) {
    const { filters, ...rest } = getCurrentRoute(router.asPath);
    let values = filters[filterName] ?? [];

    if (!Array.isArray(values)) {
      values = [values];
    }

    if (values.includes(filterId)) {
      values = values.filter((item) => item !== filterId);
    } else {
      values.push(filterId);
    }

    delete filters.p;

    filters[filterName] = values;

    const url = buildUrl(window.location.href, { ...rest, filters });

    await router.push(url.href);
  }

  const pagination = {
    currentPage: (() => {
      const { filters } = getCurrentRoute(router.asPath);
      return getCurrentPage(filters.p);
    })(),
    next: (() => {
      const { filters, ...rest } = getCurrentRoute(router.asPath);
      const page = getCurrentPage(filters.p);
      filters.p = [`${page + 1}`];
      const url = buildUrl(`http://exemple.com${router.asPath}`, { ...rest, filters });
      return url.pathname;
    })(),
    prev: (() => {
      const { filters, ...rest } = getCurrentRoute(router.asPath);
      const page = getCurrentPage(filters.p);
      filters.p = [`${page - 1}`];
      if (page === 2) {
        delete filters.p;
      }
      const url = buildUrl(`http://exemple.com${router.asPath}`, { ...rest, filters });
      return url.pathname;
    })(),
  };

  const orderBy = {
    currentOrder: (() => {
      const { filters } = getCurrentRoute(router.asPath);
      return [filters.ordem] ?? '';
    })(),
    async reorder(newOrder) {
      const { filters, ...rest } = getCurrentRoute(router.asPath);
      filters.ordem = [newOrder];
      delete filters.p;
      const url = buildUrl(window.location.href, { ...rest, filters });
      await router.push(url.href);
    },
  };

  return [isChecked, onToggleFilter, pagination, orderBy];
}

export function useSearchFilter() {
  const router = useRouter();
  const { query } = router;

  function isChecked(filterName, filterId) {
    const group = query[filterName];

    if (!group) {
      return false;
    }

    return group.includes(filterId);
  }

  async function onToggleFilter(filterName, filterId) {
    const filters = { ...query };
    let values = filters[filterName] ?? [];

    if (!Array.isArray(values)) {
      values = [values];
    }

    if (values.includes(filterId)) {
      values = values.filter((item) => item !== filterId);
    } else {
      values.push(filterId);
    }

    if (filters.p) {
      filters.p = 1;
    }

    filters[filterName] = values;

    const url = buildSearchUrl(`http://exemple.com${router.asPath}`, filters);
    await router.push(`${url.pathname}${url.search}`);
  }

  const pagination = {
    currentPage: parseInt(query.p || '1', 10),
    next: (() => {
      const filters = { ...query };
      const page = parseInt(filters.p || '1', 10);
      filters.p = page + 1;
      const url = buildSearchUrl(`http://exemple.com${router.asPath}`, filters);
      return `${url.pathname}${url.search}`;
    })(),
    prev: (() => {
      const filters = { ...query };
      const page = parseInt(filters.p || '1', 10);
      filters.p = page - 1;
      const url = buildSearchUrl(`http://exemple.com${router.asPath}`, filters);
      return `${url.pathname}${url.search}`;
    })(),
  };

  const orderBy = {
    currentOrder: [query.ordem ?? ''],
    async reorder(newOrder) {
      const filters = { ...query };
      filters.ordem = newOrder;
      delete filters.p;
      const url = buildSearchUrl(`http://exemple.com${router.asPath}`, filters);
      await router.push(`${url.pathname}${url.search}`);
    },
  };

  return [isChecked, onToggleFilter, pagination, orderBy];
}
