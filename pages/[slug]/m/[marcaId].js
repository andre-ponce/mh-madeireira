import { getGlobalData } from '@/server/api/global.api';
import { getCategoryResults } from '@/server/api/catalog.api';

export { default } from '../catalog';

export async function getServerSideProps({ query }) {
  const global = await getGlobalData();
  const { marcaId, slug, ...rest } = query;
  const category = await getCategoryResults(`m-${marcaId}`, rest);
  return {
    props: { global, category },
  };
}
