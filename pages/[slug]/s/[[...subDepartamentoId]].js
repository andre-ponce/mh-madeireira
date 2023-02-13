import { getGlobalData } from '@/server/api/global.api';
import { getCategoryResults } from '@/server/api/catalog.api';
import { buildFilters } from '@/helpers/filterRouter';

export { default } from '../catalog';

export async function getStaticProps({ params }) {
  const [global] = await getGlobalData();
  const { subDepartamentoId: [subDepartamentoId, ...rest] } = params;
  const query = buildFilters(rest.join('/'));
  const [category, status] = await getCategoryResults(`s-${subDepartamentoId}`, query);
  if (status.notFound) {
    return { notFound: true, revalidate: 1 };
  }

  return {
    props: { global, category },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
