import { getGlobalData } from '@/server/api/global.api';
import { getCategoryResults } from '@/server/api/catalog.api';
import { buildFilters } from '@/helpers/filterRouter';

export { default } from '../catalog';

export async function getStaticProps({ params }) {
  const [global] = await getGlobalData();
  const { linhaId: [linhaId, ...rest] } = params;
  const query = buildFilters(rest.join('/'));
  console.log(query);
  const [category, status] = await getCategoryResults(`l-${linhaId}`, query);
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
