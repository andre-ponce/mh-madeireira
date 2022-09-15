import { getGlobalData } from '@/server/api/global.api';
import { getCategoryResults } from '@/server/api/catalog.api';

export { default } from '../catalog';

export async function getStaticProps({ params }) {
  const [global] = await getGlobalData();
  const { departamentoId, slug, ...rest } = params;
  const [category, status] = await getCategoryResults(`d-${departamentoId}`, rest);
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
