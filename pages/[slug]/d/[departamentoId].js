import { getGlobalData } from '@/server/api/global.api';
import { getCategoryResults } from '@/server/api/catalog.api';

export { default } from '../catalog';

export async function getServerSideProps({ query }) {
  const global = await getGlobalData();
  const { departamentoId, slug, ...rest } = query;
  const category = await getCategoryResults(`d-${departamentoId}`, rest);
  return {
    props: { global, category },
  };
}
