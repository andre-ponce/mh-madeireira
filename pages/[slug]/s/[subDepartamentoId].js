import { getGlobalData } from '@/server/api/global.api';
import { getCategoryResults } from '@/server/api/catalog.api';

export { default } from '../catalog';

export async function getServerSideProps({ query }) {
  const global = await getGlobalData();
  const { subDepartamentoId, slug, ...rest } = query;
  const category = await getCategoryResults(`s-${subDepartamentoId}`, rest);
  return {
    props: { global, category },
  };
}
