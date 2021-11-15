import { useRouter } from 'next/router';

export default function useCategoryFilter () {
  const router = useRouter();
  const { query } = router;

  function isChecked (filter, id) {
    return query[filter] && query[filter].includes(id);
  }

  async function onToggleFilter (filter, id) {

    if (!query[filter]) {
      query[filter] = [];
    }

    if (!Array.isArray(query[filter])) {
      query[filter] = [query[filter]];
    }

    if (query[filter].includes(id)) {
      query[filter] = query[filter].filter( item => item != id);
    }
    else {
      query[filter].push(id);
    }

    await router.push({ query })
  }

  return [isChecked, onToggleFilter]
}
